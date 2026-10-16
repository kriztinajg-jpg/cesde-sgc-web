
import { Link, useParams } from 'react-router-dom';

export default function VistaProceso() {
  const { procesoId } = useParams();
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Link to="/" className="text-cesde">← Volver al mapa</Link>
      <h2 className="text-2xl font-bold mt-4">Proceso {procesoId}</h2>
    </div>
  );
}