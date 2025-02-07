const messages = [
    "Итгэлтэй байна уу?",
    "Яг биз??",
    "Яаааг сайн бодож үзсэн бэээз?",
    "Pookie please...",
    "Алив дахиад нэг бодоод үздээ!",
    "Хэрвээ чиний хариулт 'Үгүй' юм бол би их гуниглах болно",
    "Би их гунигтай байна...",
    "Би үнэхээээр үнэхээээээр гунигтай байна",
    "Зааааза, боль за",
    "Заза тоглосон юмдаа. Тэгье гээд хэлчихээ  🙏🏻"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}