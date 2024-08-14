import { useState } from "react"

export default function RandomColorGenerator() {
    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#000000');

    function SetColorType(TypeOfColor) {
        console.log(TypeOfColor);
        setColorType(TypeOfColor);
    }

    function GenerateHEXColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }

        console.log(hexColor);

        setColor(hexColor);
    }

    function GenerateRGBColor() {
        const [r, g, b] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];

        let rgbColor = `rgb(${r}, ${g}, ${b})`;
        console.log(rgbColor);
        setColor(rgbColor);
    }

    return (
        <div className={`h-dvh w-dvw`} style={({ background: color })}>
            <div className="flex justify-around items-center gap-5 py-5 px-4">
                <button onClick={() => { SetColorType('hex'); }} className="bg-white font-semibold rounded-xl p-2">Create HEX Color</button>
                <button onClick={() => { SetColorType('rgb'); }} className="bg-white font-semibold rounded-xl p-2">Create RGB Color</button>
                <button onClick={() => { (colorType === 'hex') ? GenerateHEXColor() : GenerateRGBColor(); }} className="bg-white font-semibold rounded-xl p-2">Generate Random Color</button>
            </div>
            <h1 className="flex items-center justify-around text-4xl text-white font-semibold rounded-xl p-2">{color}</h1>
        </div>
    )
}