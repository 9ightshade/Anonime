import attackontitan from "../../assets/images/attackontitan.png"
export const AnimeVideoPlay = ()=>{
    return(

<div className="py-[1em]" >
<p className="text-white" >One Piece - Episode 1018</p>
<div className="bg-[#868686]" >
    <video src="" className="w-full" ></video>
</div>
</div>



    )
}

export const AnimeInfo = ()=>{

return(

<div className="pb-[1em]" >
<div className="flex gap-3">
<div>
    <img src={attackontitan} alt="" />
</div>
<div>
    <p className="text-white" >Type :</p>
    <p className="text-[#868686]" >Tv</p>

    <p className="text-white" >Status :</p>
    <p className="text-[#868686]" >Ongoing</p>

    <p className="text-white" >Studios :</p>
    <p className="text-[#868686]" >Mappa</p>

    <p className="text-white" >Duration :</p>
    <p className="text-[#868686]" >30 mins</p>

    <p className="text-white" >Genre :</p>
    <p className="text-[#868686]" >Action, Adventure, Fantasy</p>
</div>

    </div>

<h2 className="text-white mt-[1em] " >
Sypnosis :
</h2>
<p className="text-[#868686] mt-[.7em]" >
Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.
</p>

</div>

)


}