const startBtn = document.getElementById("start");
const playersInput = document.getElementById("players");
const screen = document.getElementById("screen");
const setup = document.getElementById("setup");

const words = [
  // Jujutsu Kaisen - Characters
  "Yuji","Megumi","Nobara","Gojo","Sukuna","Mahito","Kento","Panda","Toge","Rika","Nanami","Jogo","Hanami","Toji","Choso","Yuta",
 

  // Naruto - Characters
  "Naruto","Sasuke","Sakura","Kakashi","Itachi","Madara","Obito","Hashirama","Minato","Tsunade","Orochimaru","Jiraiya","Rock Lee","Neji","Hinata","Shikamaru","Gaara","Pain",
 

  // Dragon Ball - Characters
  "Goku","Vegeta","Gohan","Trunks","Piccolo","Frieza","Cell","Majin Buu","Beerus","Whis","Broly","Jiren","Hit","Goten","Vegito","Gogeta",


  // My Hero Academia - Characters
  "Deku","Bakugo","Shoto","Ochaco","Tenya","Momo","Tsuyu","Fumikage","Eijiro","Mineta","All Might","Endeavor","Hawks","Eri","Stain","Mirio","Shigaraki","Dabi","Toga","AFO",


  // Mob Psycho 100 - Characters
  "Mob","Reigen",


  // Attack on Titan - Characters
  "Eren","Mikasa","Armin","Levi","Historia","Reiner","Bertolt","Zeke","Jean","Connie","Sasha","Hange","Erwin","Pieck","Gabi","Falco","Galliard","Ymir","Floch","Esacanor",


  // Death Note - Characters
  "Light","L","Ryuk","Rem","Watari",


  // Dandadan - Characters
  "Okarun","Momo",
  // Dandadan - Abilities
  

  // Demon Slayer - Characters (basic)
  "Tanjiro","Nezuko","Zenitsu","Inosuke","Giyu","Shinobu",
  // Demon Slayer - Abilities
  

  // Bleach - Characters (main)
  "Ichigo","Rukia","Renji","Yamamoto","Kenpachi","Aizen","Grimmjow","Ulquiorra","Orihime","Yoruichi",
  // Bleach - Abilities


  // One Punch Man - Characters
  "Saitama","Genos","Tatsumaki","Garou","Boros",
  // OPM - Abilities
  

  // Chainsaw Man - Characters (anime only)
  "Denji","Power","Aki","Himeno","Kishibe","Makima","Kobeni","Pikachu","Charizard",
  // Chainsaw Man - Abilities
 

  "Meliodas","Jotaro",
];


let players = 0;
let impostor = 0;
let index = 1;
let word = "";
let showing = false;

// Step 3: Start button
startBtn.onclick = () => {
  players = Number(playersInput.value);
  if (players < 3) return;

  impostor = Math.floor(Math.random() * players) + 1;
  word = words[Math.floor(Math.random() * words.length)];

  setup.classList.add("hidden");
  screen.classList.remove("hidden");
  screen.textContent = "Tap";
};

// Step 4: Tap logic
screen.onclick = () => {
  if (index > players) return;

  if (!showing) {
    screen.textContent = (index === impostor) ? "IMPOSTOR" : word;
    showing = true;
  } else {
    screen.textContent = "Tap";
    showing = false;
    index++;
    if (index > players) screen.textContent = "DONE";
  }
};

