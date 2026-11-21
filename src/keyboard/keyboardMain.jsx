import { useState } from "react"
import KeboardShow from "./keboardShow"
import { Hebrew, ENGLISH, english, arrShift, Emoji } from "./keboard"
import "./keyboard.css"

const KeyboardMain = () => {

    const [Letter, setLetter] = useState([])
    const [color, setColor] = useState("#000000")
    const [backcolor, setBackcolor] = useState("#ffffff")
    const [font, setFont] = useState("Arial")
    const [arr, setArr] = useState(english)
    const [bold, setBold] = useState(false)
    const [line, setLine] = useState(false)
    const [size, setSize] = useState("10px")
    const [shift, setShift] = useState(false)
    const [hebrew, setHebrew] = useState(false)
    const [symbol, setSymbol] = useState(false)
    const [cap, setCap] = useState(false)

    const addletter = (letter) => {
        const Obj = {
            color: color,
            letter: letter,
            backcolor: backcolor,//צבע רקע
            font: font,
            bold: bold,
            line: line,
            size: size
        }
        setLetter(prev => [...prev, Obj])
        if (shift) { setShift(false); setArr(english) }
    }

    return <div className="keyboard-container">
        <div className="keyboard-display-box">
            <KeboardShow letters={Letter} />
        </div>
        <div className="keyboard-controls-group">
            <input className="keyboard-color-picker" type="color" value={color} onChange={
                (event) => { setColor(event.target.value) }} />
            <input className="keyboard-color-picker" type="color" value={backcolor} onChange={
                (event) => { setBackcolor(event.target.value) }} />
            <button className={`keyboard-btn ${hebrew ? "active" : ""}`} onClick={() => { const reverse = !hebrew; setHebrew(reverse); setArr(reverse ? Hebrew : english); setSymbol(false); setCap(false) }}>Hebrew</button>
            <button className={`keyboard-btn ${symbol ? "active" : ""}`} onClick={() => { const reverse = !symbol; setSymbol(reverse); setArr(reverse ? Emoji : english); setHebrew(false); setCap(false) }}>symbol</button>
            <button className={`keyboard-btn ${cap ? "active" : ""}`} onClick={() => { const reverse = !cap; setCap(reverse); setArr(reverse ? ENGLISH : english); setSymbol(false); setHebrew(false) }}>cap</button>
            <button className="keyboard-btn" onClick={() => { setLetter(Letter.map((l) => ({ ...l, A: true, a: false }))) }}>A+</button>
            <button className="keyboard-btn" onClick={() => { setLetter(Letter.map((l) => ({ ...l, a: true, A: false }))) }}>A-</button>
            <button className={`keyboard-btn ${shift ? "active" : ""}`} onClick={() => { setShift(true); setArr(arrShift) }}>shift</button>
            <button className={`keyboard-btn ${shift ? "active" : ""}`} onClick={() => { setShift(true); setArr(arrShift) }}>shift</button>
            <button className={`keyboard-btn ${bold ? "active" : ""}`} onClick={() => { setBold(!bold) }}>B</button>
            <button className={`keyboard-btn ${line ? "active" : ""}`} onClick={() => { setLine(!line) }}>line</button>
            <select className="keyboard-select" onChange={(font) => { setFont(font.target.value) }}>
                <option value="Arial">Arial</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
            </select>
            <select className="keyboard-select" onChange={(size) => { setSize(size.target.value) }}>
                <option value="10px">10</option>
                <option value="12px">12</option>
                <option value="14px">14</option>
                <option value="16px">16</option>
            </select>
            <button className="keyboard-btn" onClick={() => { setLetter([...Letter, { letter: " ", color, backcolor, font, bold, line, size }]) }}>space</button>
            <button className="keyboard-btn" onClick={() => { setLetter([...Letter, { letter: "\n", color, backcolor, font, bold, line, size }]) }}>enter</button>
            <button className="keyboard-btn" onClick={() => { setLetter([]) }}>clear</button>
            <button className="keyboard-btn" onClick={() => { setLetter(Letter.slice(0, -1)) }}>delete</button>
        </div>
        <div className="keyboard-keys-grid">
            {arr.map((char) => {
                return <button className="keyboard-key-btn" key={char} onClick={() => addletter(char)}>{char}</button>
            })
            }
        </div>
    </div>
}
export default KeyboardMain