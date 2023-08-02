let input = document.getElementById('in').value;

let buttons = document.querySelectorAll('button');

let result = "";

Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            result = eval(result);
            document.getElementById('in').value = result;

        } else if (e.target.innerHTML == 'AC') {
            result = "";
            document.getElementById('in').value = result;
        }
        else {
            result = result + e.target.innerHTML;
            document.getElementById('in').value = result;
        }

    })
})