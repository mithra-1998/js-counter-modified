let currResult = parseInt(document.getElementById('get-number').value);

// let result = document.getElementById('get-number').value;

const decr = document.getElementById('decr');
const incr = document.getElementById('incr');

incr.addEventListener('click', function () {
    let currResult = parseInt(document.getElementById('get-number').value);
    if (currResult < 10) {
        currResult = currResult + 1;
        document.getElementById('get-number').value = currResult;
    }
    else {
        document.getElementById("incr").disabled = true;
    }                
});
decr.addEventListener('click', function () {
    let currResult = parseInt(document.getElementById('get-number').value);
    if (currResult > 0) {
        currResult = currResult - 1;
        document.getElementById('get-number').value = currResult;
    }
    else {
        document.getElementById("decr").disabled = true;
    }
});
