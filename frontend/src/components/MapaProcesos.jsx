import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            className={`cursor-pointer p-5 rounded-xl shadow-md text-white bg-cesde transition-all transform hover:scale-105 ${
              procesoSeleccionado?.id === proceso.id ? 'ring-4 ring-offset-2 ring-gray-800' : ''
            }`}
          >
            <h3 className="text-lg font-bold">{proceso.nombre}</h3>
            <p className="text-sm opacity-90 mt-1">Haz clic para ver áreas</p>
          </div>
        ))}
      </div>

      {/* Detalle de Áreas del Proceso Seleccionado */}
      {procesoSeleccionado && (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Áreas de: <span className="text-cesde">{procesoSeleccionado.nombre}</span>
            </h3>
            <Link
              to={`/proceso/${procesoSeleccionado.id}`}
              className="text-sm font-semibold text-cesde hover:underline"
            >
              Ver proceso →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {procesoSeleccionado.areas.map((area) => (
              <div key={area.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-cesde/10 transition-colors">
                <h4 className="font-bold text-gray-800">{area.nombre}</h4>
                {area.descripcion && (
                  <p className="text-sm text-gray-600 mt-1">{area.descripcion}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}