
let h3=document.querySelector("h3");
let score=null;
let gameSeq = [];
let userSeq = [];
let arr = ["red", "green", "yellow", "blue"]
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let level = 0;
let start = false;
body.addEventListener("keypress", function () {
   if (start == false) {
      start = true;
      levelUp();
   }
})
 
function levelUp() {
   userSeq = [];
   level++;
   if(level>=10){
      
      h3.innerText=`you are genieous! score is${level}`;
       h3.classList.add("h3");
     
      }
   if(score>=level){
      h3.innerText=level;
   }
   h2.innerText = `level:${level}`;

   let randIdx = Math.floor(Math.random() * 4);
   let Randomval = arr[randIdx];
   let search = document.querySelector(`.${Randomval}`);
   gameSeq.push(Randomval);
   gameFlash(search);
}
 
function userFlash(userSearch) {
   userSearch.classList.add("usergold");
   setTimeout(() => {
      userSearch.classList.remove("usergold");
   }, 300);
}
 
function gameFlash(search) {
   search.classList.add("white");
   setTimeout(() => {
      search.classList.remove("white");
   }, 300);
   userPress()

}
 
function userPress() {
  
   body.addEventListener("click", userClick)
}
function userClick(event) {
   let userBtn = event.target.id;
   let userSearch = document.querySelector(`#${userBtn}`);
   userFlash(userSearch);

   userSeq.push(userBtn);
   check(userSeq.length - 1);
}

function check(idx) {
   if (gameSeq[idx] == userSeq[idx]) {
      if (gameSeq.length == userSeq.length) {
         setTimeout(() => {
            levelUp();
         }, 300)
      }
   } else {
      h2.innerHTML = `wrong! your score is <b> ${level}. </b> <br> try again by press any key to start `;
      body.classList.add("bgred");
      setTimeout(() => {
         body.classList.remove("bgred");
      },300)
     
      reset();
   }
}
function reset() {
   start = false;
   level = 0;
   gameSeq = [];
}
