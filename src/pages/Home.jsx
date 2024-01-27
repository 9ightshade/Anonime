import { Caurosel } from "../components/home/Caurosel"
import { Explore } from "../components/home/Explore"
import { NewRelease } from "../components/home/NewRelease"
import { Navbar } from "../components/shared/Navbar"

export const Home = ()=>{


    return(

<div className="bg-[#192026]" >
<Navbar/>
<div className="w-[80%] mx-auto " >
<Explore/>
<Caurosel/>
<NewRelease/>
</div>
</div>
    )
}