document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('copy-citation');
  const code = document.getElementById('bibtex-code');
  const status = document.getElementById('citation-status');
  if (!button || !code || !status) return;

  button.addEventListener('click', async function () {
    try {
      await navigator.clipboard.writeText(code.textContent);
      status.textContent = 'BibTeX copied to clipboard.';
    } catch (_) {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'BibTeX selected. Press Ctrl+C or ⌘C to copy.';
    }
  });
});
