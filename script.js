const getmemebtn = document.getElementById("generate-meme-btn");
const memetitle = document.getElementById("meme-title");
const memeimg = document.getElementById("meme-img");
const memeauthor = document.getElementById("meme-author");

function updatedetails(url, title, author) {
  memeimg.setAttribute("src", url);
  memetitle.innerHTML = title;
  memeauthor.innerHTML = `Meme By: ${author}`;
}
const generateMeme = () => {
  const g = fetch("https://meme-api.com/gimme/wholesomememes");
  const h = g.then((response) => response.json());
  const k = h.then((data) => {
    updatedetails(data.url, data.title, data.author);
  });
};
getmemebtn.addEventListener("click", generateMeme);
