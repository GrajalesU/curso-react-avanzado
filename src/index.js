import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

const container = document.getElementById('app')
const root = ReactDom.createRoot(container)
root.render(<App />)
