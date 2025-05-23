import { redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = Object.fromEntries(data.entries());

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not save event" }), {
      status: 500,
    });
  }

  return redirect("/events");
}
