import { Navbar } from "../components/shared/Navbar"
import { useRouteError } from "react-router-dom"

export const Error404 = ()=>{
const error = useRouteError();
console.log(error);

    return(
<div className="bg-[#192026] h-[100vh]" >
<Navbar/>
<p className="text-white text-center " >
{error.status  }
</p>
<p className="text-white text-center"> Page 
 {error.statusText}
</p>

</div>

    )
}