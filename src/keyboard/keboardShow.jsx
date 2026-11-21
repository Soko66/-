
import KeboardPrint from "./keboardPrint"

const KeboardShow = ({ letters }) => {
    return (<div dir="auto">
        {letters.map((letter, i) => {
            let text = letter.letter
            if (letter.A === true && typeof text === "string") {
                text = text.toUpperCase()
            }
            if (letter.a === true && typeof text === "string") {
                text = text.toLowerCase()
            }
            return (
                <span key={i} style={{
                    whiteSpace: "pre-wrap",
                    fontWeight: letter.bold ? "bold" : "normal",
                    textDecoration: letter.line ? "underline" : "none",
                    fontSize: letter.size,
                    fontFamily: letter.font, color: letter.color,
                    backgroundColor: letter.backcolor
                }}>
                    <KeboardPrint letter={text} />
                </span>
            )
        })}
    </div>)
}
export default KeboardShow