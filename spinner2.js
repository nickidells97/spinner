let delay = 100;

let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r| ', '\r/   '];

for (let spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay);
  delay += 200;
}