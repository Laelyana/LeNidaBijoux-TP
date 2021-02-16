
let Pictures {

  init: function () {

let general = document.getElementById("general");
let bis = document.getElementById("bis");
let deux = document.getElementById("deux");
let trois = document.getElementById("trois");

bis.addEventListener("click", Pictures.bisF);
deux.addEventListener("click", Pictures.deuxF);
trois.addEventListener("click", Pictures.troisF);
  
  function bisF() {
    general.className = bis;
  };
  
  function deuxF() {
    general.className = deux;
  };
  
  function troisF() {
    general.className = trois;
  };
}
}

document.addEventListener('DOMContentLoaded', app.init);


export default Pictures;
