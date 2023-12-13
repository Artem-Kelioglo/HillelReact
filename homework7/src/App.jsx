
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const [data,error,isLoading,refetch] =useFetch('https://jsonplaceholder.typicode.com/todos')

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {isLoading ? <p>Is Loading data</p> : null}
        {error ? <p>{error}</p> : null}

        <button onClick={()=>refetch()}>refetch</button>
        <div>
          {data&&data.map(post => <p key={post.id}>{ post.title}</p>)}
        </div>
        
      </div>
      
    </>
  )
}

export default App
