

const TeamsOption = ({handleTeamSelectionChange, selectedTeam, teams}) => {
    return (
        <select className='block w-full rounded-md shadow my-10 border border-gray-200 p-2 focus:outline-none' value={selectedTeam} onChange={handleTeamSelectionChange}>
            {
                teams.map(team => (
                    <option value={team} key={team}>{team}</option>
                ))
            }
          </select>
    )
}

export default TeamsOption