import { AnimeInfo, AnimeVideoPlay } from "../components/details/AnimeInfo"
import { AnimePopular } from "../components/details/AnimePopular"
import { Navbar } from "../components/shared/Navbar"

export const Details = ()=>{


    return(

<div className="bg-[#192026]" >

<Navbar/>

<div className="w-[80%] mx-auto" >

{/**primary flex div */}    
<div className="flex gap-[1em]" >

{/**Anime play and synopsis */}
<div className="basis-[60%]">
<AnimeVideoPlay/>
<AnimeInfo/>
</div>

{/*popular anime component to map*/}
<div className="basis-[40%]" ><AnimePopular/></div>

</div>
</div>

</div>

    )
}