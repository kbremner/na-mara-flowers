const fastGlob = require("fast-glob");
const fs = require("fs").promises;

module.exports = async function (pattern) {
  const result = await fastGlob(pattern, { cwd: "_includes" });
  const fileContents = await Promise.all(
    result.map(async (path) => {
      const contents = await fs.readFile(`_includes/${path}`, "utf8");
      return `/*! _assets/${path} */${contents}`;
    })
  );
  return fileContents.join("");
};
