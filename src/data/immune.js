//Type Immune

const Immune = (type, type2) => {
  if (type === "grass" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "grass" && type2 === "dark") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Psychic</span>
      </>
    );
  } else if (type === "fire" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "fire" && type2 === "ground") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
      </>
    );
  } else if (type === "fire" && type2 === "steel") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (type === "water" && type2 === "fairy") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Dragon</span>
      </>
    );
  } else if (type === "water" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "water" && type2 === "ground") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
      </>
    );
  } else if (type === "water" && type2 === "dark") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Psychic</span>
      </>
    );
  } else if (type === "water" && type2 === "steel") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (type === "bug" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "bug" && type2 === "steel") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (type === "bug" && type2 === "ground") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
      </>
    );
  } else if (type === "bug" && type2 === "ghost") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Normal</span>
        <span className="show-types">Fighting</span>
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
  } else if (type === "normal" && type2 === "psychic") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ghost</span>
      </>
    );
  } else if (type === "normal" && type2 === "water") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
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
  } else if (type === "poison" && type2 === "dark") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Psychic</span>
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
  } else if (type === "electric" && type2 === "ghost") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Normal</span>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "ground" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
      </>
    );
  } else if (type === "ground" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (
    (type === "ground" && type2 === "dragon") ||
    (type === "dragon" && type2 === "ground")
  ) {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
      </>
    );
  } else if (type === "ground" && type2 === "psychic") {
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
  } else if (type === "fairy" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Dragon</span>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "psychic" && type2 === "fairy") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Dragon</span>
      </>
    );
  } else if (type === "psychic" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
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
  } else if (type === "rock" && type2 === "dark") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Psychic</span>
      </>
    );
  } else if (type === "ghost" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Normal</span>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "ghost" && type2 === "poison") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Normal</span>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "ghost" && type2 === "dragon") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Normal</span>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "ghost" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Normal</span>
        <span className="show-types">Ground</span>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "ice" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "ice" && type2 === "ground") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
      </>
    );
  } else if (type === "ice" && type2 === "ghost") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Normal</span>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "dragon" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "dark" && type2 === "") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Psychic</span>
      </>
    );
  } else if (type === "dark" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Psychic</span>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "dark" && type2 === "ice") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Psychic</span>
      </>
    );
  } else if (type === "dark" && type2 === "fire") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Psychic</span>
      </>
    );
  } else if (
    (type === "dark" && type2 === "ghost") ||
    (type === "ghost" && type2 === "dark")
  ) {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Normal</span>
        <span className="show-types">Psychic</span>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "steel" && type2 === "ground") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Electric</span>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (type === "steel" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Poison</span>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "steel" && type2 === "fairy") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Dragon</span>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (
    (type === "steel" && type2 === "rock") ||
    (type === "rock" && type2 === "steel")
  ) {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (type === "steel" && type2 === "psychic") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (type === "steel" && type2 === "dragon") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Poison</span>
      </>
    );
  } else if (type === "fighting" && type2 === "steel") {
    return (
      <>
        <h3 className="show-effectiness">Immune</h3>
        <span className="show-types">Poison</span>
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

export { Immune };
