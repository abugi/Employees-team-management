import { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import Employees from './Employees'
import Footer from './Footer'
import Header from './Header'
import GroupedEmployees from './GroupedEmployees'
import { Navigation } from './Navigation'
import PageNotFound from './NotFound'
import employeesDB from './db/employees'

const App = () => {
  const teams = ['TeamA', 'TeamB', 'TeamC', 'TeamD']
  
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || employeesDB)

  // Persist data to localstorage
  const [selectedTeam, setTeam] = useState(localStorage.getItem('selectedTeam') || 'TeamB')

  const handleTeamSelectionChange = event => {
    setTeam(event.target.value)
  }

  useEffect(() => localStorage.setItem('employeeList', JSON.stringify(employees)), [employees])
  useEffect(() => localStorage.setItem('selectedTeam', selectedTeam), [selectedTeam])

  const handleEmployeeTeamSelection = event => {
    const targetId = Number(event.currentTarget.id)

    const tramsformedEmployees = employees.map(employee => {
      if(employee.id === targetId && employee.teamName !== selectedTeam) {
        employee.teamName = selectedTeam
      }else if (employee.id === targetId && employee.teamName === selectedTeam) {
        employee.teamName = ''
      }

      return employee
    })

    setEmployees(tramsformedEmployees)
  }

  return (
    <>
      <Navigation />
      <main className='max-w-2xl mx-auto mt-24'>
        <Header selectedTeam={selectedTeam} teamMemberCount={employees.filter(members => members.teamName == selectedTeam).length } />
        <Routes>
          <Route path="/" element={<Employees 
            employees={employees} 
            selectedTeam={selectedTeam} 
            handleTeamSelectionChange={handleTeamSelectionChange} 
            handleEmployeeTeamSelection={handleEmployeeTeamSelection} 
            teams = {teams} />}
          />
          <Route path='/grouped' element={<GroupedEmployees employees={employees} teams={teams} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>  
        <Footer />
      </main>
    </>
  )
}


export default App