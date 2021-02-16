
let img = {

function pictures()

{let general = document.getElementById("general");
let bis = document.getElementById("bis");
let deux = document.getElementById("deux");
let trois = document.getElementById("trois");

bis.addEventListener("click", img.bisF);
deux.addEventListener("click", img.deuxF);
trois.addEventListener("click", img.troisF);
  
  function bisF() {
    general.className = bis;
    console.log("click");
  };
  
  function deuxF() {
    general.className = deux;
  };
  
  function troisF() {
    general.className = trois;
  };}
}
export default img.pictures;
