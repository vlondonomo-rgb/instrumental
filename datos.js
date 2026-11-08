/* =============================================================
   BASE DE DATOS DEL JUEGO
   Instrumental Quirúrgico y Patrones de Sutura
   -------------------------------------------------------------
   Cada elemento tiene:
   - nombre   : lo que hay que adivinar (ahorcado)
   - img      : nombre del archivo de foto en la carpeta imagenes/
   - funcion  : texto que aparece al girar la ficha (¿para qué sirve?)
   - pista    : ayuda que se muestra mientras adivinas
   ============================================================= */

const CATEGORIAS = {
  corte: { nombre: "Corte", color: "#A0288F" },
  diseccion: { nombre: "Disección", color: "#5E2D91" },
  hemostasia: { nombre: "Hemostasia", color: "#2E4A9E" },
  campo: { nombre: "Campo", color: "#2F93A6" },
  separadores: { nombre: "Separadores", color: "#3C9D6E" },
  sutura: { nombre: "Sutura", color: "#5AB031" },
  agarre: { nombre: "Agarre", color: "#7FB8D8" }
};

/* ---------- SECCIÓN 1: INSTRUMENTAL QUIRÚRGICO ---------- */
const INSTRUMENTAL = [
  // --- CORTE ---
  {
    nombre: "Bisturí #4",
    categoria: "corte",
    img: "bisturi4.jpg",
    pista: "Mango de bisturí para incidir piel.",
    funcion: "Incidir la piel. El mango #4 (y hojas grandes como 20-24) se usa para incisiones de piel."
  },
  {
    nombre: "Bisturí #3",
    categoria: "corte",
    img: "bisturi3.jpg",
    pista: "Mango de bisturí para técnica precisa.",
    funcion: "Incidir órganos o fascias que requieren una técnica más precisa (hojas pequeñas como 10, 11, 15)."
  },
  {
    nombre: "Tijera de Mayo",
    categoria: "corte",
    img: "mayo.jpg",
    pista: "Tijera robusta de corte. NO se usa para disección.",
    funcion: "Tijera de corte o de sutura. Robusta, con eje de hoja similar al eje de los mangos. Corta piel, fascias y suturas. Nunca se usa para disección."
  },

  // --- DISECCIÓN ---
  {
    nombre: "Tijera de Metzembaum",
    categoria: "diseccion",
    img: "metzembaum.jpg",
    pista: "Tijera de disección estándar, rama de corte menor.",
    funcion: "Disección estándar. NO debe usarse para cortar sutura, piel o fascias. Tiene una rama de corte proporcionalmente menor a la rama del mango."
  },
  {
    nombre: "Tijera de disección",
    categoria: "diseccion",
    img: "tijera_diseccion.jpg",
    pista: "Tijera empleada para disecar tejidos.",
    funcion: "Se utiliza para la disección de tejidos."
  },
  {
    nombre: "Pinza de Adson",
    categoria: "diseccion",
    img: "adson.jpg",
    pista: "Pinza corta y precisa en su punta.",
    funcion: "Pinza de disección más corta y más precisa en su punta."
  },

  // --- HEMOSTASIA ---
  {
    nombre: "Mosquito (Halstead)",
    categoria: "hemostasia",
    img: "mosquito.jpg",
    pista: "Pinza pequeña, la más usada en cirugía general.",
    funcion: "Pinza de Halstead (mosquito). Es la más utilizada en cirugía general. Son pinzas pequeñas que usan su punta fina para clampar el vaso sangrante."
  },
  {
    nombre: "Rochester-Pean",
    categoria: "hemostasia",
    img: "rochester.jpg",
    pista: "Pinza hemostática de ramas estriadas.",
    funcion: "Pinza hemostática usada para clampar vasos; cuenta con ramas de trabajo estriadas."
  },
  {
    nombre: "Kelly",
    categoria: "hemostasia",
    img: "kelly.jpg",
    pista: "Pinza hemostática con estrías solo en la punta.",
    funcion: "Pinza hemostática para clampar vasos sangrantes; presenta estrías parciales en la rama de trabajo."
  },
  {
    nombre: "Kocher",
    categoria: "hemostasia",
    img: "kocher_hemo.jpg",
    pista: "Similar al mosquito pero con punta más ancha.",
    funcion: "Similar a la pinza de Halstead pero con una punta más ancha y una rama de trabajo más larga proporcionalmente. Suele tener diente de ratón."
  },

  // --- CAMPO ---
  {
    nombre: "Backhaus",
    categoria: "campo",
    img: "backhaus.jpg",
    pista: "Pinza de campo con puntas curvas en garfio.",
    funcion: "Pinza de campo. Fija con firmeza los paños estériles que delimitan el campo quirúrgico."
  },
  {
    nombre: "Kirmisson Jones",
    categoria: "campo",
    img: "kirmisson.jpg",
    pista: "Pinza de campo de resorte.",
    funcion: "Pinza de campo. Fija los paños estériles que delimitan el campo quirúrgico."
  },
  {
    nombre: "Doyen",
    categoria: "campo",
    img: "doyen_campo.jpg",
    pista: "Pinza de campo con argollas.",
    funcion: "Pinza de campo. Fija con firmeza los paños estériles que delimitan el campo quirúrgico."
  },
  {
    nombre: "Roeder",
    categoria: "campo",
    img: "roeder.jpg",
    pista: "Pinza de campo con tope.",
    funcion: "Pinza de campo. Fija los paños estériles que delimitan el campo quirúrgico."
  },

  // --- SEPARADORES ---
  {
    nombre: "Gelpi",
    categoria: "separadores",
    img: "gelpi.jpg",
    pista: "Separador autoestático de puntas agudas individuales.",
    funcion: "Separador autoestático con puntas agudas individuales que se abren de forma focalizada; muy empleado en procedimientos ortopédicos y zonas profundas."
  },
  {
    nombre: "Weitlaner",
    categoria: "separadores",
    img: "weitlaner.jpg",
    pista: "Separador autoestático con cremallera de fijación.",
    funcion: "Separador autoestático dotado de una cremallera de fijación que mantiene los tejidos abiertos sin necesidad de asistencia continua, en cirugías profundas."
  },
  {
    nombre: "Senn Miller",
    categoria: "separadores",
    img: "senn.jpg",
    pista: "Separador manual de doble extremo.",
    funcion: "Separador manual de doble extremo (un lado plano y otro con tres dientes romos o agudos). Para piel o músculo en pacientes pequeños."
  },
  {
    nombre: "Farabeuf",
    categoria: "separadores",
    img: "farabeuf.jpg",
    pista: "Separador manual en lámina metálica, se usa en pares.",
    funcion: "Separador manual de diseño robusto y lámina metálica, utilizado por lo general en pares para lograr una retracción simétrica en incisiones superficiales."
  },
  {
    nombre: "Volkmann",
    categoria: "separadores",
    img: "volkmann.jpg",
    pista: "Separador con garfios romos o agudos.",
    funcion: "Separador con garfios romos o agudos en sus extremos para la tracción controlada de tejidos y estructuras óseas o musculares."
  },

  // --- SUTURA ---
  {
    nombre: "Portaagujas Mayo",
    categoria: "sutura",
    img: "portaagujas.jpg",
    pista: "Pinza que sujeta la aguja para suturar.",
    funcion: "Portaagujas. Se utiliza para sujetar la aguja en el cierre de la incisión o de alguna estructura interna."
  },
  {
    nombre: "Tijeras de sutura",
    categoria: "sutura",
    img: "tijera_sutura.jpg",
    pista: "Tijera fina para cortar el hilo de sutura.",
    funcion: "Tijera empleada para cortar el material de sutura."
  },

  // --- AGARRE ---
  {
    nombre: "Allis",
    categoria: "agarre",
    img: "allis.jpg",
    pista: "Pinza con pequeños dientes para traccionar tejidos.",
    funcion: "Pinza con pequeños dientes en el extremo. Sujeta tejidos delicados o firmes (fascia o músculo) ejerciendo una tracción segura."
  },
  {
    nombre: "Babcock",
    categoria: "agarre",
    img: "babcock.jpg",
    pista: "Pinza de punta redondeada y fenestrada, atraumática.",
    funcion: "Pinza de punta redondeada y fenestrada (con agujero); es menos traumática, ideal para sostener estructuras tubulares o vísceras como el intestino."
  },
  {
    nombre: "Kocher (agarre)",
    categoria: "agarre",
    img: "kocher_agarre.jpg",
    pista: "Pinza de dientes fuertes y cierre de cremallera.",
    funcion: "Pinza con dientes fuertes en la punta y cierre de cremallera; sujeta tejidos duros o resistentes como la piel para evitar deslizamientos."
  },
  {
    nombre: "Pinza de disección con garra",
    categoria: "agarre",
    img: "garra.jpg",
    pista: "Pinza con dientes para tomar piel/tejidos.",
    funcion: "Pinza de disección con dientes (garra). Toma con precisión capas superficiales de piel o tejidos finos mediante presión manual directa del cirujano."
  },
  {
    nombre: "Pinza de disección sin garra",
    categoria: "agarre",
    img: "singarra.jpg",
    pista: "Pinza lisa para tejidos delicados.",
    funcion: "Pinza de disección sin dientes (lisa). Toma con precisión tejidos finos o delicados mediante presión manual directa del cirujano."
  }
];

