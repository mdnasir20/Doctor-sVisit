
function medicaleSuport (length){
	
var length = parseInt(length)

	if (length <= 10){
		return 8;}
	else if (length <= 20){
	return 11.00;}
	else if (length <= 30){
	return 13.50;}
	else if (length <= 45){
	return 16.50;}
else if (length > 45){
	return 21;}

}
var officeFee = 15.90;

function customerFees(paidFee){
	 
	
return (paidFee + officeFee);
	
}
	 
function calculate() {
		
		var lengthOfVisits = Number(document.getElementById("length").value);
		var fees = Number(document.getElementById("doctorsFee").value);
	 
		var myFee = medicaleSuport(lengthOfVisits).toFixed(2);
		var pays = customerFees(fees - myFee).toFixed(2);
	
		document.getElementById("answer").innerHTML = "Doctor's Fee is " + fees.toFixed(2) + " euros." + "<br/>" + "Kela reimbursement is " + myFee + " euros." + "<br/>" + "Office Fee is " + officeFee.toFixed(2) +" euros." + "<br/>" + " Customer needs to pay "+ pays + " euros.";
}
  
