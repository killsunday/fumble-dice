const shuffleTable = (array) => {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

export const generateDiceTable = (sides) => {
    let diceTable = Array.from(Array(sides * sides).keys());
    diceTable = diceTable.map((item) => (item % sides) + 1);

    return shuffleTable(diceTable);
};

export const rollDice = (sides) => {
    const diceTable = generateDiceTable(sides);

    return diceTable[Math.floor(Math.random() * (sides * sides))];
};
