'use babel'

const configKey = 'flex-tool-bar'

class FlexToolBar {
  state = {
    visible: false
  };

  constructor (state) {
    this.state = state
    this.loadToolBarConfigure()
  }

  loadToolBarConfigure () {
    const filePath = atom.config.get(`${configKey}.toolBarConfigurationFilePath`)
    if (filePath) {
      // set default file path
    }
  }

  addToolBar (toolBar) {
    this.state.toolBar = toolBar
  }

  destroy () {
  }

  serialize () {
    return this.state
  }
}

export default FlexToolBar
