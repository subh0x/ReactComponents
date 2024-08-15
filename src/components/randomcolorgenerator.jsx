import { useState } from "react";

const HEX_CHARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const DEFAULT_COLOR = '#000000'
const COLOR_TYPE_HEX = 'hex';
const COLOR_TYPE_RGB = 'rgb';

export default function RandomColorGenerator() {
    const [colorType, setColorType] = useState(COLOR_TYPE_HEX);
    const [color, setColor] = useState(DEFAULT_COLOR);
    const [showDiv, setShowDiv] = useState(false);
    const [hexValue, setHexValue] = useState('');

    function generateHEXColor() {
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
        }
        setColor(hexColor);
    }

    function generateRGBColor() {
        const [r, g, b] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
        let rgbColor = `rgb(${r}, ${g}, ${b})`;
        colorTranslatorRGBtoHEX();
        setColor(rgbColor);
    }

    // RGB to HEX Convertor
    function colorTranslatorRGBtoHEX() {
        let currentRBGColor = color;
        const [r, g, b] = currentRBGColor.replace(/[^\d,]/g, '').split(',').map(Number);

        const toHex = (value) => {
            let hexCode = value.toString(16).toUpperCase();
            return (hexCode.length === 1) ? '0' + hexCode : hexCode;
        }

        const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`
        setHexValue(hexColor);
    }

    function colorTranslatorHEXtoRGB() {

    }

    return (
        <div className={`h-dvh w-dvw`}>
            <div className="flex justify-around items-center gap-5 py-5 px-4">
                <button onClick={() => { setColor(DEFAULT_COLOR); }}
                    className="bg-button-color rounded-xl font-semibold p-2">
                    Reset
                </button>
                <button onClick={() => { setColorType(COLOR_TYPE_HEX); }}
                    className="bg-button-color font-semibold rounded-xl p-2">
                    Create HEX Color
                </button>
                <button onClick={() => { setColorType(COLOR_TYPE_RGB); }}
                    className="bg-button-color font-semibold rounded-xl p-2">
                    Create RGB Color</button>
                <button onClick={() => { (colorType === COLOR_TYPE_HEX) ? generateHEXColor() : generateRGBColor(); }}
                    className="bg-button-color font-semibold rounded-xl p-2">
                    Generate Random Color
                </button>
                <button onClick={() => { (colorType === COLOR_TYPE_RGB) ? colorTranslatorRGBtoHEX() : colorTranslatorHEXtoRGB(); setShowDiv(!showDiv); }}
                    className="bg-button-color font-semibold rounded-xl p-2">
                    Translate RGB/HEX
                </button>
            </div>
            <div className="w-24 h-24 rounded-xl m-auto mb-5" style={{ background: color }}></div>
            <h1 className="text-3xl font-semibold text-center">
                {color}
            </h1>
            {showDiv && (
                <div className="text-3xl font-semibold text-center">
                    {hexValue}
                </div>
            )}
        </div>
    )
}