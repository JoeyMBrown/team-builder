export default function FormInput(props) {
    const { text, type, name, value } = props.data;
    //console.log(props);
    return (
        <label htmlFor={`${name}`}> {text}
            {
                type !== 'input' ? 
                <select onChange={(e) => props.onInputChange(e)} name={`${name}`}>
                    {
                    value.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                        }
                      )
                    } 
                </select>
                 :
                <input onChange={(e) => props.onInputChange(e)} placeholder={`${text}`} name={`${name}`} id={`${name}`} />
            }
        </label>
    )
}