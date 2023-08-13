function clearAll() {}

/**
 * TODO:
 * - Show a random Meme in the correct location
 * - Never show more than 1 meme at a time
 */
function showMeme() {
  // Value is a string representing image URL
  const randomMemeUrl = getRandomData("memes");
  console.log(randomMemeUrl);
}
