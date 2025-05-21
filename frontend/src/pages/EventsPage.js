import { Link } from "react-router-dom";

const DUMMY_EVENT = [
  { id: "e1", title: "Some event" },
  { id: "e2", title: "Another event" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENT.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
