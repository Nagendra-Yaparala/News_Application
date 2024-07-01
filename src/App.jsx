import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"


const App = () => {

    const [catagory,setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard catagory={catagory}/>
    </div>
  )
}

export default App