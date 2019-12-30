var fs=require("fs");
var display=function()
{
    console.log("file written successfully");
    fs.readFile("sample.txt","utf8",reading)
}
var reading=function(err,data)
{
    console.log("reading file");
    if(err)
    {
        console.error(err);
    }
    console.log(data);
}
fs.writeFile("sample.txt","Hello Written to sample.txt",display);

