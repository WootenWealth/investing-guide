$(document).ready(init);

function init() {
    initForm();
}

function initForm() {
    let form = $('form#requestElementary');
    form.submit(e => {
        e.preventDefault();
        console.log('TODO: FORM SUBMISSION');
    });
}
