export const procesosSGC = [
  {
    id: 1,
    nombre: "Estratégico",
    tipo: "estrategico",
    descripcion: "Procesos orientados a la direccionamiento estratégico de la institución.",
    areas: [
      {
        id: 1,
        nombre: "Rectoría",
        descripcion: "Dirección general y representación legal de la institución."
      }
    ]
  },
  {
    id: 2,
    nombre: "Misional",
    tipo: "misional",
    descripcion: "Procesos esenciales relacionados con la oferta académica y la relación con el entorno.",
    areas: [
      {
        id: 2,
        nombre: "Dirección Académica",
        descripcion: "Gestión de programas, currículo y procesos formativos."
      },
      {
        id: 3,
        nombre: "Conexión de Negocios",
        descripcion: "Articulación con el sector productivo y prácticas empresariales."
      }
    ]
  },
  {
    id: 3,
    nombre: "De Apoyo",
    tipo: "apoyo",
    descripcion: "Procesos de soporte para el funcionamiento operativo de la institución.",
    areas: [
      {
        id: 4,
        nombre: "Jurídica",
        descripcion: "Asesoría legal y normativa institucional."
      },
      {
        id: 5,
        nombre: "Talento Cesde",
        descripcion: "Gestión humana, bienestar y desarrollo del talento."
      },
      {
        id: 6,
        nombre: "Vicerrectoría Administrativa y Financiera",
        descripcion: "Gestión de recursos financieros, presupuestales y logísticos."
      },
      {
        id: 7,
        nombre: "Proyectos y Empleo",
        descripcion: "Fomento al emprendimiento, empleabilidad y gestión de proyectos."
      },
      {
        id: 8,
        nombre: "Comunicaciones",
        descripcion: "Gestión de imagen institucional, canales y difusión."
      }
    ]
  },
  {
    id: 4,
    nombre: "De Control",
    tipo: "control",
    descripcion: "Procesos de evaluación, seguimiento y mejora continua de la calidad.",
    areas: [
      {
        id: 9,
        nombre: "Auditoría y Calidad",
        descripcion: "Control interno, gestión documental y aseguramiento de la calidad."
      }
    ]
  }
];

// Alias para que funcione tanto si se importa como procesosSGC o procesosData
export const procesosData = procesosSGC;

export const categoriasDocumentales = [
  { id: 1, nombre: "Caracterización" },
  { id: 2, nombre: "Procedimientos" },
  { id: 3, nombre: "Formatos" },
  { id: 4, nombre: "Documentos" },
  { id: 5, nombre: "Riesgos" },
  { id: 6, nombre: "Indicadores" },
  { id: 7, nombre: "Planes de mejora" }
];