const axios = require("axios");
const fsPromises = require("fs/promises");

const main = async () => {
  try {
    const response = await axios.get(process.argv[2]);
    await fsPromises.writeFile("index.html", response.data); // response.data est une string qui est la page html
    console.log(response.headers)
    const stats = await fsPromises.stat("index.html")
    console.log(`index.html pèse ${stats.size} bytes`)
  
  } catch (e) {
    console.log(e.message);
  }
};

main();
