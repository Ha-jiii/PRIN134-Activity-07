// 1
class Player {
    constructor(name, team) {
        this.name = name;
        this.team = team;
        this.score = 0; // Fixed: Initialize score property
    }
}

// 2
let players = [
    new Player("James", "Lakers"),
    new Player("Curry", "Warriors"),
    new Player("Jordan", "Bulls"),
    new Player("Bryant", "Lakers"),
    new Player("Durant", "Nets")
];

// 3
function randomizer() {
    return Math.random() > 0.5;
}

// 4
function startRound(players, attempts = 5) {
    players.forEach(player => {
        player.score = 0; 
        for (let i = 0; i < attempts; i++) {
            if (randomizer()) {
                player.score++;
            }
        }
    });
}

// 5
function rankingDisplay(players) {
    players.sort((a, b) => b.score - a.score);
    console.log("\n" + String.fromCodePoint(0x1F3C6) + " Rankings after this round:");
    players.forEach((player, index) => {
        console.log(`${index + 1}. ${player.name} - ${player.score} points`);
    });
}

//6
function tieBreaker(players, round = 1) {
    let highestScore = players[0].score;
    let tiedPlayers = players.filter(player => player.score === highestScore);

    if (tiedPlayers.length === 1) {
        console.log(`\n${String.fromCodePoint(0x1F3C6)} The champion is ${tiedPlayers[0].name} with ${tiedPlayers[0].score} points!`);
        return;
    }

    console.log(`\n${String.fromCodePoint(0x1F525)} Tie-breaker needed between: ` + tiedPlayers.map(p => p.name).join(", "));
    console.log(`\n${String.fromCodePoint(0x1F3C0)} Round ${round} Begins!`);
    startRound(tiedPlayers, 3, true);
    tiedPlayers.forEach(player => console.log(`${player.name} scored ${player.score} successful shots.`));
    rankingDisplay(tiedPlayers);
    tieBreaker(tiedPlayers, round + 1);
}

//start
startRound(players);
rankingDisplay(players);
tieBreaker(players, 2);  