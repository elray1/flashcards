function transitionCard (e) {
  if ($('#answer').hasClass('occluded')) {
    $('#answer').removeClass('occluded').fadeIn();
  } else {
    $('#answer').addClass('occluded').hide()
    cardInd += 1;
    if (cardInd === cards.length) {
      cardInd = 0;
      cards = _.shuffle(cards);
      if (cards[cardInd].prompt === $('#prompt').text()) {
        cardInd = 1;
      }
    }
    $('#prompt').text(cards[cardInd].prompt);
    $('#answer').text(cards[cardInd].answer);
  }
}

var cards;
var cardInd = 0;

$.getJSON( "hebrew.json", function(resp) {
  cards = _.shuffle(resp);
  transitionCard();
});

window.addEventListener('keydown', transitionCard);
window.addEventListener('mouseup', transitionCard);
