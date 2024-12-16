document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const number = document.querySelector('#number').value;
    const result = numberToWords(number);
    document.querySelector('#conversion-result').innerText = result;
});

function numberToWords(num) {
    const words = [
        'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'
    ];
    if (num === 0) return words[0];
    return words[num] || 'Number out of range';
}
