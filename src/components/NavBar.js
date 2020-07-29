import React from 'react'
import { Menu, MenuItem, Button } from '../components/styled/elements';

function NavBar(props) {

    return (
        <div>
            <Menu>
                <MenuItem href="#projects">Projects</MenuItem>
                <MenuItem href="#about">About</MenuItem>
                <MenuItem href="#contact">Contact</MenuItem>
                <MenuItem >
                    <Button onClick={()=> props.changeTheme()}>
                        {props.theme === 'light' ? 'Dark' : 'Light'}
                    </Button>
                </MenuItem>
            </Menu>
        </div>
    )
};

export default NavBar;