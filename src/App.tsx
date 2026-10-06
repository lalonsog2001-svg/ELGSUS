import './App.css'

const stack = [
  { name: 'Vite', detail: 'Dev server con recarga instantánea (HMR)' },
  { name: 'React 19', detail: 'Interfaz construida por componentes' },
  { name: 'TypeScript', detail: 'Tipado estático en todo el proyecto' },
]

function App() {
  return (
    <main className="shell">
      <section className="card">
        <span className="badge">
          <span className="dot" aria-hidden="true" />
          App en línea
        </span>

        <h1>ELGSUS</h1>

        <p className="lead">
          La aplicación ya está corriendo. Este es un proyecto nuevo de Vite + React +
          TypeScript creado dentro del repositorio, listo para construir encima.
        </p>

        <ul className="stack">
          {stack.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>

        <p className="hint">
          Edita <code>src/App.tsx</code>, guarda, y el cambio aparece al instante.
        </p>
      </section>
    </main>
  )
}

export default App
