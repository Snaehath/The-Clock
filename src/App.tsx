import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Sign from "./components/Sign"

export default function App(){
  return (
    <div className="box">
      <Navbar/>
      <Content/>
      <Sign/>
    </div>
  )
}