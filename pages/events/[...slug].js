import { getFeaturedEvents } from "../../dummy-data"

function FilteredEventsPage(){
    const featuredEvents = getFeaturedEvents()
    return (
        <div>
            <h1> Filtered Events</h1>
        </div>
    )
}

export default FilteredEventsPage