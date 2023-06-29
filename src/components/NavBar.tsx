import logo from '../assets/graphics/logo.svg';

function NavBar() {
    return (
        <nav className='flex flex-row items-center justify-around p-4'>
            <div className='flex flex-row justify-center items-center gap-4'>
                <a href="/" title='Homepage for Forge website'>
                    <img src={logo} alt='Forge logo in orange' className='h-[55px]' />
                </a>
                <h1 className=''>forge</h1>
            </div>
            <div className='flex flex-row gap-8'>
                <a><h2>About</h2></a>
                <a><h2>Projects</h2></a>
                <a><h2>Team</h2></a>
                <a><h2>Apply</h2></a>
            </div>
        </nav>
    );
}

export default NavBar;