// Types Super Effective

const superEffective = (type, type2) => {
  if (
    (type === "grass" && type2 === "psychic") ||
    (type === "psychic" && type2 === "grass")
  ) {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Bug</span>
      </>
    );
  } else if (type === "grass" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Ice</span>
      </>
    );
  } else if (type === "grass" && type2 === "dark") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Bug</span>
      </>
    );
  } else if (type === "grass" && type2 === "fighting") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Flying</span>
      </>
    );
  } else if (type === "grass" && type2 === "ice") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Fire</span>
      </>
    );
  } else if (type === "fire" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "fire" && type2 === "rock") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Water</span>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "fire" && type2 === "ground") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "fire" && type2 === "steel") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Ground</span>
      </>
    );
  } else if (type === "water" && type2 === "ground") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Grass</span>
      </>
    );
  } else if (type === "water" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Electric</span>
      </>
    );
  } else if (type === "bug" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Rock</span>
      </>
    );
  } else if (type === "bug" && type2 === "steel") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Fire</span>
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
  } else if (type === "bug" && type2 === "fighting") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Flying</span>
      </>
    );
  } else if (type === "ground" && type2 === "flying") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Ice</span>
      </>
    );
  } else if (
    (type === "ground" && type2 === "dragon") ||
    (type === "dragon" && type2 === "ground")
  ) {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Ice</span>
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
  } else if (
    (type === "rock" && type2 === "water") ||
    (type === "water" && type2 === "rock")
  ) {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Grass</span>
      </>
    );
  } else if (type === "rock" && type2 === "dark") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Fighting</span>
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
  } else if (type === "dark" && type2 === "ice") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (
    (type === "steel" && type2 === "rock") ||
    (type === "rock" && type2 === "steel")
  ) {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Ground</span>
        <span className="show-types">Fighting</span>
      </>
    );
  } else if (type === "poison" && type2 === "fighting") {
    return (
      <>
        <h3 className="show-effectiness">Super Effective</h3>
        <span className="show-types">Psychic</span>
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

export { superEffective };
