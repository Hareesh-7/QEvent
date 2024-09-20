import ArtistCard from "@/components/ArtistCard";

export default async function ArtistsPage(){
    const response= await fetch("https://qevent-backend.labs.crio.do/artists");
    const artists= await response.json()
    return (
        
        <div className="flex flex-wrap text-center justify-between">
            {
                artists.map(artist=>{
                    return (
                        <ArtistCard artistData={artist}/>
                    )
                })
            }
        </div>
        
    )
}