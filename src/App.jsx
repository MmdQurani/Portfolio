import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes/routes'

function App() {
  const routeValue = useRoutes(routes)

  return (
    <div className="bg-primary text-secondary min-h-screen">
      {routeValue}
    </div>
  )
}

export default App
