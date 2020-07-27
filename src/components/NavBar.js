import React from 'react'
import { Menu, Button } from '../components/styled/elements';

function NavBar() {
    return (
        <Menu>
            <ul>
                <li><a data-page="about">About</a></li>
                <li><a data-page="projects">Projects</a></li>
                <li><a data-page="about">Contact</a></li>
            </ul>
        </Menu>
    )
};

export default NavBar
