/* Content registry: every content file calls these functions.
   Loaded first, before any file in /content. Works in the browser
   (window) and in Node (tools/validate.js provides a fake window). */
(function (g) {
  'use strict';
  var A1 = g.A1 = g.A1 || {};
  A1.lessons = A1.lessons || [];
  A1.decks = A1.decks || [];
  A1.scenarios = A1.scenarios || [];
  A1.exams = A1.exams || [];
  A1.sources = A1.sources || {};

  function tag(arr, list, kind) {
    var src = (g.document && g.document.currentScript && g.document.currentScript.getAttribute('src')) || g.__A1_FILE__ || '?';
    list.forEach(function (item) {
      if (item && typeof item === 'object') {
        A1.sources[kind + ':' + item.id] = src;
        arr.push(item);
      }
    });
  }

  A1.addLessons = function (list) { tag(A1.lessons, list, 'lesson'); };
  A1.addDecks = function (list) { tag(A1.decks, list, 'deck'); };
  A1.addScenarios = function (list) { tag(A1.scenarios, list, 'scenario'); };
  A1.addExams = function (list) { tag(A1.exams, list, 'exam'); };
})(typeof window !== 'undefined' ? window : this);
