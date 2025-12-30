const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const events = [
  { title: "Tech Talk on AI", date: "2025-01-20", venue: "Seminar Hall A" },
  { title: "Coding Hackathon", date: "2025-02-05", venue: "Lab Block" },
  { title: "Cultural Fest", date: "2025-03-15", venue: "Open Ground" }
];

app.get("/events", (req, res) => {
  res.json(events);
});

app.listen(5000, () =>
  console.log("Campus Event backend running on port 5000")
);
