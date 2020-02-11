// Your code goes here
// Mouse enter
const logo = document.getElementsByClassName('logo-heading')[0];
logo.addEventListener('mouseenter', () => logo.style = 'transform: scale(1.15); transition: transform .3s;');

// Mouse leave
logo.addEventListener('mouseleave', () => logo.style.transform = 'scale(1)');

// Double click
const letsGoImg = document.getElementsByClassName('img-content')[0];
letsGoImg.addEventListener('dblclick', () => window.open('/letsgo.html', '_self'));

// Keydown
const allElements = document.querySelectorAll('*');
document.addEventListener('keydown', e => {
    if (e.key === 'r') {
        allElements.forEach(el => {
            el.style.transition = 'transform 5s';
            el.style.transform = 'rotate(360deg)';
        });
    }
});

// Keyup
document.addEventListener('keyup', e => {
    if (e.key === 'r') {
        allElements.forEach(el => {
            el.style.transform = '';
        });
    }
});

// Copy
document.addEventListener('copy', e => {
    const selection = document.getSelection();
    alert(`'${selection.toString()}' has been copied to clipboard.`);
});

// Resize
const body = document.getElementsByTagName('body')[0];
window.addEventListener('resize', () => body.style.backgroundColor = 'red');

// Scroll
const header = document.getElementsByTagName('header')[0];
document.addEventListener('scroll', () => header.style.display = 'none');

// Load
window.addEventListener('load', () => alert('The window has loaded!'));

// online
window.addEventListener('offline', () => alert('You have lost connection!'));