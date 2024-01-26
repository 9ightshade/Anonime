import { Logo } from "./Logo"
import { NavLinks } from "./NavLinks"
import { SearchAnime } from "./SearchAnime"

export const Navbar = ()=>{

return(

<div className="bg-[#192026] flex justify-around items-center py-[1em] " >

<Logo/>
<NavLinks/>
<SearchAnime/>


</div>


)

}