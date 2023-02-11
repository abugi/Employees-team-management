const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header className='text-center'>
            <h1 className='font-medium text-2xl leading-loose'>Team member allocation</h1>
            <h3>{selectedTeam} has {teamMemberCount} members</h3>
        </header>
    )
}

export default Header