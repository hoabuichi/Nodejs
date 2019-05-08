

fetch('http://puzzle.mead.io/puzzle').then(response => {
    response.json().then( data => {
        console.log(data);
    });
});


fetch('/weather?address=philadelphia').then(response => {
    response.json().then( data => {
        console.log(data);
    });
});

let weatherForm = document.querySelector('form');
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let address = document.querySelector('input').value;
    fetch('/weather?address=' + address).then(response => {
        response.json().then( data => {
            console.log(data);
        });
    });
});
