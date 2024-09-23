function donationCalculation(donationId,donatedId){
    
    const balanceElement = document.getElementById('balance');
    const balance = parseFloat(document.getElementById('balance').innerHTML);

    const donationElement = document.getElementById(donatedId);
    const donationAmt = document.getElementById(donationId).value;
    const donatedAmt = parseFloat(document.getElementById(donatedId).innerHTML);

    if(isNaN(donationAmt)){
        alert('Inputed value is not a number!');
    }else{

        balanceElement.innerHTML = balance - parseFloat(donationAmt);
        donationElement.innerHTML = parseFloat(donationAmt) + donatedAmt;
        // const modal = document.getElementById('donate-modal');
        // modal.showModal(); 
    }
    
    
}