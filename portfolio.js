
/*Portfolio


/* "sortedDown" sera utilisée quand notre item sera minimisé. La taille de l'élément sera réduit de 50% et il passera à 80% en noir et blanc.
*/
.sortedDown {
    transform: scale(.5);
    -webkit-transform: scale(.5);
    -moz-transform: scale(.5);
    -ms-transform: scale(.5);
    -o-transform: scale(.5);
    filter: grayscale(.8); /* Filtre qui permet de rajouter un effet noir et blanc. */
    -webkit-filter: grayscale(.8);
}



$(document).ready(function() { // Lorsque le document est chargé entièrement
    var triItem = $(".tri ul li"),  // On stocke dans une variable chaque item de notre tri.
        portfolioItem = $(".portfolio .item"); // On stocke dans une autre variable chaque item de notre portfolio.
 
    triItem.click(function() { // Lors du click sur un item du tri
        var toSortId = $(this).attr("id"); // On récupère son id
        $(".active").removeClass("active"); // On réinitialise la classe "active" qui montre quel item du tri est actif
        $(this).addClass("active"); // On ajoute ensuite la classe "active" à l'élément qui vient d'être cliqué.
 
        // Si on a selectionné "all", soit "tout", on réinitialise les classes d'affichage pour tout afficher sans minimalisation.
        if(toSortId == "all") {
            portfolioItem.each(function() {
	        $(this).removeClass("sortedDown");
            });
        }
                
        // Sinon :
        else {
	    portfolioItem.each(function() { // Pour chaque item du portfolio
	        if($(this).hasClass(toSortId)) { // Si il possède la classe de l'item du tri sélectionné
	            $(this).removeClass("sortedDown"); // On lui enlève l'effet de minimisation
	        }
 
	        else { // Sinon
	            $(this).addClass("sortedDown"); // On le minimise.
	        }
	    });
        }
    });
});
