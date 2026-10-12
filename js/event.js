var events = [
  { name: "Hackathon", date: "15 Nov", description: "Build a working project from scratch in 24 hours. Team up, code through the night and demo your solution to the judges. Ship fast, think big." },
  { name: "Startup Pitch", date: "16 Nov", description: "Got an idea worth building? Pitch it to the judges in a high-energy round. Show your vision, defend your plan and win over the room." },
  { name: "Robo Wars", date: "17 Nov", description: "Build a robot, enter the arena and fight to be the last one running. Strength, strategy and smart engineering decide the winner." },
  { name: "Code Quiz", date: "18 Nov", description: "Test your coding knowledge against the best in a fast-paced quiz. Quick thinking and sharp fundamentals get you to the top of the leaderboard." },
  { name: "Design Sprint", date: "19 Nov", description: "Take a problem, design an app for it, and do it all in one day. Research, sketch and prototype a solution that users would love." }
];
function renderEvents() {
  var container = document.getElementById("events-container");
  container.innerHTML = "";
  for (var i = 0; i < events.length; i++) {
    var card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML =
      "<h3>" + events[i].name + "</h3>" +
      "<p class='event-date'>" + events[i].date + "</p>" +
      "<p>" + events[i].description + "</p>";
    container.appendChild(card);
  }
}