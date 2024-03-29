document.addEventListener('DOMContentLoaded', function () {
    let cards = JSON.parse(localStorage.getItem('cards')) || [];
    let template = document.getElementById('card-template');
    let cardList = document.getElementById('card-list');

    function updateLocalStorage() {
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    function createCardElement(card) {
        let cardView = template.content.cloneNode(true);
        let titleText = cardView.querySelector(".title-text");
        let subtitleText = cardView.querySelector(".subtitle-text");
        let toText = cardView.querySelector(".to-text");
        let fromText = cardView.querySelector(".from-text");
        let messageText = cardView.querySelector(".message-text");
        let deleteButton = cardView.querySelector(".delete-btn");

        titleText.textContent = card.title;
        subtitleText.textContent = card.subtitle;
        toText.textContent = card.to;
        fromText.textContent = card.from;
        messageText.textContent = card.message;

        deleteButton.addEventListener('click', function () {
            let index = cards.indexOf(card);
            if (index !== -1) {
                cards.splice(index, 1);
                updateLocalStorage();
                cardList.removeChild(cardView);
            }
        });

        return cardView;
    }

    cards.forEach(function (card) {
        let cardElement = createCardElement(card);
        cardList.appendChild(cardElement);
    });
});
