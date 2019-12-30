var display=function(){
    console.log("I Am called again and again after 3 sec");
    console.log("set interval internally uses delegates");
}
setInterval(display,3000);
console.log("At end of file");