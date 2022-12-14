const frogMenu = document.getElementById("frog-menu");
const frogChat = document.getElementById("frog-chat");
const frogMessage = document.getElementById("frog-message");
const frogCopy = [
  "Come for the frog, stay for the mod ๐ธ",
  "Frog's the name, modulation is my game ๐ธ",
  "FM Tip #76: Do not submerge electronic synthesizers in water โ always modulate on a dry above-water lily-pad ๐๐ฝ",
  "๐ธ ๐ ๐ธ ๐ ๐ธ ๐ ๐ธ",
  "Annea Lockwood type beats bb ๐ธ",
  "My skin absorbs water at an incredible rate!",
  "Next time we're gonna jam at your pad, okay?",
  "Nice set y'all, can I borrow your clock module?",
  "Is this good screen or bad screen? Asking for a frog ๐ธ",
  "(sin(Frog * time) * chonko) ^ 2",
  "๐ธ Frog Modulation Station ๐ธ",
  "๐ธ has entered the chat",
  "๐ธToggle on frog mode๐ธ",
  "Please help, my son has started a music career!",
];

setTimeout(function () {
  frogChat.classList.add("ghost");
}, 3000);

setInterval(function () {
  if (window.location.pathname === "/") {
    var randomMessage = frogCopy[Math.floor(Math.random() * frogCopy.length)];
    frogMessage.textContent = randomMessage;
    frogChat.classList.toggle("ghost");
    setTimeout(function () {
      frogChat.classList.add("ghost");
    }, 6000);
    frogMessage.textContent = randomMessage;
  }
}, 12000);

frogContainer.addEventListener("click", function () {
  frogMenu.classList.toggle("frog-left");
  frogChat.classList.toggle("hidden");
});
