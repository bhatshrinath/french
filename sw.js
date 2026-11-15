/* Offline support: network first (so updates show up), cache as fallback. */
var CACHE = 'french-a1-v1';
var CORE = ['./', 'index.html', 'manifest.webmanifest', 'assets/icon.svg', 'assets/css/app.css',
  'assets/js/registry.js', 'assets/js/util.js', 'assets/js/store.js', 'assets/js/speech.js', 'assets/js/fr.js',
  'assets/js/tasks.js', 'assets/js/render.js', 'assets/js/quiz.js', 'assets/js/srs.js', 'assets/js/drills.js',
  'assets/js/views/today.js', 'assets/js/views/learn.js', 'assets/js/views/practice.js', 'assets/js/views/speak.js',
  'assets/js/views/exam.js', 'assets/js/views/progress.js', 'assets/js/views/library.js', 'assets/js/app.js',
  'content/nlf.js', 'content/books.js', 'content/plan.js', 'content/verbs.js', 'content/writing.js',
  'content/lessons/pronunciation.js', 'content/lessons/culture.js', 'content/lessons/grammar-1.js',
  'content/lessons/grammar-2.js', 'content/lessons/grammar-3.js', 'content/lessons/topics-1.js',
  'content/lessons/topics-2.js', 'content/decks-1.js', 'content/decks-2.js', 'content/speaking.js', 'content/exams.js'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () { return null; }); }));
  }));
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(function (res) {
    if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: true }).then(function (r) { return r || caches.match('index.html'); });
  }));
});
