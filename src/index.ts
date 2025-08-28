import { Errors } from "./enums/Errors";
import { DefaultHexOptions, HexOptions } from "./interfaces/IHexOptions";

export const HexGrid = (() => {

    let _canvas: HTMLCanvasElement;
    let _ctx: CanvasRenderingContext2D;
    let _hexOptions: HexOptions;

    function _setupCanvas(el: HTMLCanvasElement) {
        _canvas = el;
        _canvas.width = el.offsetWidth;
        _canvas.height = el.offsetHeight;
        _ctx = <CanvasRenderingContext2D>_canvas.getContext("2d");
    }

    function _drawHex(x: number, y: number) {
        _ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 3 * i;
            _ctx.lineTo(x + _hexOptions.radius * Math.cos(angle), y + _hexOptions.radius * Math.sin(angle));
        }
        _ctx.closePath();
        _ctx.fill();
        _ctx.stroke();
    }

    function _drawGrid() {
        
    }

    function _setCanvasStyling() {
        if (_ctx) {
            _ctx.fillStyle = _hexOptions.fillColor ? _hexOptions.fillColor : "transparent";
            _ctx.strokeStyle = _hexOptions.borderColor;
            _ctx.lineWidth = _hexOptions.borderSize;
            _ctx.save();
        }
    }

    function _setHexOptions(options: HexOptions) {
        _hexOptions = options;
        _hexOptions.height = Math.sqrt(3) * options.radius;
        _hexOptions.width = 2 * options.radius;
    }

    function draw(id: string, dotOptions?: HexOptions): void {
        const el = document.getElementById(id);
        if (el && el instanceof HTMLCanvasElement) {
            _setupCanvas(el);
            _setHexOptions(dotOptions ? dotOptions : DefaultHexOptions);
            _setCanvasStyling();
        } else {
            throw Error(Errors.NO_CANVAS);
        }
    }

    return {
        draw
    }


})();