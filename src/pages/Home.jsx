import { Caurosel } from "../components/home/Caurosel"
import { Explore } from "../components/home/Explore"
import { Navbar } from "../components/shared/Navbar"

export const Home = ()=>{


    return(

<div className="bg-[#192026] h-[100vh] " >
<Navbar/>
<div className="w-[80%] mx-auto " >
<Explore/>
<Caurosel/>
</div>
</div>
    )
}