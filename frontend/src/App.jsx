import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VistaProceso from './pages/VistaProceso';
import VistaCategoria from './pages/VistaCategoria';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">SGC - CESDE</h1>
        <p className="text-gray-600 mt-2">Módulo de Calidad y Procesos</p>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proceso/:procesoId" element={<VistaProceso />} />
          <Route path="/proceso/:procesoId/categoria/:categoriaId" element={<VistaCategoria />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;