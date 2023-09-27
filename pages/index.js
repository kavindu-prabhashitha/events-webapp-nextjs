import EventList from "../components/events/event-list"
import EventSearch from "../components/events/events-search";
import { getFeaturedEvents } from "../dummy-data"

function HomePage(){
    const featuredEvents = getFeaturedEvents();
 return (
    <div>
        <EventSearch />
        <EventList items={featuredEvents} />
    </div>
 )
}

export default HomePage