import { generateDiceTable, rollDice } from "./dice";

describe("Dice Utilities", () => {
    it("can generate a dice table", () => {
        const diceTable = generateDiceTable(6);

        expect(diceTable.length).toEqual(36);
    });

    it("can get a valid roll", () => {
        const rollValue = rollDice(6);

        expect(rollValue).toBeGreaterThanOrEqual(1);
        expect(rollValue).toBeLessThanOrEqual(6);
    });

    it("can get a valid d20 roll", () => {
        const rollValue = rollDice(20);

        expect(rollValue).toBeGreaterThanOrEqual(1);
        expect(rollValue).toBeLessThanOrEqual(20);
    });
});
