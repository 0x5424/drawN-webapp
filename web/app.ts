import './app.css'
import App from './App.svelte'

/**
 * HACK, FIXME: (probably esbuild)
 * - variables and store accessors not used in script tags are not available in the view.
 *
 * As a workaround... every component that uses the stores can append `noop(storeName, Component)` to the script
 */
export const noop = (..._: any[]) => null // eslint-disable-line @typescript-eslint/no-unused-vars

new App({ target: document.body })
