// by normal fn declaration

let count = 0;
/*
function increaseCount() {
    count+=1;
    document.getElementById("mylabel").innerHTML = count;
}

function decreaseCount() {
    count-=1;
    document.getElementById("mylabel").innerHTML = count;
}
*/

 document.getElementById("increase").onclick = function() {
    count+=1;
    document.getElementById("mylabel").innerHTML = count;
 }
  document.getElementById("decrease").onclick = function() {
    count-=1;
    document.getElementById("mylabel").innerHTML = count;
 }