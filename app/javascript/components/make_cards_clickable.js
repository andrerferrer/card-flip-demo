const makeCardsClickable = () => {
  const flippableCard = document.querySelector('.flip-card');
  if (flippableCard) {
    const flipCard = (event) => {
      const card = event.currentTarget;
      // console.log(card)
      card.classList.toggle('flipped');
    };
    
    const cards = document.querySelectorAll('.flip-card > .flip-card-inner');
    
    cards.forEach((card) => {
      card.addEventListener('click', flipCard);
    });
  }
}

export { makeCardsClickable }