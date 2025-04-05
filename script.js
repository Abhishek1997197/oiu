
const socket = io();
let room = "";

function joinRoom() {
  room = document.getElementById("room").value;
  socket.emit("join", room);
  document.getElementById("lobby").classList.add("hidden");
  document.getElementById("board").classList.remove("hidden");
}

socket.on("start", (data) => {
  const hand = document.getElementById("hand");
  hand.innerHTML = "";
  data.cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${card.name}</strong><br>Power: ${card.power}<br>${card.type}`;
    hand.appendChild(div);
  });
});
