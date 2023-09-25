window.onload = function() {
    const textContainer = document.querySelector('.text-container');
    const textContainerRect = textContainer.getBoundingClientRect();

    const elements = document.querySelectorAll('.element, .clickable');
    elements.forEach(element => {
        let randomX, randomY;

        do {
            randomX = Math.random() * (window.innerWidth - element.clientWidth);
            randomY = Math.random() * (window.innerHeight - element.clientHeight);
        } while (randomX > textContainerRect.left && randomX < textContainerRect.right && randomY > textContainerRect.top && randomY < textContainerRect.bottom);

        element.style.left = randomX + 'px';
        element.style.top = randomY + 'px';
    });
}

function goToNextPage() {
    window.location.href = 'page3.html';
}

function showHint() {
    alert("Para continuar você deve clicar em uma das carinhas felizes. :)");
}
