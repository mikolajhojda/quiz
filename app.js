const form = document.querySelector('#add-question');
// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection(form.select.value).add({
        question: form.question.value,
        good: parseInt(form.good.value),
        answer: [
            form.a0.value,
            form.a1.value,
            form.a2.value,
            form.a3.value
        ]
    });
    form.question.value = '';
    form.good.value = '';
    form.a0.value = '';
    form.a1.value = '';
    form.a2.value = '';
    form.a3.value = '';
});
