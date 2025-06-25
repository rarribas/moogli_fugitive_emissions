import { Button } from "@/components/ui/button"
import { PageHeader } from "./components/ui/pageHeader"

function App() {

  return (
    <div className="flex">
     <aside className='h-screen w-[250px] bg-white'></aside>
     <main className='h-screen bg-[#F7F9FC] flex-1 p-[38px]'>
      <PageHeader/>
     </main>
    </div>
  )
}

export default App
