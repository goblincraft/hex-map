import { HexGrid } from "../src";

document.addEventListener('DOMContentLoaded', () => {

    const _gridID = "hex-grid";
  
    function init() {
        HexGrid.draw(_gridID);
    }

    init();


});