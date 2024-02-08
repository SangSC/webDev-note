console.log("使用 let:");
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("let 迴圈內的 j:", j);
  }, 1000);
}
console.log("let 迴圈外的 j:", j);
