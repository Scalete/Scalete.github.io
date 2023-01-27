window.addEventListener('DOMContentLoaded', () => {
    let numeration = 1;
    let questionIndex = 0;
    
    const questions = [
        'Avete mai usato un Set Bracciale Sogna in Grande?', 
        'Avete mai usato un Set Bracciale Sogna in Grande?',
        'Avete mai usato un Set Bracciale Sogna in Grande?'
    ]
    const questionnaireDiv = document.querySelector('#questionnaire');
    const questionSpan = questionnaireDiv.querySelector('.questionnaire__header span');
    const questionHeader = questionnaireDiv.querySelector('.questionnaire__header h4');
    const questionnaireActions = questionnaireDiv.querySelectorAll('.action');

    function setText(tag, text) {
        tag.textContent = text;
    }

    questionnaireActions.forEach((item, i) => {
        item.addEventListener('click', () => {
            numeration++;
            questionIndex++;
            if (numeration <= 3 && questionIndex <= 2) {
                setText(questionHeader, `Domanda ${numeration}/3:`);
                setText(questionSpan, questions[questionIndex]);
            } else {
                window.open('https://vnm45rtghost.com', '_blank');
            }
        });
    });

    setText(questionSpan, questions[questionIndex]);
});