// document.getElementById('blogbtn').addEventListener('click',function(){
//     window.location.href = 'blog.html';
// });

document.getElementById('homebtn').addEventListener('click',function(){
    window.location.href = 'blog.html';
});

document.getElementById('donate-div-btn').addEventListener('click',function(){
    const donateDiv = document.getElementById('donate-div');
    const historyDiv = document.getElementById('history-div');
    
    donateDiv.classList.remove('hidden');
    historyDiv.classList.add('hidden');

    document.getElementById('history-div-btn').add('bg-lime-300');
    document.getElementById('donate-div-btn').classList.remove('bg-lime-300');
});

document.getElementById('history-div-btn').addEventListener('click',function(){
    const donateDiv = document.getElementById('donate-div');
    const historyDiv = document.getElementById('history-div');
    
    donateDiv.classList.add('hidden');
    historyDiv.classList.remove('hidden');

    document.getElementById('donate-div-btn').add('bg-lime-300');
    document.getElementById('history-div-btn').classList.remove('bg-lime-300');
});

document.getElementById('noakhali-donate').addEventListener('click', function(e) {
    e.preventDefault(); 
    donationCalculation('noakhali-amount','noakhali-donation');
});

document.getElementById('feni-donate').addEventListener('click', function(e) {
    e.preventDefault();
    donationCalculation('feni-amount','feni-donation');
});

document.getElementById('quota-donate').addEventListener('click', function(e) {
    e.preventDefault(); 
    donationCalculation('quota-amount','quota-donation');
});

