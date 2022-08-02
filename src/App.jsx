import { useState } from "react";
import { meleeFumble } from "./tables/meleeFumble";
import { spellFumble } from "./tables/spellFumble";
import { rangedFumble } from "./tables/rangedFumble";
import { rollDice } from "./utils/dice";
import "./App.css";

const generateTable = (type = "melee") => {
    switch (type) {
        case "spell":
            return spellFumble;
        case "ranged":
            return rangedFumble;
        default:
            return meleeFumble;
    }
};

function App() {
    const [result, setResult] = useState({ roll: 0, outcome: {}});

    // melee, ranged, spell
    const [type, setType] = useState("melee");

    const handleOnClick = () => {
        let table = generateTable(type);
        let result = {};
        
        result.roll = rollDice(20);
        result.outcome = table[result.roll];

        setResult(result);
    };

    const handleChangeType = (e) => {
        setType(e.currentTarget.value);
    };

    return (
        <div className="App">
            <section>
                <button onClick={handleChangeType} value="melee" className={type === "melee" ? "active" : ""}>Melee</button>
                <button onClick={handleChangeType} value="ranged" className={type === "ranged" ? "active" : ""}>Ranged</button>
                <button onClick={handleChangeType} value="spell" className={type === "spell" ? "active" : ""}>Spell</button>
            </section>

            <h1>{result.roll}</h1>
            <h3>{result.outcome.label}</h3>
            <p>{result.outcome.description}</p>
            <button onClick={handleOnClick}>Roll</button>
        </div>
    );
}

export default App;
