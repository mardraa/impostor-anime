/************ FIREBASE CONFIG ************/
/* 🔴 PASTE YOUR CONFIG HERE 🔴 */
const firebaseConfig = {
  apiKey: "AIzaSyC2Bt3zaOKLYePftEyosxmMW6zuyGE1_wE",
  authDomain: "impsotet.firebaseapp.com",
  databaseURL: "https://impsotet-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "impsotet",
  storageBucket: "impsotet.firebasestorage.app",
  messagingSenderId: "564051029540",
  appId: "1:564051029540:web:8f44bedd115420d6d432b1"
};
/****************************************/

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

/************ GAME DATA ************/
const CHARACTERS = [
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
  "Eren","Mikasa","Armin","Levi","Historia","Reiner","Bertolt","Zeke","Jean","Connie","Sasha","Hange","Erwin","Pieck",  "Gabi","Falco","Galliard","Ymir","Floch","Esacanor",


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

let playerId = "p_" + Math.random().toString(36).substr(2, 9);
let playerName = "";
let roomId = "";
let isHost = false;

/************ ROOM FUNCTIONS ************/
function createRoom() {
  playerName = nameInput.value || "Player";
  roomId = Math.random().toString(36).substr(2, 5).toUpperCase();
  isHost = true;

  db.ref("rooms/" + roomId).set({
    status: "lobby",
    players: {}
  });

  joinRoom(true);
}

function joinRoom(host = false) {
  playerName = nameInput.value || "Player";
  roomId = host ? roomId : roomInput.value.toUpperCase();
  if (!roomId) return alert("Enter room ID");

  db.ref(`rooms/${roomId}/players/${playerId}`).set({
    name: playerName
  });

  menu.classList.add("hidden");
  game.classList.remove("hidden");
  roomDisplay.innerText = "Room: " + roomId;

  listenToRoom();
}

/************ GAME LOGIC ************/
function startGame() {
  if (!isHost) return;

  db.ref("rooms/" + roomId).once("value", snap => {
    const room = snap.val();
    const players = Object.keys(room.players);
    if (players.length < 3) {
      alert("Need at least 3 players");
      return;
    }

    const impostor = players[Math.floor(Math.random() * players.length)];
    const character = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

    db.ref("rooms/" + roomId).update({
      status: "started",
      impostorId: impostor,
      character: character
    });
  });
}

function restartGame() {
  if (!isHost) return;

  db.ref("rooms/" + roomId).update({
    status: "lobby",
    impostorId: null,
    character: null
  });

  status.innerText = "Waiting for players...";
  restartBtn.classList.add("hidden");
  startBtn.classList.remove("hidden");
}

/************ LISTENERS ************/
function listenToRoom() {
  db.ref("rooms/" + roomId).on("value", snap => {
    const room = snap.val();
    if (!room) return;

    if (room.status === "lobby") {
      status.innerText = "Waiting for players...";
      startBtn.style.display = isHost ? "inline-block" : "none";
    }

    if (room.status === "started") {
      startBtn.classList.add("hidden");
      restartBtn.classList.toggle("hidden", !isHost);

      if (room.impostorId === playerId) {
        status.innerText = "YOU ARE THE IMPOSTOR";
      } else {
        status.innerText = "CHARACTER: " + room.character;
      }
    }
  });
}


























