var gridSize = 39;
var game = new Game(gridSize);

setInterval(() => {
    let output = game.play();
    $('body').empty();
    $('body').append(output);
    $('.live-grid').css({
    	"width" : gridSize * 50+"px"
    })
}, 100);