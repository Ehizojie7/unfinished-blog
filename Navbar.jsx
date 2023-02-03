import './Navbar.css';

const Navbar = () =>{
    return(
        <div className="navbar">
            <h2><span style={{color: 'lightseagreen'}}>Blog</span><span style={{color: 'white'}}>Nation</span></h2>
            <div className='nav'>
            <a href="/">Home</a>
            <a href="/create">Create</a>
            </div>
            
            

        </div>
    )
}

export default Navbar;