import styles from './css/styles.css'
import material from './css/material.min.css'

(function() {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
  }
})()

require.ensure([
  './scripts/update'
], (require) => {
  var update = require ('./scripts/update')
  update.updateEntries()
}, 'extra')
