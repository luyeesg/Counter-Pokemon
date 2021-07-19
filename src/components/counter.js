const getCounter = (toCounter) => {
    switch (toCounter) {
        case "normal":
            return "Fighting"
        case "fighting":
            return "Flying, Psychic, Fairy"
        case "poison":
            return "Ground, Psychic"
        case "ground":
            return "Water, Grass, Ice"
        case "rock":
            return "Water, Grass, Ice"
        case "bug":
            return "Flying, Rock, Fire"
        case "ghost":
            return "Ghost, Dark"
        case "steel":
            return "Fighting, Fire, Poison"
        case "fire":
            return "Ground, Rock, Water"
        case "water":
            return "Grass, Electric"
        case "grass":
            return "Flying, Poison, Bug, Fire, Ice"
        case "electric":
            return "Ground"
        case "psychic":
            return "Bug, Ghost, Dark"
        case "ice":
            return "Fighting, Rock, Steel, Fire"
        case "dragon":
            return "Ice, Dragon, Fairy"
        case "dark":
            return "Fighting, Bug, Fairy"
        case "fairy":
            return "Poison, Ghost, Dragon"
        default:
            return ""
    }
}

export {
    getCounter
}