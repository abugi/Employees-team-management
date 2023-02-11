import TeamsOption from './TeamsOptions'
import TeamMemberCard from './TeamMemberCard'

const Employees = ({employees, selectedTeam, handleTeamSelectionChange, handleEmployeeTeamSelection, teams}) => {
 
    return (
        <main>
          <TeamsOption handleTeamSelectionChange={handleTeamSelectionChange} selectedTeam={selectedTeam} teams={teams} />
          <div className='grid grid-cols-3 gap-6'>
            { employees.map(employee => (
                <TeamMemberCard key={employee.id} employee = {employee} handleEmployeeTeamSelection = {handleEmployeeTeamSelection} selectedTeam = {selectedTeam} />
            )) }
          </div>
        </main>
    )
}

export default Employees