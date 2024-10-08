document.getElementById('blogbtn').addEventListener('click',function(){
    window.location.href = 'blog.html';
});

document.getElementById('donate-div-btn').addEventListener('click',function(){
    const donateDiv = document.getElementById('donate-div');
    const historyDiv = document.getElementById('history-div');
    const donateBtn = document.getElementById('donate-div-btn');
    
    donateDiv.classList.remove('hidden');
    historyDiv.classList.add('hidden');

    if (!donateBtn.classList.contains('bg-lime-300')) {
        donateBtn.classList.add('bg-lime-300');
    }

    document.getElementById('history-div-btn').classList.remove('bg-lime-300');
});

document.getElementById('history-div-btn').addEventListener('click',function(){
    const donateDiv = document.getElementById('donate-div');
    const historyDiv = document.getElementById('history-div');
    const historyDivBtn = document.getElementById('history-div-btn');
    
    donateDiv.classList.add('hidden');
    historyDiv.classList.remove('hidden');

    if (!historyDivBtn.classList.contains('bg-lime-300')) {
        historyDivBtn.classList.add('bg-lime-300');
    }
    
    document.getElementById('donate-div-btn').classList.remove('bg-lime-300');
});

document.getElementById('noakhali-donate').addEventListener('click', function(e) {
    e.preventDefault(); 
    donationCalculation('noakhali-amount','noakhali-donation','noakhali-h');
});

document.getElementById('feni-donate').addEventListener('click', function(e) {
    e.preventDefault();
    donationCalculation('feni-amount','feni-donation','feni-h');
});

document.getElementById('quota-donate').addEventListener('click', function(e) {
    e.preventDefault(); 
    donationCalculation('quota-amount','quota-donation','quota-h');
});

