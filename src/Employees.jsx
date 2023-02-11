import TeamsOption from './TeamsOptions'
import TeamMemberCard from './TeamMemberCard'

const Employees = ({employees, selectedTeam, handleTeamSelectionChange, handleEmployeeTeamSelection, teams}) => {
 
    return (
        <main>
          <TeamsOption handleTeamSelectionChange={handleTeamSelectionChange} selectedTeam={selectedTeam} teams={teams} />
          <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
            { employees.map(employee => (
                <TeamMemberCard key={employee.id} employee = {employee} handleEmployeeTeamSelection = {handleEmployeeTeamSelection} selectedTeam = {selectedTeam} />
            )) }
          </div>
        </main>
    )
}

export default Employees