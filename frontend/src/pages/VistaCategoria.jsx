
import { Link, useParams } from 'react-router-dom';

export default function VistaCategoria() {
  const { procesoId, categoriaId } = useParams();
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Link to={`/proceso/${procesoId}`} className="text-cesde">← Volver al proceso</Link>
      <h2 className="text-2xl font-bold mt-4">Categoría {categoriaId}</h2>
    </div>
  );
}