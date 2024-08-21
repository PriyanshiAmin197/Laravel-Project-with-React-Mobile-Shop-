import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'

function Header() {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user-info'));
    // console.warn(user)

    function logout()
    {
        localStorage.clear();
        history.push('/register')
    }
    return (
        <div className="">
            <Navbar bg="dark" data-bs-theme="dark">
                {/* <Navbar.Brand href="#home" className='mx-4'>Mobile Store</Navbar.Brand> */}
                <img className='mx-4' style={{width:80}} src='https://image.similarpng.com/very-thumbnail/2020/11/Mobile-shop-logo-design-on-transparent-background-PNG.png'/>
                <Nav className="font  navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                        <>
                            <Link to="/">Product List</Link>
                            <Link to="/add">Add Products</Link>
                            <Link to="/update">Update Products</Link>
                            <Link to="/search">Search Product</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    }
                </Nav>

                {localStorage.getItem('user-info') ?
                <Nav className='navbar_wrapperr'>
                    
                    <NavDropdown  title={user && user.name} >
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </NavDropdown>
                    <img style={{width:60}} src='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'/>
                </Nav>
                : null
                }
            </Navbar>
        </div>
    )
}

export default Header