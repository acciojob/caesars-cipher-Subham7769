function rot13(encodedStr) {
  const lookup = {
    A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V", J: "W", K: "X", L: "Y", M: "Z",
    N: "A", O: "B", P: "C", Q: "D", R: "E", S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M"
  };
  
  let decodedStr = "";

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    if (lookup[char] !== undefined) {
      decodedStr += lookup[char];
    } else {
      // Character is not in the lookup table, keep it as is
      decodedStr += char;
    }
  }

  return decodedStr;
}

// Do not change this line
window.rot13 = rot13;
