/* Cloud Computing Academy — Progress & LocalStorage */
const Progress = (() => {
  const STORAGE_KEY = 'cca_progress';

  const defaults = {
    completedLessons: [],
    quizScores: {},
    finalExamScore: null,
    notes: {},
    theme: 'dark',
    mainQuizScore: null
  };

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaults };
      return { ...defaults, ...JSON.parse(raw) };
    } catch {
      return { ...defaults };
    }
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function get() {
    return load();
  }

  function markLessonComplete(lessonId) {
    const data = load();
    if (!data.completedLessons.includes(lessonId)) {
      data.completedLessons.push(lessonId);
      save(data);
    }
    return data;
  }

  function isLessonComplete(lessonId) {
    return load().completedLessons.includes(lessonId);
  }

  function saveNote(lessonId, text) {
    const data = load();
    data.notes[lessonId] = text;
    save(data);
  }

  function getNote(lessonId) {
    return load().notes[lessonId] || '';
  }

  function saveQuizScore(quizId, score, total) {
    const data = load();
    data.quizScores[quizId] = { score, total, date: new Date().toISOString() };
    save(data);
  }

  function saveMainQuizScore(score, total) {
    const data = load();
    data.mainQuizScore = { score, total, date: new Date().toISOString() };
    save(data);
  }

  function saveFinalExamScore(score, total) {
    const data = load();
    data.finalExamScore = { score, total, date: new Date().toISOString() };
    save(data);
  }

  function setTheme(theme) {
    const data = load();
    data.theme = theme;
    save(data);
  }

  function getTheme() {
    return load().theme || 'dark';
  }

  function getProgressPercent(totalLessons) {
    const completed = load().completedLessons.length;
    return totalLessons ? Math.round((completed / totalLessons) * 100) : 0;
  }

  function isCourseComplete(totalLessons) {
    const data = load();
    return data.completedLessons.length >= totalLessons &&
           data.finalExamScore &&
           data.finalExamScore.score / data.finalExamScore.total >= 0.7;
  }

  function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    get, save, markLessonComplete, isLessonComplete,
    saveNote, getNote, saveQuizScore, saveMainQuizScore,
    saveFinalExamScore, setTheme, getTheme, getProgressPercent,
    isCourseComplete, resetProgress
  };
})();
