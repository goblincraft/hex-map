
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "HexGrid", () => $882b6d93070905b3$export$da3119bdf5d62385);
var $4e3f74a422b9a616$export$b8e9cd941e8016ac = /*#__PURE__*/ function(Errors) {
    Errors["NO_CANVAS"] = "No valid canvas found from given ID.";
    return Errors;
}({});


const $22590597c430074f$export$5f013453c9c2444 = {
    radius: 20,
    height: 0,
    width: 0,
    borderSize: 1,
    borderColor: "#000000",
    fillColor: "#FFFFFF"
};


const $882b6d93070905b3$export$da3119bdf5d62385 = (()=>{
    let _canvas;
    let _ctx;
    let _hexOptions;
    function _setupCanvas(el) {
        _canvas = el;
        _canvas.width = el.offsetWidth;
        _canvas.height = el.offsetHeight;
        _ctx = _canvas.getContext("2d");
    }
    function _drawHex(x, y) {
        _ctx.beginPath();
        for(let i = 0; i < 6; i++){
            const angle = Math.PI / 3 * i;
            _ctx.lineTo(x + _hexOptions.radius * Math.cos(angle), y + _hexOptions.radius * Math.sin(angle));
        }
        _ctx.closePath();
        _ctx.fill();
        _ctx.stroke();
    }
    function _drawGrid() {
        for(let y = _hexOptions.radius; y + _hexOptions.radius * Math.sin(Math.PI / 3) < _canvas.height; y += _hexOptions.radius * Math.sin(Math.PI / 3))for(let x = _hexOptions.radius, j = 0; x + _hexOptions.radius * (1 + Math.cos(Math.PI / 3)) < _canvas.width; x += _hexOptions.radius * (1 + Math.cos(Math.PI / 3)), y += (-1) ** j++ * _hexOptions.radius * Math.sin(Math.PI / 3))_drawHex(x, y);
    }
    function _setCanvasStyling() {
        if (_ctx) {
            _ctx.fillStyle = _hexOptions.fillColor ? _hexOptions.fillColor : "transparent";
            _ctx.strokeStyle = _hexOptions.borderColor;
            _ctx.lineWidth = _hexOptions.borderSize;
            _ctx.save();
        }
    }
    function _setHexOptions(options) {
        _hexOptions = options;
        _hexOptions.height = Math.sqrt(3) * options.radius;
        _hexOptions.width = 2 * options.radius;
    }
    function draw(id, dotOptions) {
        const el = document.getElementById(id);
        if (el && el instanceof HTMLCanvasElement) {
            _setupCanvas(el);
            _setHexOptions(dotOptions ? dotOptions : (0, $22590597c430074f$export$5f013453c9c2444));
            _setCanvasStyling();
            _drawGrid();
            _ctx.restore();
        } else throw Error((0, $4e3f74a422b9a616$export$b8e9cd941e8016ac).NO_CANVAS);
    }
    return {
        draw: draw
    };
})();


//# sourceMappingURL=main.js.map
