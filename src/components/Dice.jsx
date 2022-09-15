export const Dice = ({index, dices, setDices}) => {
    return (
        <span style={{margin: 10}} onClick={e => {let d = [...dices]; d[index] = Math.floor(Math.random()*6)+1; setDices(d); }}>{dices[index]}</span>
    )
}

export default Dice;