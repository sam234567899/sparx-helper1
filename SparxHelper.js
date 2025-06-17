(function sparxAutoAnswer() {
  const answers = [];

  document.querySelectorAll('[class*="question"]').forEach((question, index) => {
    const correct = question.querySelector('[class*="correct"], [data-correct="true"]');

    if (correct && correct.innerText.trim()) {
      answers.push(`Q${index + 1}: ${correct.innerText.trim()}`);
    } else {
      answers.push(`Q${index + 1}: [Answer not found]`);
    }
  });

  const answerBox = document.createElement('div');
  answerBox.style.position = 'fixed';
  answerBox.style.top = '10px';
  answerBox.style.right = '10px';
  answerBox.style.background = '#fff';
  answerBox.style.border = '2px solid #222';
  answerBox.style.padding = '12px';
  answerBox.style.maxWidth = '350px';
  answerBox.style.maxHeight = '80vh';
  answerBox.style.overflowY = 'auto';
  answerBox.style.zIndex = 999999;
  answerBox.style.fontFamily = 'monospace';
  answerBox.style.fontSize = '14px';
  answerBox.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
  answerBox.innerHTML = `<strong>Sparx Helper:</strong><br><br>${answers.join('<br>')}`;
  document.body.appendChild(answerBox);
})();

