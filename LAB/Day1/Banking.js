console.log("hello to banking");

var Bank=function(){
var balance=2000;//var written or not doestnt matter
var deposit=function(amt)
{
   console.log("before balance:"+balance)
   balance+=amt;
   console.log("after deposit:"+balance)
}
var withdraw=function(amt){
    console.log("before balance:"+balance)
   balance-=amt;
   console.log("after withdraw:"+balance)
}
return{
    deposit:deposit,
    withdraw:withdraw
}
}
var bk=new Bank();
bk.deposit(3000);
bk.withdraw(500);