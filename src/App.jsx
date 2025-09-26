import { Hero } from "./Components/Hero"
import { About } from "./Components/About"

export const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
      <About/>
    </main>
  )
}
