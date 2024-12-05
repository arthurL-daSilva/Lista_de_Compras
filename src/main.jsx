import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/teste.jsx' /*ESTE APP É O ARQUIVO CHAMADO app.jsx*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/*ESTE APP É O ARQUIVO CHAMADO app.jsx*/} {/*LETRA MAIUSCULA PRIMEIRO REQUERIDA*/}
  </StrictMode>,
)
