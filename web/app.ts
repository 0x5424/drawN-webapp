import './app.css'
import App from './App.svelte'
import { THEME as theme } from './config'

new App({ target: document.body, props: { theme } })
