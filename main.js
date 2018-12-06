var acc={

title:"Huzefa Malik",
bal:"860000",
currency:"Aus Dollar",
iban:"0010045587012210"

};

document.getElementById("title").innerHTML=acc.title;
document.getElementById("balance").innerHTML=acc.bal;
document.getElementById("currency").innerHTML=acc.currency;
document.getElementById("IBAN").innerHTML=acc.iban;
function deposit(e)
{
	if(e.keyCode=='13')
	{	
		if(isNaN(e.key))
		{
			document.getElementById("deposit-msg").innerHTML='<p> Enter Valid Amount </p>';
		}
		var dep=document.getElementById("deposit").value;
	}
}


