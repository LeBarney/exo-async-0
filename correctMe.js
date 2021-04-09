const fsPromises = require("fs/promises");

const myReadFile = async () => {
try {
  const p1 = fsPromises.readFile("hello.txt", "utf-8");
  console.log(p1);
  let txt1 = await p1
  console.log(p1)
} catch (e) {
  console.log(e.message);
}
}

myReadFile()