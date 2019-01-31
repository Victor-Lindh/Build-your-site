
let body = ["body{","background-color: red;","font-size: 3rem;"," }","< >"];
console.log(body);
console.log(body.join(""));

document.getElementById("redbg").addEventListener('click', function(){
  document.body.style.backgroundColor = "red";
  return document.getElementById("text_val").value = "body{background-color: red;}";//Innehåll
});
document.getElementById("bluebg").addEventListener('click', function () {
  document.body.style.backgroundColor = "blue";
  return document.getElementById("text_val").value = "body{background-color: blue;}"; //Innehåll
});
document.getElementById("fontsize").addEventListener('click', function () {
  document.body.style.fontSize = "3rem";
  return document.getElementById("text_val").value +="body{font-size: 3rem;}";
});

let btn = document.getElementById("btn");
btn.addEventListener('click', function() {
  let ipt = document.getElementById("text_val").value;
  console.log(ipt);
  let file1 = new Blob([ipt], {type: "text/css; charset=utf-8}"});  //constructor([innehåll] , {typ: texts som html})
  let a = document.getElementById("a");
  a.href = URL.createObjectURL(file1); //href="blob:null/8c7a0f22-53b8-440a-99c9-480a3f5e5cf4"
  a.download = "style.css"; // "style.css"
  // htmlCreation(index);
}); 
// function htmlCreation(index) {
//   let file2 = new Blob([index],{ type: "text/html; charset=utf-8}"});
//   let a = document.getElementById("a");
//   a.href = URL.createObjectURL(file2); //href="blob:null/8c7a0f22-53b8-440a-99c9-480a3f5e5cf4"
//   a.download = "index.html"; 
// };

//(innehåll, "namn", "type")
// let index = "<p>Lorem ipsum</p>";
