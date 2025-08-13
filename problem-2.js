function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let result = str.replace(/\s+/g, "").toUpperCase();

  return result;
}

