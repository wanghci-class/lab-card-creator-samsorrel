document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.card-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let cards = JSON.parse(localStorage.getItem('cards')) || [];

        const newCard = {
            to: form.querySelector('#to').value,
            from: form.querySelector('#from').value,
            title: form.querySelector('#title').value,
            subtitle: form.querySelector('#subtitle').value,
            message: form.querySelector('#message').value
        };

        cards.push(newCard);

        localStorage.setItem('cards', JSON.stringify(cards));

        form.reset();
    });

    const previewButton = document.getElementById('preview-button');
    previewButton.addEventListener('click', function () {
        const titleSpan = document.querySelector('.title-text');
        const subtitleSpan = document.querySelector('.subtitle-text');
        const toSpan = document.querySelector('.to-text');
        const fromSpan = document.querySelector('.from-text');
        const messageSpan = document.querySelector('.message-text');

        titleSpan.textContent = form.querySelector('#title').value;
        subtitleSpan.textContent = form.querySelector('#subtitle').value;
        toSpan.textContent = 'Dear ' + form.querySelector('#to').value + ',';
        fromSpan.textContent = 'Sincerely, ' + form.querySelector('#from').value;
        messageSpan.textContent = form.querySelector('#message').value;
    });
});
