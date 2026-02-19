const theForm = document.querySelector('#credit-card');
const creditCardContainer = document.querySelector('#creditCardNumberContainer');

function displayError(msg) {
    // display error message
    document.querySelector('.errors').textContent = msg
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    displayError(''); // clear old messages
    // Card number (your existing check + remove spaces)
    const cardInput = document.querySelector('#creditCardNumber');
    const cardNum = cardInput.value.trim().replace(/\s+/g, '');
    if (cardNum.length !== 16 || !/^\d{16}$/.test(cardNum)) {
        errorMsg += 'Card number needs exactly 16 digits.\n';
    }
    // Get month & year – clean them up
    const monthInput = document.querySelector('#month');
    const yearInput = document.querySelector('#year');

    const monthStr = monthInput.value.trim();
    const yearStr = yearInput.value.trim();

    const month = Number(monthStr);
    const year = Number(yearStr);
    // Expiration basic checks first
    if (monthStr === '' || yearStr === '') {
        errorMsg += 'Expiration date is required.\n';
    } else if (isNaN(month) || isNaN(year)) {
        errorMsg += 'Month and year must be numbers.\n';
    } else if (month < 1 || month > 12) {
        errorMsg += 'Month must be between 01 and 12.\n';
    } else if (year < 0 || year > 99) {
        errorMsg += 'Year must be two digits (like 26 or 30).\n';
    } else {
        // Only now check if expired – accurate last-day logic
        const fullYear = 2000 + year;
        const expireDate = new Date(fullYear, month, 0); // day 0 = last day of previous month = last day of selected month
        const today = new Date();
        const startOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        if (expireDate < startOfThisMonth) {
            errorMsg += 'Card has expired.\n';
        }
    }
    // If any errors → show and stop
    if (errorMsg !== '') {
        displayError(errorMsg.trim());
        return;
    }
    // Success
    document.querySelector('#credit-card').innerHTML =
        '<h2>Thank you for your purchase!</h2>';
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)