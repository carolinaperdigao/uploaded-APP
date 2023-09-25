function checkAnswer() {
    const correctAnswer = "alice";
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        window.location.href = "page4.html";  // Redireciona para a próxima página
    } else {
        alert("Resposta incorreta. Tente novamente!");
    }
}



function playMeow() {
    let sound = document.getElementById("meowSound");
    sound.play();
}

