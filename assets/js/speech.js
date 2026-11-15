/* Speech: French text-to-speech (browser voices), speech recognition and a
   simple microphone recorder. Edge and Chrome have the best French voices;
   speech recognition works in Chrome, Edge and Safari. */
(function () {
  'use strict';
  var A1 = window.A1, U = A1.U, S = A1.S;
  var Sp = A1.Speech = {};
  var synth = window.speechSynthesis;
  Sp.ttsSupported = !!(synth && window.SpeechSynthesisUtterance);
  Sp.voices = [];

  var FEMALE = /denise|eloise|vivienne|julie|am[ée]lie|audrey|hortense|marie|c[ée]line|brigitte|charline|sylvie|ariane|coralie|jacqueline|yvette|jos[ée]phine|aurelie|virginie|léa|lea|chantal|sabina|google fran[cç]ais|female|femme|natalie|natasha|caroline|manon|louise/i;
  var MALE = /henri|remy|rémy|paul|thomas|claude|antoine|jean|guillaume|alain|jerome|jérôme|maurice|yves|fabrice|daniel|nicolas|mathieu|gerard|male|homme|sylvain|lucien|pierre/i;

  function loadVoices() {
    if (!Sp.ttsSupported) return [];
    var all = synth.getVoices() || [];
    Sp.voices = all.filter(function (v) { return /^fr(-|_|$)/i.test(v.lang); });
    return Sp.voices;
  }
  function score(v, want) {
    var s = 0, n = v.name;
    if (/natural|neural/i.test(n)) s += 30;
    if (/online/i.test(n)) s += 12;
    if (/google/i.test(n)) s += 10;
    if (/premium|enhanced/i.test(n)) s += 8;
    if (/^fr[-_]FR$/i.test(v.lang)) s += 6;
    if (/CA$/i.test(v.lang)) s -= 4;
    if (want === 'F' && FEMALE.test(n)) s += 5;
    if (want === 'M' && MALE.test(n)) s += 5;
    if (want === 'F' && MALE.test(n) && !FEMALE.test(n)) s -= 6;
    if (want === 'M' && FEMALE.test(n) && !MALE.test(n)) s -= 6;
    return s;
  }
  Sp.pickVoice = function (want) {
    if (!Sp.voices.length) loadVoices();
    var key = want === 'M' ? 'voiceM' : 'voiceF';
    var chosen = S.get(key);
    if (chosen) {
      var v = Sp.voices.filter(function (x) { return x.name === chosen; })[0];
      if (v) return v;
    }
    var best = null, bs = -1e9;
    Sp.voices.forEach(function (v) { var s = score(v, want || 'F'); if (s > bs) { bs = s; best = v; } });
    return best;
  };
  Sp.ready = new Promise(function (resolve) {
    if (!Sp.ttsSupported) return resolve([]);
    if (loadVoices().length) return resolve(Sp.voices);
    var done = false;
    var finish = function () { if (!done) { done = true; resolve(loadVoices()); } };
    synth.addEventListener && synth.addEventListener('voiceschanged', finish);
    var tries = 0;
    var iv = setInterval(function () { if (loadVoices().length || ++tries > 20) { clearInterval(iv); finish(); } }, 150);
  });
  if (Sp.ttsSupported && synth.addEventListener) synth.addEventListener('voiceschanged', loadVoices);

  /* Text cleanup so the voice reads naturally */
  Sp.clean = function (t) {
    return String(t || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\[\[([^\]|]+)(\|[^\]]*)?\]\]/g, '$1')
      .replace(/\((?:m|f|pl|inf|fam|form)\.?\)/gi, ' ')
      .replace(/\((e|s|es|x|ne|le|se|euse|ice|ère|ive)\)/gi, '')
      .replace(/([^\s/])\/([^\s/])/g, '$1, $2')
      .replace(/\s+\/\s+/g, ', ')
      .replace(/_{2,}/g, ' … ')
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '')
      .replace(/\s+/g, ' ').trim();
  };
  function chunks(text) {
    if (text.length <= 180) return [text];
    var parts = text.match(/[^.!?;:]+[.!?;:]*\s*/g) || [text], out = [], cur = '';
    parts.forEach(function (p) {
      if ((cur + p).length > 180 && cur) { out.push(cur.trim()); cur = ''; }
      cur += p;
    });
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  var token = 0;
  Sp.speaking = false;
  Sp.stop = function () { token++; Sp.speaking = false; if (Sp.ttsSupported) synth.cancel(); clearSpeakingMarks(); };
  function clearSpeakingMarks() { U.$$('.is-speaking').forEach(function (e) { e.classList.remove('is-speaking'); }); }

  /* Speak one text under a given cancellation token (internal). */
  function speakRaw(text, opts, my) {
    var t = Sp.clean(text);
    if (!t) return Promise.resolve();
    var voice = Sp.pickVoice(opts.voice || 'F');
    var rate = (opts.rate || S.get('rate') || 0.95) * (opts.slow ? 0.7 : 1);
    return Sp.ready.then(function () {
      return chunks(t).reduce(function (p, part) {
        return p.then(function () {
          if (my !== token) return;
          return new Promise(function (resolve) {
            var u = new SpeechSynthesisUtterance(part);
            u.lang = (voice && voice.lang) || 'fr-FR';
            if (voice) u.voice = voice;
            u.rate = rate;
            /* only one French voice installed? lower the pitch for "male" lines */
            u.pitch = opts.voice === 'M' && voice && !MALE.test(voice.name) ? 0.75 : 1;
            var safety = setTimeout(resolve, 2500 + part.length * 160 / rate);
            u.onend = u.onerror = function () { clearTimeout(safety); resolve(); };
            if (synth.paused) synth.resume();
            synth.speak(u);
          });
        });
      }, Promise.resolve());
    });
  }

  /* speak(text, {voice:'F'|'M', rate, slow, el}) -> Promise (resolves when finished or interrupted) */
  Sp.speak = function (text, opts) {
    opts = opts || {};
    if (!Sp.ttsSupported) { U.toast('Your browser has no text-to-speech. Try Chrome or Edge.', 'warn'); return Promise.resolve(); }
    synth.cancel(); clearSpeakingMarks();
    var my = ++token;
    if (opts.el) opts.el.classList.add('is-speaking');
    Sp.speaking = true;
    return speakRaw(text, opts, my).then(function () {
      if (opts.el) opts.el.classList.remove('is-speaking');
      if (my === token) Sp.speaking = false;
    });
  };

  /* lines: [['F','text'], ['M','text'], ['N','text']] spoken one after another.
     opts: {rate, gap (ms), onLine(i) — called with -1 at the end} */
  Sp.speakLines = function (lines, opts) {
    opts = opts || {};
    if (!Sp.ttsSupported) { U.toast('Your browser has no text-to-speech. Try Chrome or Edge.', 'warn'); return Promise.resolve(); }
    synth.cancel(); clearSpeakingMarks();
    var my = ++token;
    Sp.speaking = true;
    return lines.reduce(function (p, line, i) {
      return p.then(function () {
        if (my !== token) return;
        if (opts.onLine) opts.onLine(i);
        return speakRaw(line[1], { voice: line[0] === 'M' ? 'M' : 'F', rate: opts.rate }, my).then(function () {
          if (my !== token) return;
          return new Promise(function (r) { setTimeout(r, opts.gap == null ? 450 : opts.gap); });
        });
      });
    }, Promise.resolve()).then(function () {
      if (my === token) Sp.speaking = false;
      if (opts.onLine) opts.onLine(-1);
    });
  };
  Sp.isCurrent = function () { return token; };

  /* ---------- speech recognition ---------- */
  var Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  Sp.srSupported = !!Rec;
  var active = null;
  Sp.listen = function (opts) {
    opts = opts || {};
    if (!Rec) return Promise.reject({ error: 'unsupported' });
    if (active) { try { active.abort(); } catch (e) { /* ignore */ } }
    Sp.stop();
    return new Promise(function (resolve, reject) {
      var r = new Rec();
      active = r;
      r.lang = 'fr-FR';
      r.interimResults = true;
      r.maxAlternatives = 5;
      r.continuous = false;
      var finalText = '', alts = [], conf = 0, settled = false;
      var timer = setTimeout(function () { try { r.stop(); } catch (e) { /* ignore */ } }, opts.timeout || 9000);
      r.onresult = function (ev) {
        var interim = '';
        for (var i = ev.resultIndex; i < ev.results.length; i++) {
          var res = ev.results[i];
          if (res.isFinal) {
            finalText += res[0].transcript;
            conf = res[0].confidence;
            for (var j = 0; j < res.length; j++) alts.push(res[j].transcript);
          } else interim += res[0].transcript;
        }
        if (opts.onInterim) opts.onInterim(finalText + interim);
      };
      r.onerror = function (ev) {
        clearTimeout(timer);
        if (settled) return; settled = true; active = null;
        reject({ error: ev.error || 'error' });
      };
      r.onend = function () {
        clearTimeout(timer);
        if (settled) return; settled = true; active = null;
        if (!finalText && !alts.length) reject({ error: 'no-speech' });
        else resolve({ text: finalText.trim(), alts: U.uniq(alts.map(function (a) { return a.trim(); })), confidence: conf });
      };
      try { r.start(); } catch (e) { settled = true; active = null; reject({ error: 'start-failed' }); }
    });
  };
  Sp.stopListening = function () { if (active) { try { active.stop(); } catch (e) { /* ignore */ } } };
  Sp.srErrorText = function (e) {
    var code = (e && e.error) || e;
    return ({
      'unsupported': 'Speech recognition is not available in this browser. Use Chrome or Edge (or Safari), or use the recorder and compare yourself.',
      'not-allowed': 'Microphone permission was blocked. Allow the microphone for this site in your browser settings.',
      'service-not-allowed': 'Microphone permission was blocked. Allow the microphone for this site in your browser settings.',
      'no-speech': 'I didn\'t hear anything. Tap the mic and speak right away.',
      'audio-capture': 'No microphone was found.',
      'network': 'Speech recognition needs an internet connection.',
      'aborted': 'Stopped.'
    })[code] || 'Speech recognition error (' + code + ').';
  };

  /* best match of what was heard against accepted answers */
  Sp.grade = function (heard, answers) {
    var list = [].concat(answers), best = { score: 0, target: list[0], heard: heard.text || '' };
    var candidates = [heard.text].concat(heard.alts || []);
    list.forEach(function (target) {
      candidates.forEach(function (c) {
        var s = U.similarity(target, c);
        if (s > best.score) best = { score: s, target: target, heard: c };
      });
    });
    best.pct = Math.round(best.score * 100);
    best.words = U.wordMatch(best.target, best.heard);
    best.ok = best.pct >= 75;
    return best;
  };

  /* ---------- recorder (fallback & self-comparison) ---------- */
  Sp.recSupported = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  Sp.record = function () {
    if (!Sp.recSupported) return Promise.reject(new Error('Recording is not supported in this browser.'));
    return navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var mr = new MediaRecorder(stream), chunksArr = [];
      mr.ondataavailable = function (e) { if (e.data && e.data.size) chunksArr.push(e.data); };
      mr.start();
      return {
        stop: function () {
          return new Promise(function (resolve) {
            mr.onstop = function () {
              stream.getTracks().forEach(function (t) { t.stop(); });
              resolve(URL.createObjectURL(new Blob(chunksArr, { type: mr.mimeType || 'audio/webm' })));
            };
            mr.stop();
          });
        }
      };
    });
  };

  /* Global: any element with data-say speaks when clicked / Enter */
  function sayFrom(el) {
    var t = el.getAttribute('data-say');
    if (!t) return;
    Sp.speak(t, { el: el, voice: el.getAttribute('data-voice') || 'F', slow: el.hasAttribute('data-slow') });
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-say]');
    if (el) { e.preventDefault(); sayFrom(el); }
  });
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('[data-say]:not(button)')) { e.preventDefault(); sayFrom(e.target); }
  });
})();
