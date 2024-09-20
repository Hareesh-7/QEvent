
import EventCard from "@/components/EventCard";
export default async function EventsPage(){
   const response= await fetch("https://qevent-backend.labs.crio.do/events") ;
   const events= await response.json();
   
    return (
        
        <div className="w-full flex flex-wrap justify-between">
            {events.map(event=>{
                return(
                    <EventCard eventData={event}/>
                )
            })}
        </div>
        
        
    )
}