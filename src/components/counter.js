// Types Super Effective

const superEffective = (type, type2) => {
  if (type === "grass" && type2 === "psychic") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Bug</span>
      </>
    );
  } else if (type === "fire" && "flying") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "bug" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "bug" && type2 === "grass") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Fire</span>
        <span className="show-types">Flying</span>
      </>
    );
  } else if (type === "electric" && type2 === "steel") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (
    (type === "rock" && type2 === "ground") ||
    (type === "ground" && type2 === "rock")
  ) {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Grass</span>
        <span className="show-types">Water</span>
      </>
    );
  } else if (type === "rock" && type2 === "water") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Grass</span>
      </>
    );
  } else if (type === "ice" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "dragon" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Ice</span>
      </>
    );
  } else {
    return (
      <>
        <span></span>
      </>
    );
  }
};

// Types Effective

const Effective = (type, type2) => {
  if (type === "grass" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Fire</span>
        <span className="show-types">Flying</span>
        <span className="show-types">Poison</span>
        <span className="show-types">Ice</span>
        <span className="show-types">Bug</span>
      </>
    );
  } else if (type === "grass" && type2 === "poison") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Fire</span>
        <span className="show-types">Flying</span>
        <span className="show-types">Psychic</span>
        <span className="show-types">Ice</span>
      </>
    );
  } else if (type === "grass" && type2 === "psychic") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Fire</span>
        <span className="show-types">Poison</span>
        <span className="show-types">Flying</span>
        <span className="show-types">Ice</span>
        <span className="show-types">Ghost</span>
      </>
    );
  } else if (type === "fire" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Water</span>
        <span className="show-types">Ground</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "fire" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Water</span>
      </>
    );
  } else if (type === "water" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Grass</span>
      </>
    );
  } else if (type === "water" && type2 === "fighting") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Grass</span>
        <span className="show-types">Flying</span>
        <span className="show-types">Fairy</span>
        <span className="show-types">Psychic</span>
      </>
    );
  } else if (type === "water" && type2 === "poison") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Psychic</span>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "water" && type2 === "psychic") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Grass</span>
        <span className="show-types">Dark</span>
        <span className="show-types">Bug</span>
        <span className="show-types">Ghost</span>
      </>
    );
  } else if (type === "water" && type2 === "ice") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Grass</span>
        <span className="show-types">Fighting</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "bug" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Fire</span>
        <span className="show-types">Flying</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "bug" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Fire</span>
        <span className="show-types">Flying</span>
        <span className="show-types">Ice</span>
      </>
    );
  } else if (type === "bug" && type2 === "poison") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Fire</span>
        <span className="show-types">Flying</span>
        <span className="show-types">Psychic</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "bug" && type2 === "grass") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Poison</span>
        <span className="show-types">Ice</span>
        <span className="show-types">Bug</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "normal" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "normal" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Ice</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "normal" && type2 === "fairy") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Steel</span>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (type === "poison" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Psychic</span>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "poison" && type2 === "ground") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Water</span>
        <span className="show-types">Psychic</span>
        <span className="show-types">Ice</span>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "poison" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Psychic</span>
        <span className="show-types">Ice</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "electric" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "electric" && type2 === "steel") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Fire</span>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "electric" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Ice</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "ground" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Grass</span>
        <span className="show-types">Water</span>
        <span className="show-types">Ice</span>
      </>
    );
  } else if (type === "fairy" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Steel</span>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (type === "fighting" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Flying</span>
        <span className="show-types">Fairy</span>
        <span className="show-types">Psychic</span>
      </>
    );
  } else if (type === "psychic" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Dark</span>
        <span className="show-types">Bug</span>
        <span className="show-types">Ghost</span>
      </>
    );
  } else if (type === "psychic" && type2 === "fairy") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Steel</span>
        <span className="show-types">Poison</span>
        <span className="show-types">Ghost</span>
      </>
    );
  } else if (
    (type === "rock" && type2 === "ground") ||
    (type === "ground" && type2 === "rock")
  ) {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Steel</span>
        <span className="show-types">Ice</span>
        <span className="show-types">Ground</span>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "rock" && type2 === "water") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Fighting</span>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "rock" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Steel</span>
        <span className="show-types">Water</span>
        <span className="show-types">Ice</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "ghost" && type2 === "poison") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Dark</span>
        <span className="show-types">Psychic</span>
        <span className="show-types">Ground</span>
        <span className="show-types">Ghost</span>
      </>
    );
  } else if (type === "ice" && type2 === "psychic") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Steel</span>
        <span className="show-types">Fire</span>
        <span className="show-types">Dark</span>
        <span className="show-types">Bug</span>
        <span className="show-types">Ghost</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "ice" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Steel</span>
        <span className="show-types">Fire</span>
      </>
    );
  } else if (type === "dragon" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Dragon</span>
        <span className="show-types">Fairy</span>
        <span className="show-types">Ice</span>
      </>
    );
  } else if (type === "dragon" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Effective</h3>
        <span className="show-types">Dragon</span>
        <span className="show-types">Fairy</span>
        <span className="show-types">Rock</span>
      </>
    );
  } else {
    return (
      <>
        <span></span>
      </>
    );
  }
};

//Type Immute

const Immune = (type, type2) => {
  if (type === "fire" && "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "bug" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "normal" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ghost</span>
      </>
    );
  } else if (type === "normal" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
        <span className="show-types">Ghost</span>
      </>
    );
  } else if (type === "normal" && type2 === "fairy") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Dragon</span>
        <span className="show-types">Ghost</span>
      </>
    );
  } else if (type === "poison" && type2 === "ground") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
      </>
    );
  } else if (type === "poison" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "electric" && type2 === "steel") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (type === "electric" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "ground" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
      </>
    );
  } else if (type === "fairy" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Dragon</span>
      </>
    );
  } else if (type === "psychic" && type2 === "fairy") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Dragon</span>
      </>
    );
  } else if (
    (type === "rock" && type2 === "ground") ||
    (type === "ground" && type2 === "rock")
  ) {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
      </>
    );
  } else if (type === "rock" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "ghost" && type2 === "poison") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Normal</span>
        <span className="show-types">Figthing</span>
      </>
    );
  } else if (type === "ice" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "dragon" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else {
    return (
      <>
        <span></span>
      </>
    );
  }
};

export { superEffective, Effective, Immute };
