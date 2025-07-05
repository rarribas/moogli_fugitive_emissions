// As this component is used only once in the header it won't need any props
// in an scenario where this component will need to be shared around multiple
// pages I'd add 2 properties title and desc
export function PageHeader(){
  return (<header className="mb-[18px]">
    <h1>Fugitive Emissions</h1>
    <p className='font-sans text-sm'>Fugitive emissions represent a significant proportion of anthropogenic greenhouse gas emissions and their assessment, let alone reduction, is still in its infancy.</p>
  </header>)
}