console.log("start of JS");
var display=function(){
    console.log("Hello from diplay()");
}
var show=function()
{
    console.log("Hello from show()");
}
setInterval(()=>{
    console.log("set interval acts as multithreaded program but JS is Single threded threads are created by nodejs using thread pool");
},3000);
setInterval(function(){
    console.log("From Anonymus function");
},3000);
setInterval(()=>{
    console.log("From Lamda Expression");
},3000);
setInterval(display,2000);
setInterval(show,3000);