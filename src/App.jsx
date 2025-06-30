import { Button } from "@/components/ui/Button"
import Dashboard from "./components/ui/modals/Dashboard"

function App() {

  return (
    <div className="flex">
     <aside className='h-screen w-[250px] bg-white'></aside>
     <main className='h-screen bg-[#F7F9FC] flex-1 p-[38px]'>
      <Dashboard/>
     </main>
    </div>
  )
}

export default App
