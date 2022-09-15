export const DiceCount = ({value, setValue}) => {
    return (
        <div>
            <button onClick={e => {setValue(value - 1)}}>-</button>
            {value}
            <button onClick={e => {setValue(value + 1)}}>-</button>
        </div>
    )
}

export default DiceCount;