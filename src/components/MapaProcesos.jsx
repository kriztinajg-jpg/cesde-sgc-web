import { useState } from 'react';
import { procesosData } from '../data/mockData';

export default function MapaProcesos() {
  const [procesoSeleccionado, setProcesoSeleccionado] = useState(null);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Mapa Interactivo del Sistema de Gestión
      </h2>
      
      {/* Tarjetas de Procesos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {procesosData.map((proceso) => (
          <div
            key={proceso.id}
            onClick={() => setProcesoSeleccionado(proceso)}
            className={`cursor-pointer p-5 rounded-xl shadow-md text-white transition-all transform hover:scale-105 ${proceso.color_hex} ${
              procesoSeleccionado?.id === proceso.id ? 'ring-4 ring-offset-2 ring-indigo-500' : ''
            }`}
          >
            <span className="text-xs uppercase font-semibold tracking-wider bg-black/20 px-2 py-1 rounded">
              {proceso.tipo}
            </span>
            <h3 className="text-lg font-bold mt-3">{proceso.nombre}</h3>
            <p className="text-sm opacity-90 mt-1">Haz clic para ver áreas</p>
          </div>
        ))}
      </div>

      {/* Detalle de Áreas del Proceso Seleccionado */}
      {procesoSeleccionado && (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            Áreas de: <span className="text-indigo-600">{procesoSeleccionado.nombre}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {procesoSeleccionado.areas.map((area) => (
              <div key={area.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-indigo-50 transition-colors">
                <h4 className="font-bold text-gray-800">{area.nombre}</h4>
                <p className="text-sm text-gray-600 mt-1">{area.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}