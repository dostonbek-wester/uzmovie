import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)

//npx gltfjsx public/model/avatar.glb -o src/components/Avatar/Avatar.jsx -r public