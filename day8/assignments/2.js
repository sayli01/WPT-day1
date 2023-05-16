let n=5;
let pattern = "";
for(let i=0;i<n;i++) {
    pattern = pattern + "*";
    console.log(pattern);
}

console.log("-------------------------------------------------------")

let pattern1 = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    pattern1 += "*";
  }
  pattern1 += "\n";
}
console.log(pattern1);