var sum1=0;
var sum2=0;
var j=0;
for(var i=0; i<=1000; i++)
{
	sum1+=i;
}
console.log("Sum of 1000 no's using for-loop is: "+sum1);

while(j <= 1000)
{
	sum2+=j;
	j++;
}
console.log("Sum of 1000 no's using while-loop is : "+sum2);
