import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TableDataProvider } from './context/mainTableDataContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TableDataProvider>
      <App />
    </TableDataProvider>
  </StrictMode>,
)
