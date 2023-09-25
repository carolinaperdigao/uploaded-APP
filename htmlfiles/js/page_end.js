window.onload = function() {
    const confettiCount = 150;
    const confettiColors = ['#EF5350', '#EC407A', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#29B6F6', '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#D4E157', '#FFEE58', '#FFCA28', '#FFA726', '#FF7043'];

    const confetti = document.getElementById('confetti');

    for (let i = 0; i < confettiCount; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.top = Math.floor(Math.random() * 101) + '%';
        confettiPiece.style.left = Math.floor(Math.random() * 101) + '%';
        confettiPiece.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confettiPiece.style.animationDuration = Math.floor(Math.random() * 10 + 5) + 's'; // Ajustado para 5 a 15 segundos
        confetti.appendChild(confettiPiece);
    }
}

