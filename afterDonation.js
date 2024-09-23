function donationCalculation(donationId,donatedId,donationHeadID){
    
    const balanceElement = document.getElementById('balance');
    const balance = parseFloat(document.getElementById('balance').innerHTML);

    const donationElement = document.getElementById(donatedId);
    const donationAmt = document.getElementById(donationId).value;
    const donatedAmt = parseFloat(document.getElementById(donatedId).innerHTML);

    const donationTxt = document.getElementById(donationHeadID).innerHTML;

    if(isNaN(donationAmt) || !donationAmt){
        alert('Caution!! Inputed value is not a number!');
    }else if(parseFloat(donationAmt)<=0){
        alert('Sorry, Your amount is too low!');
    }else if(parseFloat(donationAmt)>balance){
        alert('Sorry, Your balance is not enough!');
    }
    else{

        balanceElement.innerHTML = balance - parseFloat(donationAmt);
        donationElement.innerHTML = parseFloat(donationAmt) + donatedAmt;

        const historydiv = document.createElement('div');
        historydiv.className = 'w-full p-4 flex flex-col justify-center items-start border rounded-lg';

        const newP = document.createElement('p');
        newP.className = 'text-sm font-bold mb-5';
        newP.textContent = donatedAmt + ' Tk. Donated for ' + donationTxt;

        const dateP = document.createElement('p');
        dateP.className = 'text-sm ml-2';
        dateP.textContent = 'Date: ' + new Date();

        const parentDiv = document.getElementById('all-history');

        historydiv.appendChild(newP);
        historydiv.appendChild(dateP);

        parentDiv.appendChild(historydiv);
        

        const modal = document.getElementById('donate-modal');
        modal.showModal(); 
    }
    
    
}