const startBtn = document.getElementById("start");
const playersInput = document.getElementById("players");
const screen = document.getElementById("screen");
const setup = document.getElementById("setup");

const words = [
  // Jujutsu Kaisen - Characters
  "Yuji","Megumi","Nobara","Gojo","Sukuna","Mahito","Kento","Panda","Toge","Rika","Nanami","Jogo","Hanami","Toji","Choso","Yuta",
  // JJK - Abilities / Items
  "Cursed Energy","Domain Expansion","Shikigami","Black Flash","Cursed Object","Binding Vow","Reverse Cursed Technique","Maximum Technique","Finger","Resonance",

  // Naruto - Characters
  "Naruto","Sasuke","Sakura","Kakashi","Itachi","Madara","Obito","Hashirama","Minato","Tsunade","Orochimaru","Jiraiya","Rock Lee","Neji","Hinata","Shikamaru","Gaara","Pain",
  // Naruto - Abilities
  "Chakra","Sharingan","Rinnegan","Byakugan","Kekkei Genkai","Summoning Scroll","Kunai","Shuriken","Susanoo","Shadow Clone","Rasengan","Chidori","Tailed Beast","Nine-Tails",

  // Dragon Ball - Characters
  "Goku","Vegeta","Gohan","Trunks","Piccolo","Frieza","Cell","Majin Buu","Beerus","Whis","Broly","Jiren","Hit","Goten","Vegito","Gogeta",
  // Dragon Ball - Abilities
  "Ki","Kamehameha","Spirit Bomb","Ultra Instinct","Super Saiyan","Fusion","Destructo Disc","Final Flash","Galick Gun","Instant Transmission","Solar Flare","Energy Wave",

  // My Hero Academia - Characters
  "Deku","Bakugo","Shoto","Ochaco","Tenya","Momo","Tsuyu","Fumikage","Eijiro","Mineta","All Might","Endeavor","Hawks","Eri","Stain","Mirio","Shigaraki","Dabi","Toga",
  // MHA - Abilities
  "Quirk","One For All","All For One","Explosion","Ice Technique","Fire Technique","Hardening","Invisibility","Decay","Teleportation","Gravity Manipulation","Transformation","Steel Body","Plus Ultra",

  // Mob Psycho 100 - Characters
  "Mob","Reigen",
  // Mob Psycho 100 - Abilities
  "Psychic Power","ESP","Telekinesis","Energy Blast",

  // Attack on Titan - Characters
  "Eren","Mikasa","Armin","Levi","Historia","Reiner","Bertolt","Zeke","Jean","Connie","Sasha","Hange","Erwin","Pieck","Gabi","Falco","Galliard","Ymir","Floch",
  // AOT - Concepts
  "Titan","Colossal Titan","Armored Titan","Beast Titan","Attack Titan","Founding Titan","Survey Corps","Wall Maria","Wall Rose","Wall Sina","3DM Gear","Rumbling","Titan Serum","Titan Shifting","Titan Roar","Jeagerist",

  // Death Note - Characters
  "Light","L","Ryuk","Rem","Watari",
  // Death Note - Concepts
  "Shinigami","Death Note","Kira","Notebook","Mind Game","Deduction","Investigation","Trap","Shinigami Eyes",

  // Dandadan - Characters
  "Okarun","Momo",
  // Dandadan - Abilities
  "Psychic Punch","Spirit Power","Ghost Manipulation","Exorcism","Barrier","Energy Manipulation","Illusion","Curse",

  // Demon Slayer - Characters (basic)
  "Tanjiro","Nezuko","Zenitsu","Inosuke","Giyu","Shinobu",
  // Demon Slayer - Abilities
  "Water Breathing","Flame Breathing","Thunder Breathing","Beast Breathing","Insect Breathing","Nichirin Blade","Demon Slayer Mark","Blood Demon Art","Total Concentration","Sun Breathing",

  // Bleach - Characters (main)
  "Ichigo","Rukia","Renji","Yamamoto","Kenpachi","Aizen","Grimmjow","Ulquiorra","Orihime","Yoruichi",
  // Bleach - Abilities
  "Zanpakuto","Shikai","Bankai","Hollow","Espada","Kyoka Suigetsu",

  // One Punch Man - Characters
  "Saitama","Genos","King","Tatsumaki","Garou","Boros",
  // OPM - Abilities
  

  // Chainsaw Man - Characters (anime only)
  "Denji","Power","Aki","Himeno","Kishibe","Makima","Kobeni",
  // Chainsaw Man - Abilities
  "Chainsaw Transformation","Devil Contract","Blood Manipulation","Enhanced Strength","Regeneration","Gun Use","Chainsaw Sword","Demon Detection","Aura Sense","Devil Hunt",

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

