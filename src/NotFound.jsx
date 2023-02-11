import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <main className='text-center my-24 '>
            <h1 className='text-8xl text-red-600 font-medium'>Ooops!!</h1>
            <p className='my-14 text-4xl'>Looks like you hit the wrong route 😜</p>
            <Link to='/' className='text-blue-600 underline text-xl font-medium'>Go Back Home</Link>
        </main>
    )
}

export default PageNotFound