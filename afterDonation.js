function donationCalculation(donationId,donatedId,donationHeadID){
    
    const balanceElement = document.getElementById('balance');
    const balance = parseFloat(document.getElementById('balance').innerHTML);

    const donationElement = document.getElementById(donatedId);
    const donationAmt = document.getElementById(donationId).value;
    const donatedAmt = parseFloat(document.getElementById(donatedId).innerHTML);

    const donationTxt = document.getElementById(donationHeadID).innerHTML;
    const donationAmount = parseFloat(donationAmt);

    if(isNaN(donationAmt) || !donationAmt){
        alert('Caution!! Inputed value is not a number!');
    }else if(donationAmount<=0){
        alert('Sorry, Your amount is too low!');
    }else if(donationAmount>balance){
        alert('Sorry, Your balance is not enough!');
    }
    else{
        
        balanceElement.innerHTML = balance - donationAmount;
        donationElement.innerHTML = donationAmount + donatedAmt;

        const historydiv = document.createElement('div');
        historydiv.className = 'w-full p-4 flex flex-col justify-center items-start border rounded-lg';

        const newP = document.createElement('p');
        newP.className = 'text-sm font-bold mb-5';
        newP.textContent = donationAmount + ' Tk. Donated for ' + donationTxt;

        const dateP = document.createElement('p');
        dateP.className = 'text-sm ml-2';
        dateP.textContent = 'Date: ' + new Date();

        const parentDiv = document.getElementById('all-history');

        historydiv.appendChild(newP);
        historydiv.appendChild(dateP);

        parentDiv.appendChild(historydiv);

        const modalMsgElement = document.getElementById('modal-success-amount');        
        modalMsgElement.innerHTML = donationAmount + ' Tk Successfully.';

        const modal = document.getElementById('donate-modal');
        modal.showModal(); 

        document.getElementById(donationId).value = '';
    }
    
    
}