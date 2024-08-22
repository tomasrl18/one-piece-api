let previousTitle = document.title;

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = 'GOMU GOMU NO'
});

window.addEventListener('focus', () => {
    document.title = previousTitle
});

document.getElementById('sagas-btn').addEventListener('click', function() {
    window.location.href = 'sagas.html';
});