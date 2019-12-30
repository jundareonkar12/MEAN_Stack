var  fs=require("fs");

var onRead=function(err, data){
    if (err) { return console.error(err); }

    console.log("data retrived from file");
    console.log(data);
    console.log("Thank you very much");
}

var onWrite=function(){
    console.log("File is written successfully......");

    fs.readFile('product.txt','utf8',onRead);

}

fs.writeFile('product.txt','Apple iPhone 11 pro, latest model of apple Smart Phone',onWrite);

console.log(" file is reading demo.....");
