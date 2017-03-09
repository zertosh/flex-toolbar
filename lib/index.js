'use babel'

import FlexToolBar from './flex-tool-bar.js'

export const config = {

}

export default {
  flexToolBar: null,
  toolBar: null,

  activate (state = {}) {
    require('atom-package-deps').install('flex-tool-bar', true).then(() => {
      this.flexToolBar = new FlexToolBar(state)
      if (this.toolBar) {
        this.flexToolBar.addToolBar(this.toolBar)
      }
    })
  },

  deactivate () {
    this.flexToolBar.destroy()
    this.flexToolBar = null
    this.toolBar.removeItems()
    this.toolBar = null
  },

  consumeToolBar (getToolBar) {
    this.toolBar = getToolBar('flex-tool-bar')
    if (this.flexToolBar) {
      this.flexToolBar.addToolBar(this.toolBar)
    }
  },

  serialize () {
    return this.flexToolBar.serialize()
  }
}
