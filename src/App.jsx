import MapaProcesos from './components/MapaProcesos';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">SGC - CESDE</h1>
        <p className="text-gray-600 mt-2">Módulo de Calidad y Procesos</p>
      </header>
      
      <main>
        <MapaProcesos />
      </main>
    </div>
  );
}

export default App;