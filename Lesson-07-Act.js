class Player {
    constructor(name, team, score) {
        this.name = name;
        this.score = score;
        this.team = team;
    }
}

function rankPlayers(players) {
    return players.sort((a, b) => b.score - a.score);
}

function tieBreaker(players) {
    console.log("\n" + String.fromCodePoint(0x1F525) + " Tiebreaker needed between: " + players.map(p => p.name).join(", ")+ "\n");
    players.forEach(player => player.score = 0);
    
    console.log(String.fromCodePoint(0x1F3C0) + " Round 2 Begins!");
    players.forEach(player => {
        if (player.name === "James") {
            player.score = 1;
            console.log(`${player.name} scored 1 successful shots.`);
        } else if (player.name === "Curry") {
            player.score = 3;
            console.log(`${player.name} scored 3 successful shots.`);
        }
    });
    
    return rankPlayers(players);
}

function playGame() {
    let players = [
        new Player("James", "Lakers", 3),
        new Player("Curry", "Warriors", 3),
        new Player("Jordan", "Bulls", 2),
        new Player("Bryant", "Lakers", 1),
        new Player("Durant", "Nets", 1)
    ];

    let rankedPlayers = rankPlayers(players);
    console.log(String.fromCodePoint(0x1F3C6) + " Rankings after this round:");
    rankedPlayers.forEach((p, index) => console.log(`${index + 1}. ${p.name} - ${p.score} points`));
    
    let highestScore = rankedPlayers[0].score;
    let tiedPlayers = rankedPlayers.filter(p => p.score === highestScore);
    
    if (tiedPlayers.length > 1) {
        tiedPlayers = tieBreaker(tiedPlayers);
        highestScore = tiedPlayers[0].score;
    }
    
    console.log("\n" + String.fromCodePoint(0x1F3C6) + " Rankings after this round:");
    tiedPlayers.forEach((p, index) => console.log(`${index + 1}. ${p.name} - ${p.score} points`));
    
    console.log(`\n${String.fromCodePoint(0x1F3C6)} The champion is ${tiedPlayers[0].name} with ${tiedPlayers[0].score} points!`);
}

playGame();
