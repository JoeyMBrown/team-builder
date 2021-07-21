import TeamMember from './TeamMember';

export default function TeamList(props) {
    const { teamList } = props;
    return (
        <ul>
            { teamList.map((teamMember, index) => <TeamMember key={index} memberInfo={teamMember}/>)}
        </ul>
    )
}