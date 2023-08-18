function increment(idid) {
    const value = parseInt(document.getElementById(idid).getAttribute('value'));
    document.getElementById(idid).setAttribute('value', value + 1);
}

function decrement(idid) {
    const value = parseInt(document.getElementById(idid).getAttribute('value'));
    if (value - 1 >= 0) {
        document.getElementById(idid).setAttribute('value', value - 1);
    }
}
