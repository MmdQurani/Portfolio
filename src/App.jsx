import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes/routes'

function App() {
  const routeValue = useRoutes(routes)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-primary text-secondary">
      {/* ===== Global ambient background (fixed, behind every page) ===== */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Deep base radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 120% at 78% 8%, rgba(203,172,249,0.14) 0%, rgba(169,139,240,0.08) 35%, transparent 70%), radial-gradient(90% 90% at 8% 82%, rgba(230,219,255,0.10) 0%, transparent 55%), linear-gradient(180deg, #05081a 0%, #000319 45%, #070d24 100%)',
          }}
        />
        {/* Fine grid pattern (masked) */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(203,172,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(203,172,249,0.5) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
            maskImage:
              'radial-gradient(ellipse 90% 70% at 50% 40%, #000 30%, transparent 90%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 70% at 50% 40%, #000 30%, transparent 90%)',
          }}
        />
        {/* Drifting glowing orbs */}
        <div className="animate-orb bg-secondary/10 absolute -top-20 left-[18%] h-[30rem] w-[30rem] rounded-full blur-[140px]" />
        <div
          className="animate-orb bg-secondary-dark/10 absolute top-[30%] -right-24 h-[34rem] w-[34rem] rounded-full blur-[160px]"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="animate-orb bg-secondary-light/10 absolute bottom-[5%] left-[6%] h-[28rem] w-[28rem] rounded-full blur-[130px]"
          style={{ animationDelay: '4s' }}
        />
        {/* Soft breathing center glow */}
        <div className="bg-breathe bg-secondary/5 absolute bottom-[12%] right-[22%] h-[36rem] w-[36rem] rounded-full blur-[170px]" />
      </div>

      {routeValue}
    </div>
  )
}

export default App
