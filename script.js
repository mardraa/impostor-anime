const startBtn = document.getElementById("start");
const playersInput = document.getElementById("players");
const screen = document.getElementById("screen");
const setup = document.getElementById("setup");

const words = [
  "Yuji","Megumi","Nobara","Gojo","Sukuna","Mahito","Kento","Panda","Toge","Rika","Nanami","Jogo","Hanami","Toji","Choso","Yuta",
  "Naruto","Sasuke","Sakura","Kakashi","Itachi","Madara","Obito","Hashirama","Minato","Tsunade","Orochimaru","Jiraiya","Rock Lee","Neji","Hinata","Shikamaru","Gaara","Pain",
  "Goku","Vegeta","Gohan","Trunks","Piccolo","Frieza","Cell","Majin Buu","Beerus","Whis","Broly","Jiren","Hit","Goten","Vegito","Gogeta",
  "Deku","Bakugo","Shoto","Ochaco","Tenya","Momo","Tsuyu","Fumikage","Eijiro","Mineta","All Might","Endeavor","Hawks","Eri","Stain","Mirio","Shigaraki","Dabi","Toga","AFO",
  "Mob","Reigen",
  "Eren","Mikasa","Armin","Levi","Historia","Reiner","Bertolt","Zeke","Jean","Connie","Sasha","Hange","Erwin","Pieck","Gabi","Falco","Galliard","Ymir","Floch","Esacanor",
  "Light","L","Ryuk","Rem","Watari",
  "Okarun","Momo",
  "Tanjiro","Nezuko","Zenitsu","Inosuke","Giyu","Shinobu",
  "Ichigo","Rukia","Renji","Yamamoto","Kenpachi","Aizen","Grimmjow","Ulquiorra","Orihime","Yoruichi",
  "Saitama","Genos","Tatsumaki","Garou","Boros",
  "Denji","Power","Aki","Himeno","Kishibe","Makima","Kobeni","Pikachu","Charizard",
  "Meliodas","Jotaro"
];

