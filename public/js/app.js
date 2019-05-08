

fetch('http://puzzle.mead.io/puzzle').then(response => {
    response.json().then( data => {
        console.log(data);
    });
});


fetch('http://localhost:3000/weather?address=philadelphia').then(response => {
    response.json().then( data => {
        console.log(data);
    });
});

let weatherForm = document.querySelector('form');
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let address = document.querySelector('input').value;
    fetch('http://localhost:3000/weather?address=' + address).then(response => {
        response.json().then( data => {
            console.log(data);
        });
    });
});
