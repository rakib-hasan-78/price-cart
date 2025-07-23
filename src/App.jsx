import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

      <div className='w-full h-auto bg-[radial-gradient(circle_farthest-corner_at_-5.6%_-6.8%,_rgba(103,49,145,1)_37.3%,_rgba(50,0,129,1)_73.5%)] p-6 text-white flex items-center justify-center flex-col'>
        
                <h1 className='bg-linear-to-r from-amber-300 via-orange-400 to-emerald-200 bg-clip-text text-transparent text-6xl font-black text-center capitalize font-serif'> dashboard </h1>
                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                  </p>
                </div>
                <p className="read-the-docs">
                  Click on the Vite and React logos to learn more
                </p>
        
      </div>
    </main>
  )
}

export default App
