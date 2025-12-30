function loadEvents() {
  fetch("http://localhost:5000/events")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("eventList");
      container.innerHTML = "";
      data.forEach(e => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${e.title}</h3>
                         <p>${e.date}</p>
                         <p>${e.venue}</p>`;
        container.appendChild(div);
      });
    });
}
