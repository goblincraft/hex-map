import { Errors } from "./enums/Errors";
import { HexOptions } from "./interfaces/IHexOptions";

export const HexGrid = (() => {

    let _canvas: HTMLCanvasElement;
    let _ctx: CanvasRenderingContext2D;

    function _setupCanvas(el: HTMLCanvasElement) {
        _canvas = el;
        _canvas.width = el.offsetWidth;
        _canvas.height = el.offsetHeight;
        _ctx = <CanvasRenderingContext2D>_canvas.getContext("2d");
    }

    function draw(id: string, dotOptions?: HexOptions): void {
        const el = document.getElementById(id);
        if (el && el instanceof HTMLCanvasElement) {
            _setupCanvas(el);
        } else {
            throw Error(Errors.NO_CANVAS);
        }
    }

    return {
        draw
    }


})();