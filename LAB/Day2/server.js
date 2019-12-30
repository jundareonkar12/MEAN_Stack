var http=require("http");
var onCreateServer=function(request,response)
{
    console.log("new request");
 var data= {
     name:"onkar",
     age:45
     }
     var result=JSON.stringify(data);
     response.writeHead(200,{'content-type':'application/json'})
     response.write(result);
     response.end();
     console.log("request served");
}
var server=http.createServer(onCreateServer);
server.listen(7070);
console.log("server started on 'http://172.0.0.1:7070'");
