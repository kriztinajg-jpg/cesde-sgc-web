import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { documentosData, categoriasDocumentales, procesosSGC } from '../data/mockData';

export default function VistaCategoria() {
  const { procesoId, categoriaId } = useParams();
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  
  // Estado para controlar qué documento se está visualizando en el Modal
  const [documentoseleccionado, setDocumentoSeleccionado] = useState(null);

  // Buscar información de la categoría y del proceso actual
  const categoria = categoriasDocumentales?.find(c => c.id === parseInt(categoriaId)) || { nombre: 'Categoría' };
  
  let nombreProceso = 'Proceso';
  procesosSGC?.forEach(p => {
    const areaEncontrada = p.areas?.find(a => a.id === parseInt(procesoId));
    if (areaEncontrada) nombreProceso = areaEncontrada.nombre;
  });

  // Filtrar los documentos
  const documentosFiltrados = documentosData.filter(doc => {
    const coincideCategoria = doc.categoriaId === parseInt(categoriaId);
    const coincideBusqueda = doc.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                            doc.codigo.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 relative">
      
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
                      <button
                        onClick={() => setDocumentoSeleccionado(doc)}
                        className="inline-block text-xs font-semibold bg-[#e20074] text-white px-3.5 py-2 rounded-lg hover:bg-pink-700 transition duration-200 shadow-sm"
                      >
                        Ver Documento
                      </button>
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

      {/* MODAL DE VISUALIZACIÓN DE DOCUMENTO */}
      {documentoseleccionado && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 relative">
            
            {/* Header del Modal */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs bg-slate-100 text-slate-600 font-mono font-bold px-2.5 py-1 rounded-md">
                  {documentoseleccionado.codigo}
                </span>
                <h2 className="text-xl font-bold text-slate-800 mt-2">
                  {documentoseleccionado.nombre}
                </h2>
              </div>
              <button
                onClick={() => setDocumentoSeleccionado(null)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold px-2 py-1 rounded-lg hover:bg-slate-100 transition"
              >
                ✕
              </button>
            </div>

            {/* Contenido / Simulación del Documento */}
            <div className="py-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl text-xs text-slate-600 border border-slate-100">
                <div>
                  <p className="font-semibold text-slate-400 uppercase">Versión Vigente</p>
                  <p className="text-sm font-bold text-slate-700">{documentoseleccionado.version}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-400 uppercase">Fecha Aprobación</p>
                  <p className="text-sm font-bold text-slate-700">{documentoseleccionado.fecha}</p>
                </div>
              </div>

              {/* Contenedor que simula la vista previa del archivo */}
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50/50">
                <div className="text-4xl mb-2">📄</div>
                <p className="text-sm font-semibold text-slate-700">Vista previa del archivo PDF/Word</p>
                <p className="text-xs text-slate-400 mt-1">
                  Documento oficial registrado en el SGC CESDE.
                </p>
              </div>
            </div>

            {/* Footer / Botones de acción */}
            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
              <button
                onClick={() => setDocumentoSeleccionado(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition"
              >
                Cerrar
              </button>
              <a
                href={documentoseleccionado.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => alert("Simulación: Descargando archivo del SGC...")}
                className="px-4 py-2 text-xs font-semibold bg-[#e20074] text-white rounded-lg hover:bg-pink-700 transition shadow-sm flex items-center gap-1"
              >
                📥 Descargar Archivo
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}