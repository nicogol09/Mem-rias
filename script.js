function showSection(section) {
    const sections = document.querySelectorAll("main > section");
    sections.forEach((sec) => {
        sec.style.display = "none";
    });
    document.getElementById(section).style.display = "block";
}

// Exibe a seção de informações como padrão
showSection('info');
