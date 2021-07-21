export default function TeamMember(props) {
    const { name, email, role } = props.memberInfo;
    return (
        <li>My name is {name}, my email is {email}, and my role is: {role}</li>
    )
}