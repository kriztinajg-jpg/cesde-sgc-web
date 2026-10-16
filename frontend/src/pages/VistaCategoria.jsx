import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { documentosData, categoriasDocumentales, procesosSGC } from '../data/mockData';

export default function VistaCategoria() {
  const { procesoId, categoriaId } = useParams();
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');

  // Buscar información de la categoría y del proceso actual
  const categoria = categoriasDocumentales?.find(c => c.id === parseInt(categoriaId)) || { nombre: 'Categoría' };
  
  // Buscar el nombre del área/proceso si existe en los mockData
  let nombreProceso = 'Proceso';
  procesosSGC?.forEach(p => {
    const areaEncontrada = p.areas?.find(a => a.id === parseInt(procesoId));
    if (areaEncontrada) nombreProceso = areaEncontrada.nombre;
  });

  // Filtrar los documentos correspondientes a esta categoría (y opcionalmente proceso)
  const documentosFiltrados = documentosData.filter(doc => {
    const coincideCategoria = doc.categoriaId === parseInt(categoriaId);
    const coincideBusqueda = doc.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                            doc.codigo.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="max-w-6xl mx-auto px-4">
      
      {/* Botón de regreso */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-slate-600 hover:text-[#e20074] font-semibold transition duration-200 flex items-center gap-2 text-sm"
        >
          ← Volver al Proceso
        </button>
      </div>

      {/* Encabezado con Buscador */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs bg-pink-100 text-[#e20074] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {nombreProceso}
            </span>
            <h1 className="text-2xl font-bold text-slate-800 mt-2">
              Documentos: <span className="text-[#e20074]">{categoria.nombre}</span>
            </h1>
          </div>

          {/* Campo de búsqueda */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Buscar por código o nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#e20074] focus:border-transparent transition duration-200"
            />
          </div>
        </div>
      </div>

      {/* Tabla de Documentos */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {documentosFiltrados.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-600 text-xs uppercase tracking-wider">
                  <th className="p-4">Código</th>
                  <th className="p-4">Nombre del Documento</th>
                  <th className="p-4">Versión</th>
                  <th className="p-4">Fecha Actualización</th>
                  <th className="p-4 text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {documentosFiltrados.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50 transition duration-150">
                    <td className="p-4 font-mono text-xs font-bold text-[#e20074]">{doc.codigo}</td>
                    <td className="p-4 font-medium text-slate-800">{doc.nombre}</td>
                    <td className="p-4">
                      <span className="bg-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                        {doc.version}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500">{doc.fecha}</td>
                    <td className="p-4 text-center">
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-xs font-semibold bg-[#e20074] text-white px-3.5 py-2 rounded-lg hover:bg-pink-700 transition duration-200 shadow-sm"
                      >
                        Ver Documento
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-10 text-center text-slate-500">
            <p className="text-base font-medium">No se encontraron documentos en esta categoría.</p>
            <p className="text-xs text-slate-400 mt-1">Verifica el término ingresado en la búsqueda.</p>
          </div>
        )}
      </div>

    </div>
  );
}