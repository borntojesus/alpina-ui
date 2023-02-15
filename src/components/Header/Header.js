import Link from 'next/link';

const navigation = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'Masters',
        path: '/master'
    },
    {
        id: 3,
        title: 'Blog',
        path: '/blog'
    },
    {
        id: 4,
        title: 'About',
        path: '/about'
    }
]

const Header = () => (
    <div>

        <div className='header'>
            <div className='container'>
                <div className='header__image'>
                </div>
                <nav className='nav'>
                    <ul>
                        {navigation.map(({id, title, path}) => (
                            <li key={id}><Link href={path}>{title}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>
            <h2>
                header 123
            </h2>
        </div>
        <div className='header is-active'>
            <div className='container'>
                <div className='header__image'>
                </div>
                <nav className='nav'>
                    <ul>
                        {navigation.map(({id, title, path}) => (
                            <li key={id}><Link href={path}>{title}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>
            <h2>
                header
            </h2>
        </div>
    </div>
);

export default Header;