export const procesosData = [
  {
    id: 1,
    nombre: "Procesos Estratégicos",
    tipo: "estratégico",
    color_hex: "bg-blue-600",
    orden: 1,
    areas: [
      { id: 101, proceso_id: 1, nombre: "Dirección General", descripcion: "Toma de decisiones y directrices.", orden: 1 },
      { id: 102, proceso_id: 1, nombre: "Planeación", descripcion: "Gestión de calidad y proyectos.", orden: 2 }
    ]
  },
  {
    id: 2,
    nombre: "Procesos Misionales",
    tipo: "misional",
    color_hex: "bg-emerald-600",
    orden: 2,
    areas: [
      { id: 201, proceso_id: 2, nombre: "Producción", descripcion: "Gestión operativa de cultivos y procesos.", orden: 1 },
      { id: 202, proceso_id: 2, nombre: "Comercial", descripcion: "Ventas, atención y despacho.", orden: 2 }
    ]
  },
  {
    id: 3,
    nombre: "Procesos de Apoyo",
    tipo: "apoyo",
    color_hex: "bg-amber-600",
    orden: 3,
    areas: [
      { id: 301, proceso_id: 3, nombre: "Gestión Humana", descripcion: "Talento humano y bienestar.", orden: 1 },
      { id: 302, proceso_id: 3, nombre: "Mantenimiento", descripcion: "Soporte e infraestructura técnica.", orden: 2 }
    ]
  },
  {
    id: 4,
    nombre: "Procesos de Control",
    tipo: "control",
    color_hex: "bg-rose-600",
    orden: 4,
    areas: [
      { id: 401, proceso_id: 4, nombre: "Auditoría Interna", descripcion: "Evaluación y cumplimiento normativo.", orden: 1 }
    ]
  }
];