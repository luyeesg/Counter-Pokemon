// Types Super Effective 

const superEffective = (type, type2) => {
  if (type === "grass" && type2 === "poison") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "fire" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "fire" && "flying") {
    return (
      <>
        <span className="show-types show-rock">Rock</span>
      </>
    );
  } else if (type === "water" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "water" && type2 === "fighting") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "bug" && type2 === "flying") {
    return (
      <>
        <span className="show-types show-rock">Rock</span>
      </>
    );
  } else if (type === "bug" && type2 === "poison") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "bug" && type2 === "grass") {
    return (
      <>
        <span className="show-types show-fire">Fire</span>
        <span className="show-types show-flying">Flying</span>
      </>
    );
  } else if (type === "normal" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "normal" && type2 === "flying") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "normal" && type2 === "fairy") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "poison" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "poison" && type2 === "ground") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "poison" && type2 === "flying") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "electric" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "ground" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "fairy" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "fighting" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "psychic" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  }
};

// Types Effective 

const Effective = (type, type2) => {
  if (type === "grass" && type2 === "poison") {
    return (
      <>
        <span className="show-types show-fire">Fire</span>
        <span className="show-types show-flying">Flying</span>
        <span className="show-types show-psychic">Psychic</span>
        <span className="show-types show-ice">Ice</span>
      </>
    );
  } else if (type === "fire" && type2 === "") {
    return (
      <>
        <span className="show-types show-water">Water</span>
        <span className="show-types show-ground">Ground</span>
        <span className="show-types show-rock">Rock</span>
      </>
    );
  } else if (type === "fire" && type2 === "flying") {
    return (
      <>
        <span className="show-types show-electric">Electric</span>
        <span className="show-types show-water">Water</span>
      </>
    );
  } else if (type === "water" && type2 === "") {
    return (
      <>
        <span className="show-types show-electric">Electric</span>
        <span className="show-types show-grass">Grass</span>
      </>
    );
  } else if (type === "water" && type2 === "fighting") {
    return (
      <>
        <span className="show-types show-electric">Electric</span>
        <span className="show-types show-grass">Grass</span>
        <span className="show-types show-flying">Flying</span>
        <span className="show-types show-fairy">Fairy</span>
        <span className="show-types show-psychic">Psychic</span>
      </>
    );
  } else if (type === "bug" && type2 === "") {
    return (
      <>
        <span className="show-types show-fire">Fire</span>
        <span className="show-types show-flying">Flying</span>
        <span className="show-types show-rock">Rock</span>
      </>
    );
  } else if (type === "bug" && type2 === "flying") {
    return (
      <>
        <span className="show-types show-electric">Electric</span>
        <span className="show-types show-fire">Fire</span>
        <span className="show-types show-flying">Flying</span>
        <span className="show-types show-ice">Ice</span>
      </>
    );
  } else if (type === "bug" && type2 === "poison") {
    return (
      <>
        <span className="show-types show-fire">Fire</span>
        <span className="show-types show-flying">Flying</span>
        <span className="show-types show-psychic">Psychic</span>
        <span className="show-types show-rock">Rock</span>
      </>
    );
  } else if (type === "bug" && type2 === "grass") {
    return (
      <>
        <span className="show-types show-poison">Poison</span>
        <span className="show-types show-ice">Ice</span>
        <span className="show-types show-bug">Bug</span>
        <span className="show-types show-rock">Rock</span>
      </>
    );
  } else if (type === "normal" && type2 === "") {
    return (
      <>
        <span className="show-types show-fighting">Fighting</span>
      </>
    );
  } else if (type === "normal" && type2 === "flying") {
    return (
      <>
        <span className="show-types show-electric">Electric</span>
        <span className="show-types show-ice">Ice</span>
        <span className="show-types show-rock">Rock</span>
      </>
    );
  } else if (type === "normal" && type2 === "fairy") {
    return (
      <>
        <span className="show-types show-steel">Steel</span>
        <span className="show-types show-poison">Poison</span>
      </>
    );
  } else if (type === "poison" && type2 === "") {
    return (
      <>
        <span className="show-types show-psychic">Psychic</span>
        <span className="show-types show-ground">Ground</span>
      </>
    );
  } else if (type === "poison" && type2 === "ground") {
    return (
      <>
        <span className="show-types show-water">Water</span>
        <span className="show-types show-psychic">Psychic</span>
        <span className="show-types show-ice">Ice</span>
        <span className="show-types show-ground">Ground</span>
      </>
    );
  } else if (type === "poison" && type2 === "flying") {
    return (
      <>
        <span className="show-types show-electric">Electric</span>
        <span className="show-types show-psychic">Psychic</span>
        <span className="show-types show-ice">Ice</span>
        <span className="show-types show-rock">Rock</span>
      </>
    );
  } else if (type === "electric" && type2 === "") {
    return (
      <>
        <span className="show-types show-ground">Ground</span>
      </>
    );
  } else if (type === "ground" && type2 === "") {
    return (
      <>
        <span className="show-types show-grass">Grass</span>
        <span className="show-types show-water">Water</span>
        <span className="show-types show-ice">Ice</span>
      </>
    );
  } else if (type === "fairy" && type2 === "") {
    return (
      <>
        <span className="show-types show-steel">Steel</span>
        <span className="show-types show-poison">Poison</span>
      </>
    );
  } else if (type === "fighting" && type2 === "") {
    return (
      <>
        <span className="show-types show-flying">Flying</span>
        <span className="show-types show-fairy">Fairy</span>
        <span className="show-types show-psychic">Psychic</span>
      </>
    );
  } else if (type === "psychic" && type2 === "") {
    return (
      <>
        <span className="show-types show-dark">Dark</span>
        <span className="show-types show-bug">Bug</span>
        <span className="show-types show-ghost">Ghost</span>
      </>
    );
  } else {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  }
};

