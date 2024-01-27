import aoashi from "../../assets/images/aoashi_card.png"
import attackontitan from "../../assets/images/attackontitan.png"
import boruto_naruto_next_generations from "../../assets/images/boruto-naruto-next-generations.png"
import captsu from "../../assets/images/captsu_card.png"
export const NewRelease = ()=>{
return(


    <div>
        <h2 className="font-semibold text-[30px] text-white pt-[1em] pb-[.5em]">New Realease</h2>
        <div className="flex gap-[1em] " >
        <AnimeNewRelease/>
        </div>
    </div>
)


}

export const AnimeNewRelease = ()=>{

return(
<div className="flex gap-[1em]" >
    
<div className="text-white" >
    <div style={{backgroundImage:`url(${attackontitan})`}} className="bg-no-repeat h-[30vh] rounded-[10px] pt-[9em] px-[2em]">
<h2>Episode 1018</h2>
    </div>
    <p className="px-[1em]" >Shingeki no kyoujin</p>
</div>





<div className="text-white" >
    <div style={{backgroundImage:`url(${aoashi})`}} className="bg-no-repeat h-[30vh] rounded-[10px] pt-[9em] px-[2em]">
<h2>Episode 1018</h2>
    </div>
    <p className="px-[1em]" >Shingeki no kyoujin</p>
</div>




<div className="text-white" >
    <div style={{backgroundImage:`url(${boruto_naruto_next_generations})`}} className="bg-no-repeat h-[30vh] rounded-[10px] pt-[9em] px-[2em] "  >
<h2>Episode 1018</h2>
    </div>
    <p className="px-[1em]" >Shingeki no kyoujin</p>
</div>







<div className="text-white" >
    <div style={{backgroundImage:`url(${captsu})`}} className="bg-no-repeat h-[30vh] rounded-[10px] pt-[9em] px-[2em] "  >
<h2>Episode 1018</h2>
    </div>
    <p className="px-[1em]" >Shingeki no kyoujin</p>
</div>
</div>
)
}