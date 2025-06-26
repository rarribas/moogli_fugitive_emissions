import { Button } from "@/components/ui/button"
import Dashboard from "./components/Dashboard"
import { headerColumns, data } from "./data/mainTableData";
import DataTable from "./components/ui/DataTable";

function App() {

  return (
    <div className="flex">
     <aside className='h-screen w-[250px] bg-white'></aside>
     <main className='h-screen bg-[#F7F9FC] flex-1 p-[38px]'>
      <Dashboard/>
      <DataTable columns={headerColumns} data={data}/>
     </main>
    </div>
  )
}

export default App
