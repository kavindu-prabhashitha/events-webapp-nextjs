import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/navigation";

function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month){
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }
  return (

      <Fragment>
        <EventSearch onSearch={findEventsHandler}/>
        <EventList items={allEvents} />
      </Fragment>

  );
}

export default AllEventsPage;