/************ INDIVIDUAL VAGUE HINTS ************/
const hints = {
  Yuji: "Strong body, dangerous situation",
  Megumi: "Quiet and strategic",
  Nobara: "Confident and sharp",
  Gojo: "Overwhelming presence",
  Sukuna: "Something very wrong",
  Mahito: "Cruel and playful",
  Kento: "Serious adult energy",
  Panda: "Not what it looks like",
  Toge: "Limited speech",
  Rika: "Emotionally bound",
  Nanami: "Work-focused mindset",
  Jogo: "Hot-headed",
  Hanami: "Nature themed",
  Toji: "No powers, still dangerous",
  Choso: "Blood connection",
  Yuta: "Kind but terrifying",
  Naruto: "Never gives up",
  Sasuke: "Driven by revenge",
  Sakura: "Growth over time",
  Kakashi: "Laid-back mentor",
  Itachi: "Hidden motives",
  Madara: "Legendary threat",
  Obito: "Broken ideals",
  Hashirama: "Natural leader",
  Minato: "Fast thinker",
  Tsunade: "Strength and healing",
  Orochimaru: "Unnatural curiosity",
  Jiraiya: "Goofy but wise",
  "Rock Lee": "Pure effort",
  Neji: "Fate vs choice",
  Hinata: "Quiet determination",
  Shikamaru: "Lazy genius",
  Gaara: "Lonely childhood",
  Pain: "God complex",
  Goku: "Loves a challenge",
  Vegeta: "Prideful rival",
  Gohan: "Hidden potential",
  Trunks: "Future problems",
  Piccolo: "Calm and strict",
  Frieza: "Cruel ruler",
  Cell: "Perfect design",
  "Majin Buu": "Unpredictable",
  Beerus: "Lazy destruction",
  Whis: "Always watching",
  Broly: "Uncontrolled power",
  Jiren: "Pure strength",
  Hit: "Professional",
  Goten: "Carefree",
  Vegito: "Fusion confidence",
  Gogeta: "Silent power",
  Deku: "Inherited strength",
  Bakugo: "Explosive personality",
  Shoto: "Two sides",
  Ochaco: "Lighthearted",
  Tenya: "Rule follower",
  Momo: "Smart and wealthy",
  Tsuyu: "Calm observer",
  Fumikage: "Dark companion",
  Eijiro: "Loyal and tough",
  Mineta: "Uncomfortable humor",
  "All Might": "Symbolic hero",
  Endeavor: "Redemption arc",
  Hawks: "Fast and sneaky",
  Eri: "Fragile power",
  Stain: "Extreme ideals",
  Mirio: "Optimistic",
  Shigaraki: "Decay theme",
  Dabi: "Burning anger",
  Toga: "Twisted affection",
  AFO: "Master manipulator",
  Mob: "Emotion-based power",
  Reigen: "Talks his way through",
  Eren: "Freedom obsession",
  Mikasa: "Protective",
  Armin: "Strategic thinker",
  Levi: "Clean and deadly",
  Historia: "Hidden identity",
  Reiner: "Inner conflict",
  Bertolt: "Quiet guilt",
  Zeke: "Cold logic",
  Jean: "Reluctant leader",
  Connie: "Simple loyalty",
  Sasha: "Food motivation",
  Hange: "Curiosity driven",
  Erwin: "Sacrifices everything",
  Pieck: "Unexpected endurance",
  Gabi: "Hot-headed youth",
  Falco: "Kind heart",
  Galliard: "Aggressive fighter",
  Ymir: "Freedom seeker",
  Floch: "Fanatical",
  Esacanor: "Pride and sun",
  Light: "God complex",
  L: "Strange genius",
  Ryuk: "Bored observer",
  Rem: "Loyal protector",
  Watari: "Support role",
  Okarun: "Awkward bravery",
  Momo: "Strong-willed",
  Tanjiro: "Kind soul",
  Nezuko: "Protective instinct",
  Zenitsu: "Fearful strength",
  Inosuke: "Wild energy",
  Giyu: "Silent strength",
  Shinobu: "Smiling danger",
  Ichigo: "Pulled into chaos",
  Rukia: "Guide figure",
  Renji: "Loud loyalty",
  Yamamoto: "Old authority",
  Kenpachi: "Battle obsessed",
  Aizen: "Planned everything",
  Grimmjow: "Savage",
  Ulquiorra: "Emotionless",
  Orihime: "Gentle",
  Yoruichi: "Playful mentor",
  Saitama: "Bored strength",
  Genos: "Serious student",
  Tatsumaki: "Short temper",
  Garou: "Villain mindset",
  Boros: "Cosmic conqueror",
  Denji: "Simple desires",
  Power: "Chaotic",
  Aki: "Duty bound",
  Himeno: "Risk taker",
  Kishibe: "Veteran",
  Makima: "Control",
  Kobeni: "Constant fear",
  Pikachu: "Electric mascot",
  Charizard: "Fire powerhouse",
  Meliodas: "Smiling menace",
  Jotaro: "Cold and direct"
};

/************ GAME STATE ************/
let players = 0;
let impostor = 0;
let index = 1;
let word = "";
let showing = false;

/************ START ************/
startBtn.onclick = () => {
  players = Number(playersInput.value);
  if (players < 3) return;

  impostor = Math.floor(Math.random() * players) + 1;
  word = words[Math.floor(Math.random() * words.length)];

  index = 1;
  showing = false;

  setup.classList.add("hidden");
  screen.classList.remove("hidden");
  screen.textContent = "Tap";
};

/************ TAP ************/
screen.onclick = () => {
  if (index > players) return;

  if (!showing) {
    if (index === impostor) {
      screen.innerHTML = `IMPOSTOR<br><small>${hints[word]}</small>`;
    } else {
      screen.textContent = word;
    }
    showing = true;
  } else {
    screen.textContent = "Tap";
    showing = false;
    index++;
    if (index > players) screen.textContent = "DONE";
  }
};
