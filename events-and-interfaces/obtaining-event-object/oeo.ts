/**
 * Class GameFootball
 * @param {string} greeting The greeting to use
 */
class GameFootball {
    private _ball;
    private _stadum;

    constructor(stadium) {
        this._stadum = stadium;
        this._ball = this._stadum.querySelector('#ball')
        this._stadum.addEventListener('click', (event) => {
            this.moveBall(event);
        })
    };
    
    moveBall(event):void {
        let locationStadium = this._stadum.getBoundingClientRect();
        let locationStadiumInner = {
            top: locationStadium.top + this._stadum.clientTop,
            left: locationStadium.left + this._stadum.clientLeft
        }

        // Расположение мяча с поправкой для центрирования 
        let ballLocation = {
            top: event.clientY - locationStadiumInner.top - this._ball.clientHeight / 2,
            left: event.clientX - locationStadiumInner.left - this._ball.clientWidth / 2
        }
        // Убираем возможность пересечения мячем верхней границы
        if(ballLocation.top < 0) ballLocation.top = 0;   
        // Убираем возможность пересечения мячем границы слева
        if(ballLocation.left < 0) ballLocation.left = 0; 
        // Убираем возможность пересечения мячем границы справа
        if(ballLocation.left + this._ball.clientWidth > this._stadum.clientWidth) {
            ballLocation.left = this._stadum.clientWidth - this._ball.clientWidth;
        } 
        // Убираем возможность пересечения мячем нижней границы
        if(ballLocation.top + this._ball.clientHeight > this._stadum.clientHeight){
            ballLocation.top = this._stadum.clientHeight - this._ball.clientHeight;
        } 
        // Позицианируем мяч
        this._ball.style.top = ballLocation.top + 'px';
        this._ball.style.left =  ballLocation.left + 'px';
    }
}