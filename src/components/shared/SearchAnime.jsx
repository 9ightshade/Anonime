import { useState } from "react";


export const SearchAnime = ()=>{
 const [searchValue, setSearchValue] = useState("");
 

 {/**function handles search query and searches database for match which it returns to caurosel */}
    const handleSearchQuery =(e)=>{
setSearchValue(e.target.value);
console.log(searchValue);
    }


return(

<div>

<input type="search" name="search" id="search" placeholder="Search anime or movie" className="bg-slate-800 rounded-[30px] py-[.7em] pl-[.9em] pr-[9em] text-[#868686] outline-none " onChangeCapture={handleSearchQuery} />

</div>


)


}