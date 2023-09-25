function checkMemories() {
    const correctMemories = ["memory3", "memory4", "memory5"];  // IDs das memórias corretas
    let selectedCorrectly = true;
    let incorrectSelected = false;

    correctMemories.forEach(memory => {
        const checkbox = document.getElementById(memory);
        if (!checkbox.checked) {
            selectedCorrectly = false;
        }
    });

    // Verificar se as memórias incorretas (1 e 2) foram selecionadas
    const incorrectMemories = ["memory1", "memory2"];
    incorrectMemories.forEach(memory => {
        const checkbox = document.getElementById(memory);
        if (checkbox.checked) {
            incorrectSelected = true;
        }
    });

    if (selectedCorrectly && !incorrectSelected) {
        window.location.href = "page_end.html";  // Redireciona para a página final
    } else {
        alert("Algumas memórias não foram selecionadas corretamente. Tente novamente!");
    }
}