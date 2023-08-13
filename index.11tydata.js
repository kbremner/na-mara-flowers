const client = require("./_lib/contentful");

module.exports = async function () {
  console.log("Fetching main page content...");
  const result = await client.getEntries({
    content_type: "mainPage",
    limit: 1,
  });
  console.log("Main page content fetched");
  return result.items[0].fields;
};
