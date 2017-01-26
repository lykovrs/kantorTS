interface IOprions {
    template: string;
}

class Clock {

    private _template: string = null;
    private _timer: number = null;
    private _options: IOprions = null;

    constructor(options: IOprions) {
        this._options = Object.create(options);
        this._template = this._options.template;
    }

    private _render() {
        let output:string,
            date:Date,
            hours:any,
            min:any,
            sec:any;

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

    stop = function() {
        clearInterval(this._timer);
    };

    start = function() {
        this._render();
        this._timer = setInterval(() => {
          this._render();
        }, 1000);
    }

}
