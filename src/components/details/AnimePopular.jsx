import attackontitan from "../../assets/images/attackontitan.png"
export const AnimePopular= ()=>{


    return(
        <div>
<h2 className="text-white" >
Popular Anime
</h2>
<div className="flex flex-wrap gap-2" >
<div>
    <img src={attackontitan} alt="" />
</div>

<div>
    <img src={attackontitan} alt="" />
</div>

<div>
    <img src={attackontitan} alt="" />
</div>
</div>



        </div>
    )
}