/* ---------- SECCIÓN 2: PATRONES DE SUTURA ---------- */
const PATRONES = [
  {
    nombre: "Punto simple interrumpido",
    img: "p_simple.jpg",
    pista: "El patrón básico universal.",
    funcion: "Patrón apositivo básico y universal. Seguro: si falla un punto, no se deshace toda la sutura. Usado en cirugía menor; rápido y fácil de quitar, nudo fuera de la dermis."
  },
  {
    nombre: "Sutura continua simple",
    img: "p_continua.jpg",
    pista: "Rápida y hermética, pero si se rompe se afloja toda.",
    funcion: "Patrón apositivo rápido que genera un sello hermético. Si se rompe o afloja en un extremo, se compromete toda la línea de sutura."
  },
  {
    nombre: "Ford interlocking",
    img: "p_ford.jpg",
    pista: "Continuo cruzado/festoneado que no se desliza.",
    funcion: "Patrón continuo cruzado (bloqueante/festoneado) que evita que el hilo se deslice hacia atrás; muy usado en piel de grandes especies o incisiones largas."
  },
  {
    nombre: "Subcuticular / Intradérmico",
    img: "p_subcuticular.jpg",
    pista: "Enterrada, no deja marcas ni requiere retirar puntos.",
    funcion: "Continua u horizontal enterrada. No deja marcas externas y no requiere retirar puntos. Buen resultado estético."
  },
  {
    nombre: "Colchonero horizontal",
    img: "p_horizontal.jpg",
    pista: "Alivio de tensión; distribuye en área amplia.",
    funcion: "Patrón de alivio de tensión (sartenero). Distribuye la tensión en un área más amplia. Puede causar eversión si se aprieta demasiado."
  },
  {
    nombre: "Colchonero vertical",
    img: "p_vertical.jpg",
    pista: "Alivio de tensión; respeta la irrigación del borde.",
    funcion: "Patrón de alivio de tensión. Ofrece mayor resistencia a la tensión que el horizontal y respeta mejor la irrigación vascular del borde de la piel."
  },
  {
    nombre: "Punto en X (cruciforme)",
    img: "p_x.jpg",
    pista: "Previene eversión; usado en urgencias.",
    funcion: "Punto interrumpido cruzado que previene la eversión y brinda un área moderada de resistencia. Útil en urgencias, cuero cabelludo, bordes y hemostasia."
  },
  {
    nombre: "Lembert",
    img: "p_lembert.jpg",
    pista: "Invaginante; serosa y muscular, sin entrar a la luz.",
    funcion: "Patrón invaginante. Inicia fuera de la herida, penetra serosa y muscular (sin entrar a la luz mucosa) y sale del mismo lado. Puede ser interrumpido o continuo."
  },
  {
    nombre: "Halsted",
    img: "p_halsted.jpg",
    pista: "Variante del Lembert en colchonero vertical.",
    funcion: "Variante del Lembert en forma de colchonero vertical invaginante."
  },
  {
    nombre: "Cushing",
    img: "p_cushing.jpg",
    pista: "Invaginante continuo; penetra hasta submucosa.",
    funcion: "Patrón invaginante continuo paralelo a la línea de incisión. Penetra hasta la submucosa (incompleto), sin entrar a la luz."
  },
  {
    nombre: "Connell",
    img: "p_connell.jpg",
    pista: "Invaginante continuo; penetra todas las capas.",
    funcion: "Patrón invaginante continuo paralelo a la línea de incisión. Penetra todas las capas incluyendo la luz (completo)."
  },
  {
    nombre: "Jareta (Pursestring)",
    img: "p_jareta.jpg",
    pista: "Sutura circular para cerrar orificios.",
    funcion: "Sutura continua circular (bolsa de tabaco) para cerrar orificios: p. ej. ano, muñón apendicular o tubos de drenaje."
  },
  {
    nombre: "Gambee",
    img: "p_gambee.jpg",
    pista: "Punto de aposición intestinal que evita eversión de mucosa.",
    funcion: "Patrón empleado en anastomosis intestinal; aproxima las capas y evita la eversión de la mucosa hacia la luz."
  },
  {
    nombre: "Sutura Cross",
    img: "p_cross.jpg",
    pista: "Punto cruzado sobre la herida.",
    funcion: "Punto cruzado sobre la línea de incisión que aporta resistencia a la tensión."
  },
  {
    nombre: "Donati",
    img: "p_donati.jpg",
    pista: "Colchonero vertical (lejano-cercano) para piel gruesa.",
    funcion: "Punto de Donati (colchonero vertical, lejano-cercano-cercano-lejano). Para piel gruesa, heridas con mucha tensión; da buena eversión de los bordes."
  },
  {
    nombre: "Sarnoff",
    img: "p_sarnoff.jpg",
    pista: "Para tejido laxo (codo); junta bordes y espacios muertos.",
    funcion: "Punto para tejido laxo (p. ej. codo). Junta bordes y elimina espacios muertos. Útil en heridas de abdomen y tórax."
  }
];
