// Diamond pattern

let n = Number(prompt("Enter number")); // the size of the diamond pattern
let pattern = '';

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    pattern += ' ';
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1) {
      pattern += 'o';
    } else {
      pattern += ' ';
    }
  }
  pattern += '\n';
}

for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      pattern += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        pattern += 'o';
      } else {
        pattern += ' ';
      }
    }
    pattern += '\n';
  }
  
  console.log(pattern);