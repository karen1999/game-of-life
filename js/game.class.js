class Game {
    constructor(gridSize) {
        this.grid = new Grid(gridSize, true);
    }

    play() {
        return this.grid.compute().render();
    }
}