console.log("Welcome to shoppingcart");
var shopping=function()
{
    var item="";
    var items=[];
    var addtocart=function(it)
    {   
        var i=0;
        items[i]=it;
        i++;
        console.log("item added successfully");
    }

    var showcart=function(rt)
    {
       items.forEach(data)
    }
    
    var data=function(dt)
    {
        console.log(dt);
    }
    return{
        addtocart:addtocart,
        showcart:showcart
    }
}
var sc=new shopping();
sc.addtocart("onkar");
sc.addtocart("palak");
sc.addtocart("sagar");
sc.showcart();