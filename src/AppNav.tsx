import { Button, Navbar } from 'react-daisyui'
import { NavLink } from 'react-router-dom'

const AppNav = () => {
    return (
        <Navbar className="px-2 py-1">
            <NavLink to="/" className="link">
                <Button>Home</Button>
            </NavLink>
        </Navbar>
    )
}

export default AppNav
