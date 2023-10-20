const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = players.map((player, index) => {
    return {
      name: player,
      image: `images/super-${index + 1}.png`,
      strength: getRandomStrength(),
      type: getRandom(),
    };
  });

  return detailedPlayers;
};

var type = ["hero", "villain"];
function getRandom() {
  return type[Math.floor(Math.random() * type.length)];
}

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

// Build player template
const buildPlayers = (players, type) => {
  const filteredPlayers = players.filter((player) => player.type === type);
  const playerTemplates = filteredPlayers.map((player) => {
    return `<div class="player">
              <img src="${player.image}">
              <div class="name">${player.name}</div>
              <div class="strength">${player.strength}</div>
            </div>`;
  });

  const fragment = playerTemplates.join("");
  return fragment;
};

// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
