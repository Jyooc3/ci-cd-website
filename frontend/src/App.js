import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    location: "",
    date: "",
  });

  const fetchEvents = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://backend:5000/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        setForm({ title: "", location: "", date: "" });
        fetchEvents();
      });
  };

  return (
    <div className="app">
      <header className="hero">
        <h1>🎊 Event Management System</h1>
        <p>Create and manage events easily</p>
      </header>

      {/* CREATE EVENT FORM */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <input
          name="date"
          placeholder="Date"
          value={form.date}
          onChange={handleChange}
        />
        <button>Add Event</button>
      </form>

      {/* EVENTS LIST */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          {events.map((e, i) => (
            <div
              key={e.id}
              className={`card ${i % 3 === 0 ? "pink" : i % 3 === 1 ? "blue" : "purple"}`}
            >
              <h3>{e.title}</h3>
              <p>📍 {e.location}</p>
              <p>📅 {e.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
<nav className="navbar">
  <h2>Eventify</h2>
  <div>
    <button className="nav-btn">Home</button>
    <button className="nav-btn">Create</button>
  </div>
</nav>
