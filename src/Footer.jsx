const Footer = () => {

    const currentDate = new Date().getFullYear()

    return (
        <footer>
            <h1 className='text-center py-12'>Team member allocation app - {currentDate}</h1>
        </footer>
    )
}

export default Footer