import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { categoriasDocumentales, procesosSGC } from '../data/mockData';

export default function VistaProceso() {
  const { procesoId } = useParams();
  const navigate = useNavigate();

  // Buscar el proceso o área actual
  let procesoNombre = `Proceso ${procesoId}`;
  procesosSGC?.forEach(p => {
    if (p.id === parseInt(procesoId)) procesoNombre = p.nombre;
    const area = p.areas?.find(a => a.id === parseInt(procesoId));
    if (area) procesoNombre = area.nombre;
  });

  return (
    <div className="max-w-5xl mx-auto px-4">
      
      {/* Botón Volver */}
      <div className="mb-6">
        <button
          onClick={() => navigate('/')}
          className="text-[#e20074] hover:underline text-sm font-semibold flex items-center gap-1"
        >
          ← Volver al mapa
        </button>
      </div>

      {/* Título del Proceso */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8">
        <h1 className="text-3xl font-bold text-slate-800">{procesoNombre}</h1>
        <p className="text-slate-500 text-sm mt-1">
          Selecciona una categoría para ver los documentos y archivos asociados.
        </p>
      </div>

      {/* Cuadrícula de las 7 Categorías */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categoriasDocumentales.map((cat) => (
          <Link
            key={cat.id}
            to={`/proceso/${procesoId}/categoria/${cat.id}`}
            className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#e20074] hover:shadow-md transition duration-200 flex flex-col justify-between group"
          >
            <div>
              <span className="text-xs text-slate-400 font-mono">Categoría #{cat.id}</span>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#e20074] transition duration-150 mt-1">
                {cat.nombre}
              </h3>
            </div>
            <div className="mt-4 text-right">
              <span className="text-xs font-semibold text-[#e20074] group-hover:underline">
                Ver documentos →
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}