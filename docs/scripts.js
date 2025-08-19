function bindCodeToggles() {
    document.querySelectorAll('.soc-code-toggle').forEach(button => {
        button.onclick = () => {
            const codeBlock = button.nextElementSibling;
            const isVisible = codeBlock.style.display === 'block';
            codeBlock.style.display = isVisible ? 'none' : 'block';
            button.textContent = isVisible ? 'Show code' : 'Hide code';
        };
    });
}

bindCodeToggles();
document.body.addEventListener('htmx:afterSwap', bindCodeToggles);