document.getElementById('donate-div-btn').addEventListener('click',function(){
    const donateDiv = document.getElementById('donate-div');
    const historyDiv = document.getElementById('history-div');
    
    donateDiv.classList.remove('hidden');
    historyDiv.classList.add('hidden');
});

document.getElementById('history-div-btn').addEventListener('click',function(){
    const donateDiv = document.getElementById('donate-div');
    const historyDiv = document.getElementById('history-div');
    
    donateDiv.classList.add('hidden');
    historyDiv.classList.remove('hidden');
});

document.getElementById('feni-donate').addEventListener('click', function(e) {
    e.preventDefault();

    const donation = document.getElementById
    const modal = document.getElementById('donate-modal');
    modal.showModal(); // Show the modal when button is clicked
    alert('ok');
    donationCalculation();
});

document.getElementById('noakhali-donate').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default form submission
    const modal = document.getElementById('donate-modal');
    modal.showModal(); // Show the modal when button is clicked
});

document.getElementById('quota-donate').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default form submission
    const modal = document.getElementById('donate-modal');
    modal.showModal(); // Show the modal when button is clicked
});

function donationCalculation(){
    const balance = parseInt(document.getElementById('balance').innerHTML);
    alert(new Date());
}