import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FormCadastroConsumidor } from './components/FormCadastroConsumidor/FormCadastroConsumidor.jsx'
import { FormCadastroEstabelecimento } from './components/FormCadastroEstabelecimento/FormCadastroEstabelecimento.jsx'
import { FormCadastroPrestador } from './components/FormCadastroPrestador/FormCadastroPrestador.jsx'
import { Busca } from './components/Busca/Busca.jsx'

import { FormAutenticacao } from './components/FormAutenticacao/FormAutenticacao.jsx'
import { Identificacao } from './pages/Identificacao/Identificacao.jsx'


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <FormAutenticacao />,
        },
        {
          path: "/FormAutenticacao",
          element: <FormAutenticacao />,
        },
        {
          path: "/Identificacao",
          element: <Identificacao />,
        },
        {
          path: "/FormCadastroConsumidor",
          element: <FormCadastroConsumidor />,
        },
        {
          path: "/FormCadastroEstabelecimento",
          element: <FormCadastroEstabelecimento />,
        },
        {
          path: "/FormCadastroPrestador",
          element: <FormCadastroPrestador />,
        },
        {
          path: "/Busca",
          element: <Busca />,
        },
      ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
