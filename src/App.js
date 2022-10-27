const fs = window.require('fs')
const pathModule = window.require('path')
const { app } = window.require('@electron/remote')
const { ipcRender } = window.require('electron')


function App() {

  function callIPC() {
    ipcRender.send("app/launch")
  }

  return (

    <div className="App">
      <button onClick={callIPC}>Launch Minecraft</button>
    </div>
  )
}

export default App
