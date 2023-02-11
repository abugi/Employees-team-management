import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav className='bg-red-100 text-red-600 font-medium text-lg text-center sticky top-0'>
            <ul className='flex items-center justify-center'>
                <li className='py-6 px-10'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='py-3 px-10'>
                    <Link to='/grouped'>Teams</Link>
                </li>
            </ul>
        </nav>
    )
}