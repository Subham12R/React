import Youtube from "./youtube"
function App() {
const username = "Subham"
  return (
    <>
    <h1>Vite React App {2+2} </h1>  {/* only evaluated engines */} 
    <h1>Welcome {username} </h1>
    <Youtube/>
    </>
  )
}



export default App