//Type Immute

const Immute = (type, type2) => {
  if (type === "grass" && type2 === "poison") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "fire" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "fire" && "flying") {
    return (
      <>
        <span className="show-types show-ground">Ground</span>
      </>
    );
  } else if (type === "water" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "water" && type2 === "fighting") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "bug" && type2 === "flying") {
    return (
      <>
        <span className="show-types show-ground">Ground</span>
      </>
    );
  } else if (type === "bug" && type2 === "poison") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "bug" && type2 === "grass") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "normal" && type2 === "") {
    return (
      <>
        <span className="show-types show-ghost">Ghost</span>
      </>
    );
  } else if (type === "normal" && type2 === "flying") {
    return (
      <>
        <span className="show-types show-ground">Ground</span>
        <span className="show-types show-ghost">Ghost</span>
      </>
    );
  } else if (type === "normal" && type2 === "fairy") {
    return (
      <>
        <span className="show-types show-dragon">Dragon</span>
        <span className="show-types show-ghost">Ghost</span>
      </>
    );
  } else if (type === "poison" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "poison" && type2 === "ground") {
    return (
      <>
        <span className="show-types show-electric">Electric</span>
      </>
    );
  } else if (type === "poison" && type2 === "flying") {
    return (
      <>
        <span className="show-types show-ground">Ground</span>
      </>
    );
  } else if (type === "electric" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "ground" && type2 === "") {
    return (
      <>
        <span className="show-types show-electric">Electric</span>
      </>
    );
  } else if (type === "fairy" && type2 === "") {
    return (
      <>
        <span className="show-types show-dragon">Dragon</span>
      </>
    );
  } else if (type === "fighting" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else if (type === "psychic" && type2 === "") {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  } else {
    return (
      <>
        <span className="show-types black">Nothing</span>
      </>
    );
  }
};

export { superEffective, Effective, Immute };
