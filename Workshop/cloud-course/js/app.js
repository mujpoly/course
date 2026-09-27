/* Cloud Computing Academy — Main Application */
(() => {
  'use strict';

  const LESSON_IDS = CourseData.sections.filter(s => s.type === 'lesson' || s.type === 'lab' || s.type === 'project').map(s => s.id);
  const TOTAL_TRACKABLE = LESSON_IDS.length;

  let currentSection = 'home';

  /* ── DOM refs ── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const els = {
    sidebar: $('#sidebar'),
    sidebarToggle: $('#sidebarToggle'),
    overlay: $('#overlay'),
    mainContent: $('#mainContent'),
    lessonTitle: $('#lessonTitle'),
    lessonSubtitle: $('#lessonSubtitle'),
    progressBar: $('#progressBar'),
    progressBarSidebar: $('#progressBarSidebar'),
    progressText: $('#progressText'),
    progressHeader: $('#progressHeader'),
    searchInput: $('#searchInput'),
    searchResults: $('#searchResults'),
    themeToggle: $('#themeToggle'),
    navLinks: $$('.nav-link'),
    sidebarNav: $('#sidebarNav')
  };

  /* ── Init ── */
  function init() {
    applyTheme(Progress.getTheme());
    renderSidebar();
    updateProgressUI();
    bindGlobalEvents();
    navigate(getHash() || 'home');
  }

  function getHash() {
    return location.hash.replace('#', '') || 'home';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    els.themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    els.themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function toggleTheme() {
    const next = Progress.getTheme() === 'dark' ? 'light' : 'dark';
    Progress.setTheme(next);
    applyTheme(next);
  }

  /* ── Navigation ── */
  function navigate(id) {
    if (!CourseData.sections.find(s => s.id === id)) id = 'home';
    currentSection = id;
    location.hash = id;

    const section = CourseData.sections.find(s => s.id === id);
    const content = getLessonContent(id);

    els.lessonTitle.textContent = content?.title || section?.title || 'Cloud Computing Academy';
    els.lessonSubtitle.textContent = content?.subtitle || (section ? `${section.num}. ${section.title}` : '');

    $$('.sidebar-link').forEach(link => {
      link.classList.toggle('active', link.dataset.section === id);
    });

    els.navLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === getNavGroup(id)));

    renderMainContent(id, content);
    closeSidebar();
    els.mainContent.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function getNavGroup(id) {
    if (id === 'home') return 'home';
    if (id.startsWith('lesson')) return 'course';
    if (id.startsWith('lab') || id === 'final-project') return 'labs';
    if (id === 'quizzes') return 'quizzes';
    if (id === 'final-exam') return 'quizzes';
    if (id === 'roadmap') return 'roadmap';
    if (id === 'final-project') return 'project';
    if (id === 'resources') return 'resources';
    if (id.startsWith('lesson')) return 'course';
    return 'course';
  }

  function renderMainContent(id, content) {
    if (!content) {
      els.mainContent.innerHTML = '<p>Content not found.</p>';
      return;
    }

    let html = content.html || '';

    if (content.summary && content.summary.length && id.startsWith('lesson')) {
      html += renderSummary(content.summary);
    }

    if (content.knowledgeCheck) {
      html += renderKnowledgeCheck(id, content.knowledgeCheck);
    }

    if (id.startsWith('lesson') && id !== 'lesson-18') {
      html += renderNotesSection(id);
      html += renderLessonActions(id);
    } else if (id.startsWith('lesson')) {
      html += renderNotesSection(id);
      html += renderLessonActions(id);
    }

    els.mainContent.innerHTML = html;
    postRender(id);
  }

  function renderSummary(items) {
    return `<section class="summary-section"><h3>What You Learned</h3><ul class="checklist">${items.map(i => `<li>✓ ${i}</li>`).join('')}</ul></section>`;
  }

  function renderKnowledgeCheck(lessonId, kc) {
    return `
      <section class="knowledge-check" data-kc="${lessonId}">
        <h3>🧠 Check Your Understanding</h3>
        <p><strong>${kc.q}</strong></p>
        <div class="quiz-options kc-options">
          ${kc.options.map((opt, i) => `<button class="quiz-opt kc-opt" data-index="${i}" data-correct="${i === kc.correct}">${opt}</button>`).join('')}
        </div>
        <div class="quiz-feedback hidden"></div>
      </section>`;
  }

  function renderNotesSection(id) {
    const note = Progress.getNote(id);
    return `
      <section class="notes-section">
        <h3>📝 My Notes</h3>
        <textarea id="notesArea" placeholder="Type your notes here..." aria-label="Personal notes">${escapeHtml(note)}</textarea>
        <button class="btn btn-secondary" id="saveNotesBtn">Save Notes</button>
        <span class="save-status" id="saveStatus"></span>
      </section>`;
  }

  function renderLessonActions(id) {
    const complete = Progress.isLessonComplete(id);
    const idx = LESSON_IDS.indexOf(id);
    const nextId = idx >= 0 && idx < LESSON_IDS.length - 1 ? LESSON_IDS[idx + 1] : null;

    return `
      <section class="lesson-actions">
        ${complete ? '<p class="completed-badge">✓ Lesson Completed</p>' : `<button class="btn btn-success" data-mark-complete="${id}">Mark as Complete ✓</button>`}
        ${nextId ? `<button class="btn btn-primary" data-nav="${nextId}">Continue to Next Lesson →</button>` : ''}
        <button class="btn btn-outline" data-nav="quizzes">🧠 Take Quiz</button>
      </section>`;
  }

  function postRender(id) {
    initTabs();
    initCopyButtons();
    initInlineQuizzes();
    initKnowledgeChecks();
    initNotes(id);
    initTerminals();
    initSpecialPages(id);
    bindContentEvents();
  }

  function bindContentEvents() {
    $$('[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => navigate(btn.dataset.nav));
    });
    $$('[data-mark-complete]').forEach(btn => {
      btn.addEventListener('click', () => {
        Progress.markLessonComplete(btn.dataset.markComplete);
        updateProgressUI();
        renderSidebar();
        navigate(currentSection);
      });
    });
    $$('[data-complete-lab]').forEach(btn => {
      btn.addEventListener('click', () => {
        Progress.markLessonComplete(btn.dataset.completeLab);
        updateProgressUI();
        renderSidebar();
        btn.textContent = '✓ Lab Completed';
        btn.disabled = true;
      });
    });
  }

  /* ── Tabs ── */
  function initTabs() {
    $$('.tabs').forEach(tabGroup => {
      const buttons = tabGroup.querySelectorAll('.tab-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.tab;
          tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          tabGroup.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
          btn.classList.add('active');
          tabGroup.querySelector(`#${target}`)?.classList.add('active');
        });
      });
    });
  }

  /* ── Copy buttons ── */
  function initCopyButtons() {
    $$('.code-block').forEach(block => {
      const btn = block.querySelector('.copy-btn');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const text = block.dataset.copy || block.querySelector('code')?.textContent || '';
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        });
      });
    });
  }

  /* ── Inline quizzes ── */
  function initInlineQuizzes() {
    $$('.inline-quiz').forEach(quiz => {
      quiz.querySelectorAll('.quiz-opt').forEach(opt => {
        opt.addEventListener('click', () => {
          if (quiz.classList.contains('answered')) return;
          quiz.classList.add('answered');
          const feedback = quiz.querySelector('.quiz-feedback');
          const isCorrect = opt.dataset.correct === 'true';
          feedback.classList.remove('hidden');
          feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
          feedback.innerHTML = isCorrect
            ? '✓ Correct! Cloud computing delivers resources over the Internet.'
            : '✗ Incorrect. The correct answer is B — delivering computing resources over the Internet.';
          quiz.querySelectorAll('.quiz-opt').forEach(o => o.disabled = true);
        });
      });
    });
  }

  /* ── Knowledge checks ── */
  function initKnowledgeChecks() {
    $$('.knowledge-check').forEach(kc => {
      kc.querySelectorAll('.kc-opt').forEach(opt => {
        opt.addEventListener('click', () => {
          if (kc.classList.contains('answered')) return;
          kc.classList.add('answered');
          const feedback = kc.querySelector('.quiz-feedback');
          const lessonId = kc.dataset.kc;
          const lesson = getLessonContent(lessonId);
          const kcData = lesson?.knowledgeCheck;
          const isCorrect = opt.dataset.correct === 'true';
          feedback.classList.remove('hidden');
          feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
          feedback.innerHTML = isCorrect ? `✓ Correct! ${kcData.explain}` : `✗ ${kcData.explain}`;
          kc.querySelectorAll('.kc-opt').forEach(o => o.disabled = true);
        });
      });
    });
  }

  /* ── Notes ── */
  function initNotes(id) {
    const saveBtn = $('#saveNotesBtn');
    const area = $('#notesArea');
    if (!saveBtn || !area) return;
    saveBtn.addEventListener('click', () => {
      Progress.saveNote(id, area.value);
      const status = $('#saveStatus');
      if (status) {
        status.textContent = 'Saved!';
        setTimeout(() => { status.textContent = ''; }, 2000);
      }
    });
  }

  /* ── Simulated Terminal ── */
  const TERMINAL_DATA = {
    default: {
      prompt: 'student@cloud:~$ ',
      fs: { 'index.html': 'file', 'Dockerfile': 'file', 'app': 'dir' },
      appFiles: { 'main.py': 'file', 'requirements.txt': 'file' },
      cwd: '~',
      history: []
    },
    'vm-lab': { prompt: 'ubuntu@cloud-vm:~$ ', fs: {}, cwd: '~' },
    lab01: { prompt: 'ubuntu@cloud-vm:~$ ', fs: { 'index.html': 'file' }, cwd: '~' },
    lab02: { prompt: 'student@docker-host:~$ ', fs: { 'Dockerfile': 'file', 'index.html': 'file' }, cwd: '~' },
    lab03: { prompt: 'student@terraform:~$ ', fs: { 'main.tf': 'file' }, cwd: '~' }
  };

  const TERMINAL_COMMANDS = {
    help: () => `Supported commands:
  help          - Show this help
  ls            - List files
  pwd           - Print working directory
  cd <dir>      - Change directory
  cat <file>    - Show file contents
  clear         - Clear terminal
  whoami        - Show current user
  sudo apt update / sudo apt install nginx -y
  sudo systemctl start nginx / enable nginx
  docker build -t myapp .
  docker run -p 8080:80 myapp
  terraform init / plan / apply / destroy
  echo "Hello Cloud!" > index.html`,

    ls: (term) => {
      const files = getTerminalFs(term);
      return Object.keys(files).join('  ') || '(empty)';
    },
    pwd: (term) => term.cwd === '~' ? '/home/student' : `/home/student/${term.cwd.replace('~/', '')}`,
    whoami: (term) => term.prompt.split('@')[0],
    clear: () => '__CLEAR__',
    cat: (term, args) => {
      const f = args[0];
      const contents = {
        'index.html': '<html><body><h1>Hello Cloud!</h1></body></html>',
        'Dockerfile': 'FROM nginx:alpine\nCOPY index.html /usr/share/nginx/html/',
        'main.tf': 'resource "aws_instance" "web" {\n  instance_type = "t3.micro"\n}',
        'requirements.txt': 'flask==3.0.0'
      };
      return contents[f] || `cat: ${f}: No such file`;
    },
    cd: (term, args) => {
      const dir = args[0] || '~';
      if (dir === '..') {
        term.cwd = '~';
        return '';
      }
      if (dir === '~' || dir === '/home/student') { term.cwd = '~'; return ''; }
      const fs = getTerminalFs(term);
      if (fs[dir] === 'dir') { term.cwd = dir; return ''; }
      return `cd: ${dir}: No such directory`;
    },
    echo: (term, args) => args.join(' '),
    'sudo': (term, args) => handleSudo(term, args),
    docker: (term, args) => handleDocker(args),
    terraform: (term, args) => handleTerraform(args)
  };

  function getTerminalFs(term) {
    if (term.cwd === '~') return term.fs;
    if (term.cwd === 'app') return term.appFiles || { 'main.py': 'file' };
    return {};
  }

  function handleSudo(term, args) {
    const cmd = args.join(' ');
    if (cmd.includes('apt update')) return 'Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease\nReading package lists... Done';
    if (cmd.includes('apt install nginx')) return 'Reading package lists...\nBuilding dependency tree...\nnginx is already the newest version.';
    if (cmd.includes('systemctl start nginx')) return '';
    if (cmd.includes('systemctl enable nginx')) return 'Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service.';
    return `[sudo] password for student: ******\n${cmd}: done`;
  }

  function handleDocker(args) {
    const sub = args[0];
    if (sub === 'build') return 'Sending build context to Docker daemon\nStep 1/2 : FROM nginx:alpine\nSuccessfully built abc123\nSuccessfully tagged myapp:latest';
    if (sub === 'run') return 'Container started: a1b2c3d4e5f6\nApp running on http://localhost:8080';
    if (sub === 'ps') return 'CONTAINER ID   IMAGE    STATUS         PORTS\na1b2c3d4e5f6   myapp    Up 2 minutes   0.0.0.0:8080->80/tcp';
    return 'docker: see help for usage';
  }

  function handleTerraform(args) {
    const sub = args[0];
    if (sub === 'init') return 'Initializing provider plugins...\nTerraform has been successfully initialized!';
    if (sub === 'plan') return 'Plan: 1 to add, 0 to change, 0 to destroy.\n  + aws_instance.web';
    if (sub === 'apply') return 'Apply complete! Resources: 1 added, 0 changed, 0 destroyed.';
    if (sub === 'destroy') return 'Destroy complete! Resources: 1 destroyed.';
    return 'terraform: see help for usage';
  }

  function initTerminals() {
    $$('.terminal-widget').forEach(widget => {
      const id = widget.dataset.terminal || 'default';
      const base = TERMINAL_DATA[id] || TERMINAL_DATA.default;
      const term = { ...base, fs: { ...base.fs, ...(TERMINAL_DATA.default.fs) }, appFiles: { ...TERMINAL_DATA.default.appFiles } };

      widget.innerHTML = `
        <div class="terminal-header"><span>● ● ●</span> Cloud Terminal</div>
        <div class="terminal-body" role="log" aria-live="polite"></div>
        <div class="terminal-input-row">
          <span class="terminal-prompt">${term.prompt}</span>
          <input type="text" class="terminal-input" aria-label="Terminal command input" autocomplete="off" spellcheck="false">
        </div>
        <p class="terminal-hint">Type <code>help</code> for supported commands</p>`;

      const body = widget.querySelector('.terminal-body');
      const input = widget.querySelector('.terminal-input');

      function print(text, className = '') {
        if (text === '__CLEAR__') { body.innerHTML = ''; return; }
        if (!text) return;
        const line = document.createElement('div');
        line.className = `terminal-line ${className}`;
        line.textContent = text;
        body.appendChild(line);
        body.scrollTop = body.scrollHeight;
      }

      print('Welcome to Cloud Terminal. Type "help" to begin.');

      input.addEventListener('keydown', e => {
        if (e.key !== 'Enter') return;
        const raw = input.value.trim();
        input.value = '';
        if (!raw) return;

        print(`${term.prompt}${raw}`, 'command');
        const parts = raw.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        let output;
        if (cmd === 'sudo') output = TERMINAL_COMMANDS.sudo(term, args);
        else if (TERMINAL_COMMANDS[cmd]) output = TERMINAL_COMMANDS[cmd](term, args);
        else if (raw.startsWith('echo ') && raw.includes('>')) output = '';
        else output = `${cmd}: command not found. Type "help" for available commands.`;

        if (output === '__CLEAR__') body.innerHTML = '';
        else if (output) print(output);
      });
    });
  }

  /* ── Special pages ── */
  function initSpecialPages(id) {
    if (id === 'quizzes') renderMainQuiz();
    if (id === 'final-exam') renderFinalExam();
    if (id === 'glossary') renderGlossary();
    if (id === 'certificate') renderCertificate();
  }

  function renderMainQuiz() {
    const container = $('#main-quiz-container');
    if (!container) return;
    container.innerHTML = buildQuizUI(QuizData.mainQuiz, 'main-quiz', saved => {
      Progress.saveMainQuizScore(saved.score, saved.total);
    });
    initQuizEngine(container);
  }

  function renderFinalExam() {
    const container = $('#final-exam-container');
    if (!container) return;
    container.innerHTML = buildQuizUI(QuizData.finalExam, 'final-exam', saved => {
      Progress.saveFinalExamScore(saved.score, saved.total);
      updateProgressUI();
    }, true);
    initQuizEngine(container);
  }

  function buildQuizUI(questions, id, onComplete, isExam = false) {
    return `
      <div class="quiz-engine" data-quiz-engine="${id}">
        <div class="quiz-progress"><span id="${id}-current">1</span> / ${questions.length}</div>
        <div class="quiz-question-area" id="${id}-area"></div>
        <div class="quiz-score-panel hidden" id="${id}-score"></div>
      </div>`;
  }

  function initQuizEngine(container) {
    const engine = container.querySelector('[data-quiz-engine]');
    if (!engine) return;
    const id = engine.dataset.quizEngine;
    const questions = id === 'main-quiz' ? QuizData.mainQuiz : QuizData.finalExam;
    let current = 0, score = 0, answered = false;

    const area = $(`#${id}-area`);
    const scorePanel = $(`#${id}-score`);
    const counter = $(`#${id}-current`);

    function showQuestion() {
      answered = false;
      const q = questions[current];
      counter.textContent = current + 1;
      area.innerHTML = `
        ${q.category ? `<span class="quiz-category">${q.category}</span>` : ''}
        <h3>${q.q}</h3>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `<button class="quiz-opt" data-index="${i}">${String.fromCharCode(65 + i)}. ${opt}</button>`).join('')}
        </div>
        <div class="quiz-feedback hidden"></div>
        ${current < questions.length - 1 ? '<button class="btn btn-primary hidden" id="quiz-next">Next →</button>' : '<button class="btn btn-primary hidden" id="quiz-finish">Finish</button>'}`;
      bindQuestionEvents();
    }

    function bindQuestionEvents() {
      const feedback = area.querySelector('.quiz-feedback');
      area.querySelectorAll('.quiz-opt').forEach(opt => {
        opt.addEventListener('click', () => {
          if (answered) return;
          answered = true;
          const idx = parseInt(opt.dataset.index);
          const q = questions[current];
          const isCorrect = idx === q.correct;
          if (isCorrect) score++;
          feedback.classList.remove('hidden');
          feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
          feedback.innerHTML = isCorrect ? `✓ Correct! ${q.explain}` : `✗ Incorrect. ${q.explain}`;
          area.querySelectorAll('.quiz-opt').forEach(o => o.disabled = true);
          const nextBtn = area.querySelector('#quiz-next') || area.querySelector('#quiz-finish');
          if (nextBtn) nextBtn.classList.remove('hidden');
        });
      });

      const nextBtn = area.querySelector('#quiz-next');
      const finishBtn = area.querySelector('#quiz-finish');
      if (nextBtn) nextBtn.addEventListener('click', () => { current++; showQuestion(); });
      if (finishBtn) finishBtn.addEventListener('click', () => showResults());
    }

    function showResults() {
      area.classList.add('hidden');
      scorePanel.classList.remove('hidden');
      const pct = Math.round((score / questions.length) * 100);
      let level, emoji;
      if (id === 'final-exam') {
        if (pct >= 90) { level = 'Cloud Champion'; emoji = '🏆'; }
        else if (pct >= 80) { level = 'Excellent'; emoji = '🚀'; }
        else if (pct >= 70) { level = 'Good'; emoji = '👍'; }
        else { level = 'Review the lessons and try again'; emoji = '📚'; }
      } else {
        if (pct >= 90) { level = 'Excellent!'; emoji = '🎉'; }
        else if (pct >= 70) { level = 'Good job!'; emoji = '👍'; }
        else { level = 'Keep studying!'; emoji = '📚'; }
      }
      scorePanel.innerHTML = `
        <div class="score-card">
          <h3>Your Score: ${score} / ${questions.length}</h3>
          <div class="score-percent">${pct}%</div>
          <p>${emoji} ${level}</p>
          <button class="btn btn-outline" id="retry-quiz">Try Again</button>
        </div>`;
      if (id === 'main-quiz') Progress.saveMainQuizScore(score, questions.length);
      if (id === 'final-exam') Progress.saveFinalExamScore(score, questions.length);
      updateProgressUI();
      $('#retry-quiz')?.addEventListener('click', () => {
        current = 0; score = 0;
        area.classList.remove('hidden');
        scorePanel.classList.add('hidden');
        showQuestion();
      });
    }

    showQuestion();
  }

  function renderGlossary() {
    const container = $('#glossary-container');
    if (!container) return;
    container.innerHTML = `
      <div class="glossary-search"><input type="search" id="glossaryFilter" placeholder="Filter terms..." aria-label="Filter glossary"></div>
      <div class="glossary-list" id="glossaryList">
        ${CourseData.glossary.map((g, i) => `
          <details class="glossary-item">
            <summary>${g.term}</summary>
            <p>${g.def}</p>
          </details>`).join('')}
      </div>`;
    $('#glossaryFilter')?.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      $$('.glossary-item').forEach(item => {
        const term = item.querySelector('summary').textContent.toLowerCase();
        item.style.display = term.includes(q) ? '' : 'none';
      });
    });
  }

  function renderCertificate() {
    const container = $('#certificate-container');
    if (!container) return;
    const progress = Progress.get();
    const pct = Progress.getProgressPercent(TOTAL_TRACKABLE);
    const examPassed = progress.finalExamScore && (progress.finalExamScore.score / progress.finalExamScore.total) >= 0.7;
    const eligible = pct >= 80 && examPassed;

    container.innerHTML = eligible ? `
      <div class="certificate-preview" id="certPreview">
        <div class="cert-inner">
          <h2>🎓 Congratulations!</h2>
          <p>You completed:</p>
          <h3>Cloud Computing Fundamentals</h3>
          <p class="cert-sub">You are ready to continue your journey toward Cloud / DevOps Engineering.</p>
          <p class="cert-date">Date: ${new Date().toLocaleDateString()}</p>
          <p class="cert-score">Final Exam: ${progress.finalExamScore.score}/${progress.finalExamScore.total} · Progress: ${pct}%</p>
        </div>
      </div>
      <button class="btn btn-primary" id="generateCert">Generate Certificate</button>
      <button class="btn btn-outline" id="printCert">Print Certificate</button>` : `
      <div class="alert alert-info">
        <p>Complete at least <strong>80%</strong> of lessons and pass the <strong>Final Exam (70%+)</strong> to unlock your certificate.</p>
        <p>Current progress: <strong>${pct}%</strong> · Final exam: ${progress.finalExamScore ? `${Math.round(progress.finalExamScore.score / progress.finalExamScore.total * 100)}%` : 'Not taken'}</p>
        <button class="btn btn-primary" data-nav="lesson-01">Continue Learning →</button>
      </div>`;

    bindContentEvents();
    $('#generateCert')?.addEventListener('click', () => {
      $('#certPreview')?.classList.add('cert-generated');
    });
    $('#printCert')?.addEventListener('click', () => window.print());
  }

  /* ── Sidebar ── */
  function renderSidebar() {
    els.sidebarNav.innerHTML = CourseData.sections.map(s => {
      const done = Progress.isLessonComplete(s.id);
      const icon = done ? '<span class="check">✓</span>' : '';
      return `<button class="sidebar-link" data-section="${s.id}">${icon}<span class="section-num">${s.num}</span> ${s.title}</button>`;
    }).join('');

    $$('.sidebar-link').forEach(link => {
      link.addEventListener('click', () => navigate(link.dataset.section));
    });
  }

  function updateProgressUI() {
    const pct = Progress.getProgressPercent(TOTAL_TRACKABLE);
    if (els.progressBar) els.progressBar.style.width = `${pct}%`;
    if (els.progressBarSidebar) els.progressBarSidebar.style.width = `${pct}%`;
    if (els.progressText) els.progressText.textContent = `${pct}%`;
    if (els.progressHeader) els.progressHeader.textContent = `${pct}%`;
    document.querySelectorAll('[role="progressbar"]').forEach(el => el.setAttribute('aria-valuenow', pct));
  }

  /* ── Search ── */
  function handleSearch(query) {
    if (!query.trim()) {
      els.searchResults.classList.add('hidden');
      els.searchResults.innerHTML = '';
      return;
    }
    const q = query.toLowerCase();
    const results = [];

    CourseData.sections.forEach(s => {
      if (s.title.toLowerCase().includes(q)) results.push({ id: s.id, label: s.title, type: 'Lesson' });
    });

    Object.entries(CourseData.searchKeywords).forEach(([keyword, ids]) => {
      if (keyword.toLowerCase().includes(q)) {
        ids.forEach(id => {
          const sec = CourseData.sections.find(s => s.id === id);
          if (sec && !results.find(r => r.id === id)) results.push({ id, label: sec.title, type: keyword });
        });
      }
    });

    CourseData.glossary.forEach(g => {
      if (g.term.toLowerCase().includes(q)) {
        results.push({ id: 'glossary', label: g.term, type: 'Glossary' });
      }
    });

    if (results.length === 0) {
      els.searchResults.innerHTML = '<p class="no-results">No results found</p>';
    } else {
      els.searchResults.innerHTML = results.slice(0, 8).map(r =>
        `<button class="search-result" data-section="${r.id}"><span class="sr-type">${r.type}</span>${r.label}</button>`
      ).join('');
      els.searchResults.querySelectorAll('.search-result').forEach(btn => {
        btn.addEventListener('click', () => {
          navigate(btn.dataset.section);
          els.searchInput.value = '';
          els.searchResults.classList.add('hidden');
        });
      });
    }
    els.searchResults.classList.remove('hidden');
  }

  /* ── Global events ── */
  function bindGlobalEvents() {
    window.addEventListener('hashchange', () => navigate(getHash()));

    els.themeToggle.addEventListener('click', toggleTheme);

    els.sidebarToggle.addEventListener('click', () => {
      els.sidebar.classList.toggle('open');
      els.overlay.classList.toggle('active');
    });

    els.overlay.addEventListener('click', closeSidebar);

    els.searchInput.addEventListener('input', e => handleSearch(e.target.value));
    els.searchInput.addEventListener('focus', () => {
      if (els.searchInput.value) handleSearch(els.searchInput.value);
    });

    document.addEventListener('click', e => {
      if (!e.target.closest('.search-box')) {
        els.searchResults.classList.add('hidden');
      }
    });

    els.navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const nav = link.dataset.nav;
        const map = { home: 'home', course: 'lesson-01', roadmap: 'roadmap', labs: 'lab-01', quizzes: 'quizzes', project: 'final-project', resources: 'resources' };
        navigate(map[nav] || 'home');
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSidebar();
    });
  }

  function closeSidebar() {
    els.sidebar.classList.remove('open');
    els.overlay.classList.remove('active');
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  document.addEventListener('DOMContentLoaded', init);
})();
