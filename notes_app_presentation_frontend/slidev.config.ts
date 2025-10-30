import { defineWindiSetup } from '@slidev/types'

// PUBLIC_INTERFACE
/**
 * Basic Slidev configuration to ensure dev server alignment and CSS import chain.
 * Sets remote access and preferred port to 3000 to match vitest server config.
 */
export default {
  remote: true,
  vite: {
    server: {
      host: '0.0.0.0',
      port: 3000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      watch: {
        usePolling: true,
      },
    },
  },
}
