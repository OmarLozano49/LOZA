(function () {
  var WA = "50499494633";
  var MAIL = "omar@lozaconsulting.com";
  var LI = "https://www.linkedin.com/in/omarlozanozavala";

  var AREAS = { a: "Análisis de planta", b: "IA aplicada a planta" };
  var Q = [
    { area: "a", gap: "llegar a la causa con datos del proceso",
      q: "Cuando un problema se repite en tu planta, ¿cómo llegas a la causa?",
      o: ["Lo hablamos en reunión y decidimos con la experiencia del equipo", "Reviso reportes y KPIs hasta encontrar un patrón", "Analizo datos del proceso con un método estadístico"] },
    { area: "a", gap: "KPIs que reflejen el problema real",
      q: "Tus KPIs principales, ¿reflejan el problema que quieres resolver?",
      o: ["No lo sé con certeza", "En parte, algunos miden otra cosa", "Sí, los validé contra el problema real"] },
    { area: "a", gap: "poner en dinero lo que cuesta el problema principal",
      q: "¿Puedes decir en dinero, al año, lo que te cuesta tu problema principal?",
      o: ["No, no lo he calculado", "Tengo un número aproximado", "Sí, con supuestos claros que puedo defender"] },
    { area: "a", gap: "la confiabilidad de los datos",
      q: "¿Alguien ha verificado que tus datos son confiables?",
      o: ["No, se asume que están bien", "Se revisan cuando algo se ve raro", "Sí, hay una verificación periódica"] },
    { area: "a", gap: "la velocidad de la información",
      q: "¿Qué tan rápido llega la información que necesitas para decidir?",
      o: ["Semanal, armada a mano", "Diaria", "En vivo o casi"] },
    { area: "a", gap: "sostener las mejoras en el tiempo",
      q: "Cuando una mejora funciona, ¿qué evita que se pierda?",
      o: ["Nada formal", "El seguimiento informal de quien la lideró", "Un dueño, una reunión de revisión y una medición"] },
    { area: "b", gap: "definir quién decide qué se analiza con IA",
      q: "¿Quién decide qué se analiza con IA o con datos avanzados en tu planta?",
      o: ["Otra área o un proveedor. Yo no participo", "Otra área propone y yo doy mi opinión", "Yo defino la pregunta de negocio y otros ejecutan"] },
    { area: "b", gap: "usar IA con datos propios de planta",
      q: "¿Has usado IA para analizar un problema real de tu planta, sin contar redactar correos?",
      o: ["Nunca", "He probado algo, sin continuidad", "La uso con datos propios de forma regular"] },
    { area: "b", gap: "validar lo que dice una IA",
      q: "Si una IA te da la causa de tu problema, ¿cómo sabrías si es correcta?",
      o: ["No sabría", "La compararía con mi experiencia", "La validaría con datos y una prueba en planta"] },
    { area: "b", gap: "tener criterio sobre qué datos compartir con una IA",
      q: "¿Tienes claro qué datos de tu planta sí compartirías con una IA y cuáles no?",
      o: ["Todavía no tengo idea", "Tengo un criterio informal", "Tengo un criterio definido"] }
  ];
  var MAX = Q.length * 2;
  var CUT = 14; // 0 a 14: WhatsApp. 15 a 20: correo y seguir en LinkedIn.
  var PROFILES = [
    { name: "Instinto de planta", max: 6,
      text: "Decides con experiencia y olfato, y eso te ha sostenido. Los datos todavía no son un sistema que te respalde. Con una pregunta bien puesta, ese olfato se apoya en números." },
    { name: "Datos en mano, causa pendiente", max: 14,
      text: "Tienes datos y conoces las herramientas. La causa de tu problema principal sigue sin aparecer. Esa brecha tiene salida y se trabaja con tu caso real." },
    { name: "Dueño de la pregunta", max: 20,
      text: "Defines qué se analiza y validas lo que sale. Tu análisis ya es sólido." }
  ];
  function profileFor(total) {
    for (var i = 0; i < PROFILES.length; i++) if (total <= PROFILES[i].max) return PROFILES[i];
    return PROFILES[PROFILES.length - 1];
  }

  // Lógica pura: puntaje, áreas y brechas.
  function compute(ans) {
    var total = 0, a = 0, b = 0, gaps = [];
    for (var i = 0; i < Q.length; i++) {
      var s = ans[i];
      total += s;
      if (Q[i].area === "a") a += s; else b += s;
      if (s < 2) gaps.push({ i: i, s: s });
    }
    gaps.sort(function (x, y) { return x.s - y.s || x.i - y.i; });
    return {
      total: total, a: a, b: b,
      band: total <= CUT ? "low" : "high",
      profile: profileFor(total).name,
      profileText: profileFor(total).text,
      gaps: gaps.slice(0, 3).map(function (g) { return Q[g.i].gap; }),
      delegaIA: ans[6] <= 1
    };
  }
  function joinEs(list) {
    if (list.length <= 1) return list.join("");
    return list.slice(0, -1).join(", ") + " y " + list[list.length - 1];
  }
  window.__compute = compute;

  var app = document.getElementById("app");
  var ans = [];
  var step = -1; // -1 intro, 0..9 preguntas, 10 resultado

  function h(html) { app.innerHTML = html; var t = app.querySelector("[data-focus]"); if (t) { t.setAttribute("tabindex", "-1"); t.focus({ preventScroll: true }); } window.scrollTo(0, 0); }

  function intro() {
    h('<p class="eyebrow">IA en manufactura</p>' +
      '<h1 data-focus>¿En cuál de estos 3 perfiles está tu planta?</h1>' +
      '<ul class="profiles"><li>Instinto de planta</li><li>Datos en mano, causa pendiente</li><li>Dueño de la pregunta</li></ul>' +
      '<p class="lead">Autodiagnóstico de 10 preguntas sobre cómo analizas tu planta y qué papel juega la IA. Te ubica en uno de los tres perfiles.</p>' +
      '<ul class="facts"><li>10 preguntas</li><li>Menos de 4 minutos</li><li>Resultado privado</li></ul>' +
      '<p class="privacy">Tus respuestas se quedan en tu navegador. No se guardan ni se envían a nadie.</p>' +
      '<div class="start"><button class="btn" id="go" type="button">Descubrir mi perfil</button></div>' +
      '<p class="sign">Omar Lozano · Six Sigma Black Belt · +25 años en manufactura</p>');
    document.getElementById("go").onclick = function () { step = 0; ans = []; question(); };
  }

  function question() {
    var q = Q[step];
    var pct = (step / Q.length) * 100;
    var html = '<div class="progress"><span>Pregunta <b>' + (step + 1) + '</b> de ' + Q.length + '</span><span>' + AREAS[q.area] + '</span></div>' +
      '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + Q.length + '" aria-valuenow="' + step + '"><i style="width:' + pct + '%"></i></div>' +
      '<h2 class="q" data-focus>' + q.q + '</h2><div class="opts">';
    for (var k = 0; k < q.o.length; k++) {
      html += '<button type="button" class="opt" data-s="' + k + '" aria-pressed="' + (ans[step] === k) + '">' + q.o[k] + '</button>';
    }
    html += '</div><button type="button" class="back" id="back"' + (step === 0 ? ' hidden' : '') + '>Volver a la pregunta anterior</button>';
    h(html);
    var btns = app.querySelectorAll(".opt");
    Array.prototype.forEach.call(btns, function (b) {
      b.onclick = function () {
        ans[step] = parseInt(b.getAttribute("data-s"), 10);
        Array.prototype.forEach.call(btns, function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        setTimeout(function () { step++; if (step >= Q.length) result(); else question(); }, 220);
      };
    });
    document.getElementById("back").onclick = function () { step--; question(); };
  }

  function result() {
    var r = compute(ans);
    var gapText = joinEs(r.gaps);
    var html = '<p class="eyebrow">Tu perfil</p><h2 class="profile" data-focus>' + r.profile + '</h2><p class="lead">' + r.profileText + '</p>' +
      '<div class="score"><span class="n">' + r.total + '</span><span class="of">de ' + MAX + ' puntos</span></div>';

    html += '<div class="card"><h3>Dónde estás</h3>' +
      dim(AREAS.a, r.a, 12) + dim(AREAS.b, r.b, 8);
    if (r.gaps.length) {
      html += '<h3 style="margin-top:22px">Lo que más pesa hoy</h3><ul class="gaps">';
      r.gaps.forEach(function (g) { html += '<li>' + g.charAt(0).toUpperCase() + g.slice(1) + '</li>'; });
      html += '</ul>';
    }
    html += '</div>';

    if (r.delegaIA) {
      html += '<div class="callout"><p>Un análisis con IA sirve cuando la pregunta sale de quien conoce el proceso. Esa pregunta es tuya.</p></div>';
    }

    if (r.band === "low") {
      var msg = "Hola Omar, hice tu autodiagnóstico de IA en manufactura. Mi perfil: " + r.profile + " (" + r.total + " de " + MAX + "). Lo que más me pesa hoy: " + gapText + ". Quiero contarte mi caso.";
      var wa = "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
      html += '<div class="verdict"><h2>Cuéntame tu caso.</h2>' +
        '<p>Dime qué problema de planta quieres resolver primero. Lo trabajamos con tus datos y tus indicadores.</p></div>' +
        '<div class="cta"><a class="btn block" id="wa" href="' + wa + '" target="_blank" rel="noopener">Escríbeme por WhatsApp</a>' +
        '<p class="small">Se abre WhatsApp con tu resultado ya escrito. Tú decides si lo envías.</p>' +
        '<div class="contact"><span>+504 9949 4633</span></div></div>';
    } else {
      var subj = "Autodiagnóstico de IA en manufactura: " + r.profile + " (" + r.total + " de " + MAX + ")";
      var body = "Hola Omar,\n\nHice tu autodiagnóstico y quedé en el perfil " + r.profile + " (" + r.total + " de " + MAX + "). Me gustaría contrastar un caso contigo.\n\nSaludos";
      var mail = "mailto:" + MAIL + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body);
      html += '<div class="verdict"><h2>Contrastemos un caso.</h2>' +
        '<p>Si quieres intercambiar ideas, escríbeme por correo. Y si te sirve lo que publico sobre problemas reales de planta, sígueme en LinkedIn.</p></div>' +
        '<div class="cta"><a class="btn block" id="mail" href="' + mail + '">Escríbeme por correo</a>' +
        '<a class="btn block ghost" id="li" href="' + LI + '" target="_blank" rel="noopener">Sígueme en LinkedIn</a>' +
        '<div class="contact"><span>' + MAIL + '</span><button type="button" class="link" id="copy">Copiar correo</button></div></div>';
    }
    html += '<div class="again"><button type="button" class="btn ghost" id="again">Repetir el autodiagnóstico</button></div>' +
      '<p class="sign">Omar Lozano · Six Sigma Black Belt · +25 años en manufactura</p>';
    h(html);

    var c = document.getElementById("copy");
    if (c) c.onclick = function () {
      try { navigator.clipboard.writeText(MAIL).then(function () { c.textContent = "Correo copiado"; }, function () { c.textContent = MAIL; }); }
      catch (e) { c.textContent = MAIL; }
    };
    document.getElementById("again").onclick = function () { step = -1; ans = []; intro(); };
  }

  function dim(name, v, max) {
    return '<div class="dim"><div class="row"><span>' + name + '</span><span>' + v + ' de ' + max + '</span></div>' +
      '<div class="track"><i style="width:' + Math.round(v / max * 100) + '%"></i></div></div>';
  }

  window.__go = function (a) { ans = a; step = Q.length; result(); };
  intro();
})();
