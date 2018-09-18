function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

function Game() {
    var self = this;

    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;

    this.hideVisibleFurry = function () {
        for (var i = 0; i < this.board.length; i++) {
            this.board[i].classList.remove('furry');
        }
    };

    this.hideVisibleCoin = function () {
        for (var i = 0; i < this.board.length; i++) {
            this.board[i].classList.remove('coin');
        }
    };

    this.index = function (x, y) {
        return x + (y * 10);
    };

    this.showFurry = function () {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');

    };

    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };


    this.moveFurry = function () {
        if (self.furry.direction === "right") {
            self.furry.x++;
        } else if (self.furry.direction === "left") {
            self.furry.x--;
        } else if (self.furry.direction === "up") {
            self.furry.y++;
        }
        else if (self.furry.direction === "down") {
            self.furry.y--;
        }

        if (self.furry.x < 0 || self.furry.x > 9 || self.furry.y < 0 || self.furry.y > 9) {
            self.gameOver();
        } else {
            console.log(self.furry.x, self.furry.y)
            self.showFurry();
            self.checkCoinCollision();
        }

    };

    this.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                self.furry.direction = 'left';
                break;
            case 39:
                self.furry.direction = 'right';
                break;
            case 40:
                self.furry.direction = 'up';
                break;
            case 38:
                self.furry.direction = 'down';
                break;

        }

    };

    // this.checkCoinCollision = function(){
    //
    //     if (this.furry.x === this.coin.x || this.furry.y === this.coin.y ){
    //
    //         this.board[ this.index(this.coin.x,this.coin.y) ].classList.remove('furry');
    //         this.score++;
    //         this.coin = new Coin();
    //
    //     }
    // }

    this.checkCoinCollision = function () {
        this.xx = document.querySelector('#score div strong')
        for (k = 0; k < this.board.length; k++) {
            if (this.board[k].className === 'coin furry') {
                this.board[k].classList.remove('coin');
                this.score++;
                this.coin = new Coin()
                this.showCoin()
                this.xx.innerText = this.score;
            }
        }
    };

    this.startGame = function () {
        this.idSetInterval = setInterval(this.moveFurry, 250);
    };

    this.gameOver = function () {
        this.hideVisibleFurry();
        this.hideVisibleCoin();
        clearInterval(this.idSetInterval);
        alert('Przegrałeś, twój wynik to ' + this.score);
        this.score = 0;
        this.xx.innerText = this.score;
    }

}


document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.start-game');
    btn.addEventListener('click', function () {

        var gm = new Game();

        gm.startGame();
        gm.showCoin();

        document.addEventListener('keydown', function (event) {
            gm.turnFurry(event);
        });
    });


});


