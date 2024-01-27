import { Details } from "./pages/Details"
import { Home } from "./pages/Home"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Details",
    element:<Details/>
  },
  {
    path:"*",
    element:<Error/>
  }
])


function App() {

  return (
  <div>
<RouterProvider router={router}/>
  </div>
  )
}

export default App
