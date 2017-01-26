interface IOprions {
    template: string;
}

interface IExtendedOprions extends IOprions {
    precision: number;
}

class ExClock {

    private _template: string = null;
    protected _timer: number = null;
    private _options: IOprions = null;

    constructor(options: IOprions) {
        this._options = Object.create(options);
        this._template = this._options.template;
    }

    protected _render() {
        let output: string,
            date: Date,
            hours: any,
            min: any,
            sec: any;

        date = new Date();

        hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        min = date.getMinutes();
        if (min < 10) min = '0' + min;

        sec = date.getSeconds();
        if (sec < 10) sec = '0' + sec;

        output = this._template.replace("h", `${hours}`).replace("m", `${min}`).replace("s", `${sec}`);

        console.log(output);
    }

    stop() {
        clearInterval(this._timer);
    };

    start() {
        this._render();
        this._timer = setInterval(() => {
            this._render();
        }, 1000);
    }

}

class ExtendedClock extends ExClock {
    private _precision: number = 1000;

    constructor(options: IExtendedOprions) {
        super(options);
        if (options.precision) {
            this._precision = options.precision;
        }
    }

    start() {
        this._render();
        this._timer = setInterval(() => {
            this._render();
        }, this._precision);
    }
}
