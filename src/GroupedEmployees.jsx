
const GroupedEmployees = ({employees, teams}) => {
    const toggleTeamCollapse = event => {
        const collapsiblePanel = document.getElementById(event.target.textContent)
        const classesArray = [...collapsiblePanel.classList] 

        classesArray.includes('hidden') ? collapsiblePanel.classList.remove('hidden') : collapsiblePanel.classList.add('hidden')
    }

    return (
        <main>
            {
                teams.map(team => (
                    <ul className='text-center' key={team}>
                        <li className='border-2 border-gray-200 p-0 my-4 rounded-lg' onClick={toggleTeamCollapse}>
                            <div className='shadow-md p-2 rounded-lg'>{team}</div>
                            <div id={team} className='text-sm hidden'>
                                {
                                    employees.filter(member => member.teamName === team)
                                    .map(member => (
                                        <div className='my-4' key={member.id}>
                                            <div className='font-medium'>Full Name: {member.fullName}</div>
                                            <div>Designation: {member.designation}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </li>
                    </ul>
                ))
            }
        </main>
    )
}

export default GroupedEmployees