//rafce
import Sidebar from "./components/Sidebar"
import Player from "./components/Player"
import Display from "./components/Display"

const App = () => {
  return (
    <div className="h-screen bg-[#29053d]">
      <div className="h-[90%] flex">
        <Sidebar  />
        <Display/>
      </div>
       <Player/>
    </div>
  )
}

export default App
