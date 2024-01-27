import { Details } from "./pages/Details"
import { Error404 } from "./pages/Error"
import { Home } from "./pages/Home"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Error404/>
  },
  {
    path:"/Details",
    element:<Details/>,
    errorElement:<Error404/>
   
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
