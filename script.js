(function(){
  document.documentElement.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var T = {
    de:{},
    en:{
      skip:"Skip to content", navLabel:"Sections",
      nav1:"About", nav2:"Experience", nav3:"Projects", nav4:"Skills &amp; Tools", nav5:"Certificates", nav6:"Contact",
      city:"Ludwigshafen am Rhein",
      status:"Currently: Internship @ BASF", heroLoc:"Ludwigshafen · since Oct 2026",
      lead:"I am in my 5th semester of Business Informatics and am currently doing my internship at BASF, contributing to digitalization projects in Engineering &amp; Maintenance.",
      ctaContact:"Get in touch",
      about1:"I think in three languages and in two worlds: business and IT. Right where they meet is where I feel at home.",
      about2:"A tool is quickly introduced. Whether people use it depends on how well it fits their work. So I first look closely at how a process runs, then build the solution and adjust it together with the users until it really helps.",
      about3:"I am most drawn to process automation, data analysis and ERP systems. Clean documentation is part of the job for me, so colleagues who join later can keep building on it.",
      fRoute:"Route", cm:"Cameroon", de:"Germany", fStudy:"Studies", fStudyV:"B.Sc. Business Informatics, Hochschule Worms · 5th semester",
      fBase:"Based in", fLang:"Languages", fLangV:"French (native) · German (C1) · English (good)",
      chipLive:"Active", basfDate:"Oct 2026 – present", basfRole:"Digitalization Intern",
      basfUnit:"Fleet Management &amp; Workshops, Engineering &amp; Maintenance",
      basf1:"Contributing to digitalization projects in Engineering &amp; Maintenance to optimize business processes.",
      tagAgile:"Agile approach",
      chipPart:"Part-time", zenDate:"Aug 2024 – present", zenRole:"Student Assistant",
      zen1:"Assignments in logistics, customer service and retail at changing partner companies, alongside my studies.",
      zen2:"Getting up to speed quickly with new teams and processes, including at short notice.",
      chipVol:"Volunteer", uniRole:"Member of the UNICEF Working Group Worms",
      uni1:"Volunteer work in the UNICEF Working Group Worms for the rights of children worldwide.",
      uni2:"Supporting local campaigns, public information work and fundraising for UNICEF projects.",
      photoAlt:"Portrait of Josias Ketchankeu Andoyo",
      eduHead:"Education", eduDate1:"Sep 2024 – present", edu1:"B.Sc. Business Informatics (Wirtschaftsinformatik)", edu1b:"Hochschule Worms · 5th semester",
      edu2b:"Lycée Bilingue de Nylon · Cameroon",
      ss26:"Summer 2026", ss25:"Summer 2025",
      okt26:"Oct 2026", demo:"Live demo",
      p0t:"Data Project: From Raw Data to Dashboard",
      p0d:"Python, SQLite, SQL, JavaScript and Chart.js. The result is a fleet management dashboard for a fictional company with 50 vehicles at five sites in the Rhine-Neckar region. It shows key figures, cost trends and a filterable vehicle table, and warns about overdue or upcoming inspection dates.",
      p0d2:"A custom Python generator creates the synthetic data following realistic rules and stores it as CSV, in SQLite and as JSON. Eight commented SQL queries analyze it with JOINs, CTEs and window functions. I built the project with Claude Code as an AI assistant: I defined the requirements, data model and design, and tested and revised every step.",
      p0c:"Personal portfolio project with synthetic data.",
      p1t:"Data Visualization with SVG",
      p1d:"JavaScript (ES6), SVG and object-oriented design. The result is an interactive network diagram of trade relations between eight European countries in 2023 (data: World Bank WITS, Eurostat), built entirely without external libraries.",
      p1d2:"Three classes (ClassRCD, ClassNode, ClassEdge) separate data handling from drawing. Nodes are placed evenly on the circle using sin/cos, and line width grows with trade volume. Custom CSV files can be loaded via the FileReader API; clicking highlights a country and hovering shows the volume.",
      vizCap:"Schematic of the chart type · no real values · click a node", vizAria:"Schematic of the Radial Convergences chart type, no real values",
      repo:"Code on GitHub", p1c:"Individual project in the Application Development module, Hochschule Worms.",
      p2t:"Responsive Information Website",
      p2d:"HTML5, CSS Grid, Flexbox, JavaScript and Git. The result is a website about the 2026 FIFA World Cup with a home page, schedule, teams and a quiz, built mobile-first with breakpoints at 992 and 1200 px and SEO basics (meta tags, Open Graph, sitemap).",
      p2d2:"My part was the home page and the teams page with its JavaScript search. We worked together through branches and pull requests.",
      p2c:"Web project in a team of two, Hochschule Worms.",
      p3t:"Technology Analysis and Figma Prototype",
      p3d:"Gartner Hype Cycle, Figma and business case. The result is a concept for a VR extension of the Sky streaming platform with a clickable prototype (navigation, UX flow, visual design), market analysis and technology assessment.",
      p3d2:"We presented it as an investor pitch in Pecha Kucha format, 20 slides of 20 seconds each.",
      p3c:"Team project in the Digital Transformation of Companies module, Hochschule Worms.",
      p4t:"Analysis of a Research Paper",
      p4d:"Academic writing, LaTeX and presenting. I critically examined the study “Harmonising Company-wide Information Objects”: its method, findings and limits. The underlying question is how multinational companies standardize information objects across systems and departments. The outcome was a written paper, a LaTeX slide deck and a ten-minute talk followed by questions.",
      p4c:"Seminar assignment, Hochschule Worms.",
      g2:"Data &amp; BI", g3:"Processes &amp; Agile", g4:"Web &amp; Development", g5:"Tools &amp; Documentation",
      basics:"BASICS", epk:"EPC", petri:"Petri nets",
      skillsNote:"In programming I have solid foundations in development, built through university projects.",
      thCourse:"Course · LinkedIn Learning", thDate:"Issued", sep26:"Sep 2026", aug26:"Aug 2026",
      certLink:"Credentials on LinkedIn",
      contactP:"Interested in my profile? I look forward to hearing from you.",
      mailLabel:"Email", copy:"Copy", copied:"Address copied", copyFail:"Copy failed. The address is selected, press Ctrl+C.",
      foot:"Last updated: October 2026"
    },
    fr:{
      skip:"Aller au contenu", navLabel:"Sections",
      nav1:"À propos", nav2:"Expérience", nav3:"Projets", nav4:"Compétences &amp; outils", nav5:"Certificats", nav6:"Contact",
      city:"Ludwigshafen am Rhein",
      status:"Actuellement : stage @ BASF", heroLoc:"Ludwigshafen · depuis oct. 2026",
      lead:"Je suis en 5e semestre d'informatique de gestion (Wirtschaftsinformatik) et j'effectue actuellement mon stage chez BASF, où je participe à des projets de digitalisation dans le domaine Engineering &amp; Maintenance.",
      ctaContact:"Me contacter",
      about1:"Je pense en trois langues et dans deux mondes : la gestion et l'informatique. C'est exactement là où ils se rencontrent que je me sens chez moi.",
      about2:"Un outil s'introduit vite. Qu'il soit vraiment utilisé dépend de la façon dont il s'adapte au travail des gens. Je commence donc par observer de près le déroulement d'un processus, puis je construis la solution et je l'ajuste avec les utilisateurs jusqu'à ce qu'elle aide vraiment.",
      about3:"Ce qui m'attire le plus, ce sont l'automatisation des processus, l'analyse de données et les systèmes ERP. Pour moi, une documentation propre fait partie du travail, afin que les collègues qui arrivent plus tard puissent continuer à construire dessus.",
      fRoute:"Parcours", cm:"Cameroun", de:"Allemagne", fStudy:"Études", fStudyV:"B.Sc. Wirtschaftsinformatik, Hochschule Worms · 5e semestre",
      fBase:"Basé à", fLang:"Langues", fLangV:"Français (langue maternelle) · Allemand (C1) · Anglais (bon niveau)",
      chipLive:"En cours", basfDate:"oct. 2026 – aujourd'hui", basfRole:"Stagiaire Digitalisation",
      basfUnit:"Gestion de flotte &amp; ateliers, Engineering &amp; Maintenance",
      basf1:"Participation à des projets de digitalisation dans le domaine Engineering &amp; Maintenance afin d'optimiser les processus métier.",
      tagAgile:"Méthode agile",
      chipPart:"Temps partiel", zenDate:"août 2024 – aujourd'hui", zenRole:"Assistant étudiant",
      zen1:"Missions en logistique, service client et commerce de détail chez différentes entreprises partenaires, en parallèle des études.",
      zen2:"Prise en main rapide de nouvelles équipes et de nouveaux processus, y compris pour des missions de dernière minute.",
      chipVol:"Bénévolat", uniRole:"Membre du groupe de travail UNICEF de Worms",
      uni1:"Engagement bénévole au sein du groupe de travail UNICEF de Worms pour les droits des enfants dans le monde.",
      uni2:"Soutien aux actions locales, au travail d'information et aux collectes de dons en faveur des projets de l'UNICEF.",
      photoAlt:"Portrait de Josias Ketchankeu Andoyo",
      eduHead:"Formation", eduDate1:"sept. 2024 – aujourd'hui", edu1:"B.Sc. Wirtschaftsinformatik (informatique de gestion)", edu1b:"Hochschule Worms · 5e semestre",
      edu2b:"Lycée Bilingue de Nylon · Cameroun",
      ss26:"Été 2026", ss25:"Été 2025",
      okt26:"Oct. 2026", demo:"Démo en ligne",
      p0t:"Projet data : des données brutes au tableau de bord",
      p0d:"Python, SQLite, SQL, JavaScript et Chart.js. Le résultat est un tableau de bord de gestion de flotte pour une entreprise fictive de 50 véhicules répartis sur cinq sites de la région Rhin-Neckar. Il affiche des indicateurs clés, l'évolution des coûts et un tableau filtrable des véhicules, et signale les contrôles en retard ou à venir.",
      p0d2:"Un générateur Python que j'ai conçu produit les données synthétiques selon des règles réalistes et les enregistre en CSV, dans SQLite et en JSON. Huit requêtes SQL commentées les analysent avec des JOIN, des CTE et des fonctions de fenêtrage. J'ai réalisé le projet avec Claude Code comme assistant IA : j'ai défini les exigences, le modèle de données et le design, puis testé et retravaillé chaque étape.",
      p0c:"Projet personnel de portfolio avec des données synthétiques.",
      p1t:"Visualisation de données en SVG",
      p1d:"JavaScript (ES6), SVG et conception orientée objet. Le résultat est un diagramme réseau interactif des échanges commerciaux entre huit pays européens en 2023 (données : World Bank WITS, Eurostat), réalisé sans aucune bibliothèque externe.",
      p1d2:"Trois classes (ClassRCD, ClassNode, ClassEdge) séparent la gestion des données et le dessin. Les nœuds sont répartis sur le cercle par sin/cos, et l'épaisseur des liens augmente avec le volume des échanges. On peut charger ses propres fichiers CSV via l'API FileReader ; un clic met un pays en évidence et le survol affiche le volume.",
      vizCap:"Schéma du type de diagramme · sans valeurs réelles · cliquez sur un nœud", vizAria:"Schéma du type de diagramme Radial Convergences, sans valeurs réelles",
      repo:"Code sur GitHub", p1c:"Projet individuel du module Développement d'applications, Hochschule Worms.",
      p2t:"Site web d'information responsive",
      p2d:"HTML5, CSS Grid, Flexbox, JavaScript et Git. Le résultat est un site sur la Coupe du monde FIFA 2026 avec accueil, calendrier, équipes et quiz, conçu en mobile-first avec des points de rupture à 992 et 1200 px et les bases du SEO (balises meta, Open Graph, sitemap).",
      p2d2:"J'étais chargé de la page d'accueil et de la page des équipes avec sa recherche en JavaScript. Nous avons collaboré avec des branches et des pull requests.",
      p2c:"Projet web en binôme, Hochschule Worms.",
      p3t:"Analyse technologique et prototype Figma",
      p3d:"Gartner Hype Cycle, Figma et business case. Le résultat est le concept d'une extension VR pour la plateforme de streaming Sky, avec un prototype cliquable (navigation, parcours UX, design visuel), une analyse de marché et une évaluation technologique.",
      p3d2:"Nous l'avons présenté comme un pitch investisseurs au format Pecha Kucha, 20 diapositives de 20 secondes.",
      p3c:"Projet d'équipe du module Transformation numérique des entreprises, Hochschule Worms.",
      p4t:"Analyse d'une publication scientifique",
      p4d:"Travail scientifique, LaTeX et présentation orale. J'ai analysé de façon critique l'étude « Harmonising Company-wide Information Objects » : sa méthode, ses résultats et ses limites. La question de fond est de savoir comment les groupes multinationaux harmonisent leurs objets d'information entre systèmes et départements. Il en est sorti un dossier écrit, des diapositives en LaTeX et un exposé de dix minutes suivi de questions.",
      p4c:"Travail de séminaire, Hochschule Worms.",
      g2:"Données &amp; BI", g3:"Processus &amp; agilité", g4:"Web &amp; développement", g5:"Outils &amp; documentation",
      basics:"BASES", epk:"EPK (CPE)", petri:"Réseaux de Petri",
      skillsNote:"En programmation, j'ai de solides bases en développement, acquises lors de projets d'études.",
      thCourse:"Cours · LinkedIn Learning", thDate:"Délivré", sep26:"sept. 2026", aug26:"août 2026",
      certLink:"Attestations sur LinkedIn",
      contactP:"Mon profil vous intéresse ? Je serai ravi de recevoir votre message.",
      mailLabel:"E-mail", copy:"Copier", copied:"Adresse copiée", copyFail:"La copie a échoué. L'adresse est sélectionnée, faites Ctrl+C.",
      foot:"Mise à jour : octobre 2026"
    }
  };

  // capture German defaults from the DOM
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k = el.getAttribute('data-i18n');
    if(!(k in T.de)) T.de[k] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
    var k = el.getAttribute('data-i18n-aria');
    if(!(k in T.de)) T.de[k] = el.getAttribute('aria-label');
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function(el){
    var k = el.getAttribute('data-i18n-alt');
    if(!(k in T.de)) T.de[k] = el.getAttribute('alt');
  });
  T.de.copied = "Adresse kopiert";
  T.de.copyFail = "Kopieren nicht möglich. Die Adresse ist markiert, bitte Strg+C drücken.";
  T.de.copy = T.de.copy || "Kopieren";

  var current = 'de';
  function apply(lang){
    var d = T[lang] || T.de;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var k = el.getAttribute('data-i18n');
      var v = (k in d) ? d[k] : T.de[k];
      if(v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
      var k = el.getAttribute('data-i18n-aria');
      var v = (k in d) ? d[k] : T.de[k];
      if(v != null) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el){
      var k = el.getAttribute('data-i18n-alt');
      var v = (k in d) ? d[k] : T.de[k];
      if(v != null) el.setAttribute('alt', v);
    });
    document.querySelectorAll('.lang button').forEach(function(b){
      b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
    });
    var s = document.getElementById('copy-status'); if(s) s.textContent = '';
    try{ localStorage.setItem('jka-lang', lang); }catch(e){}
  }
  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click', function(){ apply(b.dataset.lang); });
  });
  try{
    var saved = localStorage.getItem('jka-lang');
    if(saved && T[saved] && saved !== 'de') apply(saved);
  }catch(e){}

  // Clock (Europe/Berlin)
  var clock = document.getElementById('clock');
  function tick(){
    try{
      var now = new Date();
      var t = new Intl.DateTimeFormat('de-DE',{timeZone:'Europe/Berlin',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now);
      var tz = new Intl.DateTimeFormat('de-DE',{timeZone:'Europe/Berlin',timeZoneName:'short'}).formatToParts(now).filter(function(p){return p.type==='timeZoneName';})[0];
      clock.textContent = 'LU · ' + t + ' ' + (tz ? tz.value : '');
    }catch(e){}
  }
  tick(); setInterval(tick, 1000);

  // Pointer readout in hero
  var hero = document.querySelector('.hero'), ro = document.getElementById('readout');
  if(hero && ro && window.matchMedia('(pointer:fine)').matches){
    hero.addEventListener('mousemove', function(e){
      var r = hero.getBoundingClientRect();
      var x = Math.max(0, Math.round(e.clientX - r.left)), y = Math.max(0, Math.round(e.clientY - r.top));
      ro.textContent = 'X ' + String(x).padStart(4,'0') + ' · Y ' + String(y).padStart(4,'0');
    });
  }

  // Terminal-style scramble on the name (text is already visible at rest)
  if(!reduce){
    var glyphs = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789/_#';
    document.querySelectorAll('[data-scramble]').forEach(function(el, idx){
      var final = el.textContent, start = null, dur = 650 + idx*250;
      el.setAttribute('aria-label', final);
      function frame(ts){
        if(!start) start = ts;
        var p = Math.min(1, (ts - start)/dur), n = Math.floor(p * final.length), out = '';
        for(var i=0;i<final.length;i++){
          var c = final[i];
          out += (i < n || c === ' ') ? c : glyphs[Math.floor(Math.random()*glyphs.length)];
        }
        el.textContent = out;
        if(p < 1) requestAnimationFrame(frame); else el.textContent = final;
      }
      requestAnimationFrame(frame);
    });
  }

  // Section rules + active index
  var heads = document.querySelectorAll('.sec-head');
  var links = document.querySelectorAll('.index a');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    },{threshold:.4});
    heads.forEach(function(h){ io.observe(h); });
    var so = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){
          links.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id); });
        }
      });
    },{rootMargin:'-40% 0px -55% 0px'});
    document.querySelectorAll('section.sec').forEach(function(s){ so.observe(s); });
  } else {
    heads.forEach(function(h){ h.classList.add('in'); });
  }

  // Radial convergences schematic (illustrative, no real data)
  var svg = document.getElementById('rc');
  if(svg){
    var NS = 'http://www.w3.org/2000/svg', n = 8, cx = 200, cy = 200, R = 150;
    var ring = document.createElementNS(NS,'circle');
    ring.setAttribute('cx',cx); ring.setAttribute('cy',cy); ring.setAttribute('r',R); ring.setAttribute('class','ring');
    svg.appendChild(ring);
    var pts = [];
    for(var i=0;i<n;i++){
      var a = -Math.PI/2 + i*(2*Math.PI/n);
      pts.push([cx + R*Math.cos(a), cy + R*Math.sin(a)]);
    }
    // fixed illustrative weights, not trade values
    var pairs = [[0,1,3],[0,3,6],[0,5,2],[1,2,4],[1,4,7],[1,6,2],[2,5,3],[2,7,5],[3,4,2],[3,6,4],[4,7,3],[5,6,6],[5,0,1],[6,7,2],[2,4,1],[7,1,3]];
    var edges = [];
    pairs.forEach(function(p){
      var A = pts[p[0]], B = pts[p[1]];
      var path = document.createElementNS(NS,'path');
      var mx = (A[0]+B[0])/2, my = (A[1]+B[1])/2;
      var qx = cx + (mx-cx)*0.35, qy = cy + (my-cy)*0.35;
      path.setAttribute('d','M'+A[0]+' '+A[1]+' Q'+qx+' '+qy+' '+B[0]+' '+B[1]);
      path.setAttribute('class','edge');
      path.setAttribute('stroke-width', (0.8 + p[2]*0.75).toFixed(2));
      path.dataset.a = p[0]; path.dataset.b = p[1];
      svg.appendChild(path); edges.push(path);
      path.addEventListener('mouseenter', function(){ if(!active) path.classList.add('hot'); });
      path.addEventListener('mouseleave', function(){ if(!active) path.classList.remove('hot'); });
    });
    var nodes = [], active = null;
    function select(k){
      active = (active === k) ? null : k;
      nodes.forEach(function(c,j){ c.classList.toggle('on', j === active); c.setAttribute('aria-pressed', j === active ? 'true':'false'); });
      edges.forEach(function(e){
        var hit = active !== null && (+e.dataset.a === active || +e.dataset.b === active);
        e.classList.toggle('hot', hit);
        e.classList.toggle('dim', active !== null && !hit);
      });
    }
    pts.forEach(function(P,k){
      var c = document.createElementNS(NS,'circle');
      c.setAttribute('cx',P[0]); c.setAttribute('cy',P[1]); c.setAttribute('r',8);
      c.setAttribute('class','node'); c.setAttribute('tabindex','0'); c.setAttribute('role','button');
      c.setAttribute('aria-label','Knoten ' + (k+1)); c.setAttribute('aria-pressed','false');
      c.addEventListener('click', function(){ select(k); });
      c.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); select(k); } });
      svg.appendChild(c); nodes.push(c);
    });
  }

  // Copy e-mail
  var btn = document.getElementById('copy-mail'), mail = document.getElementById('mail'), st = document.getElementById('copy-status');
  function selectMail(){
    try{ var r = document.createRange(); r.selectNodeContents(mail); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }catch(e){}
  }
  if(btn){
    btn.addEventListener('click', function(){
      var d = T[current] || T.de;
      var text = mail.textContent.trim();
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(function(){ st.textContent = d.copied || T.de.copied; })
          .catch(function(){ selectMail(); st.textContent = d.copyFail || T.de.copyFail; });
      } else { selectMail(); st.textContent = d.copyFail || T.de.copyFail; }
    });
  }
})();
