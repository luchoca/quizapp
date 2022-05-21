const preguntas = [
  {
    categoria: "Deporte",
    titulo: "¿Quien gano el mundial de 1950?",
    opciones: [
      { textoRespuesta: "Uruguay", isCorrect: true },
      { textoRespuesta: "Brasil", isCorrect: false },
      { textoRespuesta: "Argentina", isCorrect: false },
      { textoRespuesta: "Alemania", isCorrect: false },
    ],
  },
  {
    categoria: "Deporte",
    titulo: "Club mas grande del mundo?",
    opciones: [
      { textoRespuesta: "River", isCorrect: false },
      { textoRespuesta: "Peñarol", isCorrect: true },
      { textoRespuesta: "Boca", isCorrect: false },
      { textoRespuesta: "Real Madrid", isCorrect: false },
    ],
  },
  {
    categoria: "Deporte",
    titulo: "¿Cuantos Mundiales gano Uruguay?",
    opciones: [
      { textoRespuesta: "2", isCorrect: true },
      { textoRespuesta: "5", isCorrect: false },
      { textoRespuesta: "0", isCorrect: false },
      { textoRespuesta: "1", isCorrect: false },
    ],
  },
  {
    categoria: "Deporte",
    titulo: "¿En qué año nació Luis Suarez?",
    opciones: [
      { textoRespuesta: "1997", isCorrect: false },
      { textoRespuesta: "1990", isCorrect: false },
      { textoRespuesta: "1981", isCorrect: false },
      { textoRespuesta: "1987", isCorrect: true },
    ],
  },
  {
    categoria: "Deporte",
    titulo: "¿Cada cuantos años se disputan las Olimpiadas?",
    opciones: [
      { textoRespuesta: "1", isCorrect: true },
      { textoRespuesta: "3", isCorrect: false },
      { textoRespuesta: "4", isCorrect: false },
      { textoRespuesta: "10", isCorrect: false },
    ],
  },
  {
    categoria: "Matematicas",
    titulo: "1 + 1",
    opciones: [
      { textoRespuesta: "2", isCorrect: true },
      { textoRespuesta: "1", isCorrect: false },
      { textoRespuesta: "3", isCorrect: false },
      { textoRespuesta: "11", isCorrect: false },
    ],
  },
  {
    categoria: "Matematicas",
    titulo: "3 * 17",
    opciones: [
      { textoRespuesta: "50", isCorrect: false },
      { textoRespuesta: "41", isCorrect: false },
      { textoRespuesta: "51", isCorrect: true },
      { textoRespuesta: "20", isCorrect: false },
    ],
  },
  {
    categoria: "Matematicas",
    titulo: "184 / 8 ",
    opciones: [
      { textoRespuesta: "23", isCorrect: true },
      { textoRespuesta: "0", isCorrect: false },
      { textoRespuesta: "21", isCorrect: false },
      { textoRespuesta: "222", isCorrect: false },
    ],
  },
  {
    categoria: "Matematicas",
    titulo: "16 + 16",
    opciones: [
      { textoRespuesta: "33", isCorrect: false },
      { textoRespuesta: "26", isCorrect: false },
      { textoRespuesta: "15", isCorrect: false },
      { textoRespuesta: "32", isCorrect: true },
    ],
  },
  {
    categoria: "Matematicas",
    titulo: "6 * 6",
    opciones: [
      { textoRespuesta: "36", isCorrect: true },
      { textoRespuesta: "26", isCorrect: false },
      { textoRespuesta: "16", isCorrect: false },
      { textoRespuesta: "6", isCorrect: false },
    ],
  },
  {
    categoria: "Ciencia",
    titulo: "¿De que color es el agua?",
    opciones: [
      { textoRespuesta: "Blanca", isCorrect: false },
      { textoRespuesta: "Incolora", isCorrect: true },

      { textoRespuesta: "Azul", isCorrect: false },
      { textoRespuesta: "Multicolor", isCorrect: false },
    ],
  },
  {
    categoria: "Ciencia",
    titulo: "¿Cuántos huesos tiene el cuerpo humano?",
    opciones: [
      { textoRespuesta: "306", isCorrect: false },
      { textoRespuesta: "500", isCorrect: false },
      { textoRespuesta: "206", isCorrect: true },
      { textoRespuesta: "106", isCorrect: false },
    ],
  },
  {
    categoria: "Ciencia",
    titulo: "¿Cuál es el mejor lenguaje de programación?",
    opciones: [
      { textoRespuesta: "JavaScript", isCorrect: true },
      { textoRespuesta: "PHP", isCorrect: false },
      { textoRespuesta: "C++", isCorrect: false },
      { textoRespuesta: "Kotlin", isCorrect: false },
    ],
  },
  {
    categoria: "Ciencia",
    titulo: "¿Mejor empresa de tecnologia?",
    opciones: [
      { textoRespuesta: "Sofka", isCorrect: true },
      { textoRespuesta: "Globant", isCorrect: false },
      { textoRespuesta: "Google", isCorrect: false },
      { textoRespuesta: "Tesla", isCorrect: false },
    ],
  },
  {
    categoria: "Ciencia",
    titulo: "¿Que pesa mas?",
    opciones: [
      { textoRespuesta: "1 Kg de Tierra", isCorrect: false },
      { textoRespuesta: "1 Kg de Plumas", isCorrect: false },
      { textoRespuesta: "1 Kg de Arroz", isCorrect: false },
      { textoRespuesta: "Todas Correctas", isCorrect: true },
    ],
  },
  {
    categoria: "Cine o TV",
    titulo: "¿Quien conduce Pasapalabra?",
    opciones: [
      { textoRespuesta: "Tinelli", isCorrect: true },
      { textoRespuesta: "Rial", isCorrect: false },
      { textoRespuesta: "Ventura", isCorrect: false },
      { textoRespuesta: "Barassi", isCorrect: false },
    ],
  },
  {
    categoria: "Cine o TV",
    titulo: "¿Qué cantante protagonizó El Guardaespaldas?",
    opciones: [
      { textoRespuesta: "Whitney Houston", isCorrect: true },
      { textoRespuesta: "Madona", isCorrect: false },
      { textoRespuesta: "Britney Spears", isCorrect: false },
      { textoRespuesta: "Shakira", isCorrect: false },
    ],
  },
  {
    categoria: "Cine o TV",
    titulo: "¿Cuál es el mejor lenguaje de programación?",
    opciones: [
      { textoRespuesta: "JavaScript", isCorrect: true },
      { textoRespuesta: "PHP", isCorrect: false },
      { textoRespuesta: "C++", isCorrect: false },
      { textoRespuesta: "Kotlin", isCorrect: false },
    ],
  },
  {
    categoria: "Cine o TV",
    titulo: "¿Quién dirigió la trilogía original de la saga Star Wars?",
    opciones: [
      { textoRespuesta: "George Lucas", isCorrect: true },
      { textoRespuesta: "Steven Spielberg", isCorrect: false },
      { textoRespuesta: "Alpacino", isCorrect: false },
      { textoRespuesta: "Tinelli", isCorrect: false },
    ],
  },
  {
    categoria: "Cine o TV",
    titulo: "¿Cuál fue la primera película de Walt Disney?",
    opciones: [
      { textoRespuesta: "Blanca Nieve y los 7 enanitos", isCorrect: true },
      { textoRespuesta: "Micky Mouse", isCorrect: false },
      { textoRespuesta: "La Cenicienta", isCorrect: false },
      { textoRespuesta: "Spiderman", isCorrect: false },
    ],
  },
  {
    categoria: "Historia",
    titulo: "¿Cuál fue el discípulo de Jesús que lo traicionó?",
    opciones: [
      { textoRespuesta: "Melchor", isCorrect: false },
      { textoRespuesta: "Gaspar", isCorrect: false },
      { textoRespuesta: "Judas", isCorrect: true },
      { textoRespuesta: "Juan", isCorrect: false },
    ],
  },
  {
    categoria: "Historia",
    titulo: "¿En que año se Independizó Uruguay?",
    opciones: [
      { textoRespuesta: "18 de Enero de 1830", isCorrect: false },
      { textoRespuesta: "18 de Julio de 1830", isCorrect: false },
      { textoRespuesta: "25 de Diciembre de 1825 ", isCorrect: false },
      { textoRespuesta: "25 de agosto de 1825", isCorrect: true },
    ],
  },
  {
    categoria: "Historia",
    titulo: "¿En qué lugar murió Napoleón?",
    opciones: [
      { textoRespuesta: "Isla Canarias", isCorrect: false },
      { textoRespuesta: "Isla Santa Elena", isCorrect: true },
      { textoRespuesta: "Francia", isCorrect: false },
      { textoRespuesta: "Marsella", isCorrect: false },
    ],
  },
  {
    categoria: "Historia",
    titulo: "¿En que año descubrió Colón, América?",
    opciones: [
      { textoRespuesta: "1692", isCorrect: false },
      { textoRespuesta: "1592", isCorrect: false },
      { textoRespuesta: "1492", isCorrect: true },
      { textoRespuesta: "2015", isCorrect: false },
    ],
  },
  {
    categoria: "Historia",
    titulo: "¿Que inicio la 2 Guerra Mundial?",
    opciones: [
      { textoRespuesta: "ALemania invadió Polonia", isCorrect: true },
      { textoRespuesta: "Hitler invadió Austria", isCorrect: false },
      { textoRespuesta: "El asesinato de Kennedy++", isCorrect: false },
      { textoRespuesta: "No reenviaron un mail", isCorrect: false },
    ],
  },
];

export default preguntas;
