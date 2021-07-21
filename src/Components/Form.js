import FormInput from './FormInput';

export default function Form(props) {
    const { onInputChange } = props;
    //console.log(props.onInputChange);
    const inputs = [{
        type: 'input',
        text: 'Name',
        name: 'name'
    },
    {
        type: 'input',
        text: 'Email',
        name: 'email'
    },
    {
        type: 'select',
        text: 'Role',
        name: 'role',
        value: ['Backend Engineer', 'Frontend Engineer', 'Designer']
    }]
    return (
        <div>
            <form>
                {
                    inputs.map((input, index) => {return <FormInput key={index} data={input} onInputChange={props.onInputChange} />})
                }
                    <button type='submit' value='submit' onClick={(e) => props.setTeams(e)}>Submit</button>
            </form>
        </div>
    );
}