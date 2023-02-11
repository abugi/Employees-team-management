import FemaleProfile from './assets/femaleProfile.jpg'
import MaleProfile from './assets/maleProfile.jpg'

const TeamMemberCard = ({employee, handleEmployeeTeamSelection, selectedTeam}) => {
    return (
        <div id={employee.id} className='w-full shadow-md rounded-md text-sm text-center pb-4 cursor-pointer' style={employee.teamName === selectedTeam ? {border: '2px solid red'} : {border: '1px solid #eee'}} onClick={handleEmployeeTeamSelection}>
            <img src={employee.gender === 'female' ? FemaleProfile : MaleProfile} alt={employee.fullName} className='w-full rounded-t-md'  />
            <h1 className='py-1 px-3 font-medium text-base'>
            {employee.fullName}</h1>
            <div className='px-3'>
                {employee.designation}</div>
        </div>
    )
}

export default TeamMemberCard