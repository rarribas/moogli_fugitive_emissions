export function PageHeader({title, descp}){
  return (<header>
    <h1>{title}</h1>
    <p className='font-sans text-sm'>{descp}</p>
  </header>)
}