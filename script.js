const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;
    let bmi = weight / height **2;
    bmi = bmi.toFixed(2);
    

    let message = document.querySelector('#message');

    if(bmi > 18.5 && bmi < 25) {
        bmi = bmi.replace('.', ',')
        message.textContent = `Ο δείκτης μάζας σώματος είναι ${bmi}. Φυσιολογικός`;
    }else if(bmi < 18.5 && bmi >= 0) {
        bmi = bmi.replace('.', ',')
        message.textContent = `Ο δείκτης μάζας σώματος είναι ${bmi}. Ελιπποβαρής`;
    }else if(bmi >= 25 && bmi < 30) {
        bmi = bmi.replace('.', ',')
        message.textContent = `Ο δείκτης μάζας σώματος είναι ${bmi}. Υπέρβαρος`;
    }else if (bmi >= 30) {
        bmi = bmi.replace('.', ',')
        message.textContent = `Ο δείκτης μάζας σώματος είναι ${bmi}. Παχύσαρκoς`;
    }else {
        message.textContent = 'Δώστε τις τιμές που ζητούνται για τον υπολογισμό του δείκτη μάζας σώματος!';
    }

    document.querySelector('#weight').value = "";
    document.querySelector('#height').value = "";
});