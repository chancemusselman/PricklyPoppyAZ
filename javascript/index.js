$(document).ready(function() {
  console.log("index.js linked");

  let treeHuggerImgs = function() {
    console.log("treehuggerimg fuction ran");
    $(".treehuggerImg").html(
      '<img id="treehuggerImg" class="shadow" src="./images/TreeHugger1Webtindy.png"></img>'
    );
  };

  treeHuggerImgs();
});
