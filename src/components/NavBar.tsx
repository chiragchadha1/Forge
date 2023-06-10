import logo from '../assets/graphics/logo.svg';

function NavBar() {
    return (
        <nav className='flex flex-row items-center justify-around p-4'>
            <div className='flex flex-row justify-center items-center gap-4'>
                <a href="/" title='Homepage for Forge website'>
                    <img src={logo} alt='Forge logo in orange' className='h-[100px]' />
                </a>
                <h1 className='text-forge-ornage'>forge</h1>
            </div>
            <div className='flex flex-row gap-8'>
                <a>About</a>
                <a>Projects</a>
                <a>Team</a>
                <a>Apply</a>
            </div>
        </nav>
    );
}

export default NavBar;