document.querySelectorAll('.soc-code-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const codeBlock = button.nextElementSibling;
        const isVisible = codeBlock.style.display === 'block';
        codeBlock.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? 'Show code' : 'Hide code';
    });
});