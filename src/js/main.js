// pages
let singlep = document.getElementById('playerone');
let multip = document.getElementById('playertwo');
let help = document.getElementById('help');

singlep.onclick = () => {
   window.location = "./pages/singleplayer/home.html";
}
multip.onclick = () => {
   window.location = "./pages/multiplayer/home.html";
}
help.onclick = () => {
   window.location = "./pages/help/help.html";
}