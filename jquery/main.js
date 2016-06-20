var leMenu = $('#menu');
var leBouton = $('#unfold');

leBouton.click(function (evt) {
    leMenu.toggleClass('open');
    evt.preventDefault();
});