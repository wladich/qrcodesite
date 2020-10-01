import * as qrcode from "qrcode";

import "./index.css";

document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#input");
    const canvas = document.querySelector("#qr");
    if (canvas === null || input === null) {
        throw new Error("Canvas or input null");
    }

    function update(): void {
        if (canvas === null || input === null) {
            throw new Error("Canvas is null");
        }
        const text = (input as HTMLInputElement).value;
        qrcode.toCanvas(canvas, text === "" ? [] : text, () => {
            // no-op
        });
    }

    input.addEventListener("input", update);
    update();
});
