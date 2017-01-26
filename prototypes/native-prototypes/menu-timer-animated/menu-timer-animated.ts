class Menu {
    protected STATE_OPEN: number = 1;
    protected STATE_CLOSED: number = 0;
    protected _state: number = null;


    constructor(state: number) {
        this._state = state || this.STATE_CLOSED;
    }

    open(): void {
        this._state = this.STATE_OPEN;
    };

    close(): void {
        this._state = this.STATE_CLOSED;
    };

    private _stateAsString(): string {
        switch (this._state) {
            case this.STATE_OPEN:
                return 'открыто';

            case this.STATE_CLOSED:
                return 'закрыто';
        }
    };

    showState(): void {
        alert(this._stateAsString());
    };
};

class AnimatingMenu extends Menu {
    protected STATE_ANIMATING: number = 2;
    private _timeStamp: number = null;

    constructor(state: number) {
        super(state);
    }
// TODO:Исправить метод
    open(): void {debugger
        this._state = this.STATE_ANIMATING;
        if (this._state == 2) {
            alert('анимация');
        }
        this._timeStamp = setTimeout(() => {
            this.open()
        }, 1000)

    }

    close(): void {
        clearTimeout(this._timeStamp);
        super.close();
    }
}
