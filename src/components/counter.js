const getCounter = (toCounter) => {
    switch (toCounter) {
        case "normal":
            return "fighting"
        case "fighting":
            return "flying, psychic, fairy"
        case "poison":
            return "ground, psychic"
        case "ground":
            return "water, grass, ice"
        case "rock":
            return "water, grass, ice"
        case "bug":
            return "flying, rock, fire"
        case "ghost":
            return "ghost, dark"
        case "steel":
            return "fighting, fire, poison"
        case "fire":
            return "ground, rock, water"
        case "water":
            return "grass, electric"
        case "grass":
            return "flying, poison, bug, fire, ice"
        case "electric":
            return "ground"
        case "psychic":
            return "bug, ghost, dark"
        case "ice":
            return "fighting, rock, steel, fire"
        case "dragon":
            return "ice, dragon, fairy"
        case "dark":
            return "fighting, bug, fairy"
        case "fairy":
            return "poison, ghost, dragon"
        default:
            return ""
    }
}

export {
    getCounter
}