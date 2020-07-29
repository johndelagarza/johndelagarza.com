import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    text-align: ${({ alignText })=> alignText || 'left'};
    width: ${({ fluid })=> fluid ? '100%!important' : ''};
    
    @media ${({ theme }) => theme.mediaQueries.below768} {
        width: auto!important;
        margin-left: 1em;
        margin-right: 1em;
    }
    @media ${({ theme }) => theme.mediaQueries.over768} {
        width: 723px;
        margin-left: auto!important;
        margin-right: auto!important;
    }
    @media ${({ theme }) => theme.mediaQueries.below1200} {
        width: 933px;
        margin-left: auto!important;
        margin-right: auto!important;
    }
    @media ${({ theme }) => theme.mediaQueries.over1200} {
        width: 1127px;
        margin-left: auto!important;
        margin-right: auto!important;
    }
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Button = styled.a`
    display: inline-block;
    min-height: 1em;
    outline: 0;
    vertical-align: baseline;
    margin: 0 .25em 0 0;
    padding: .78em 1.5em .78em;
    font-weight: 700;
    line-height: 1em;
    text-align: center;
    border-radius: 100px;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
    font-weight: 600;
    color: ${({theme})=> theme.colors.body};
    background-color: ${({theme})=> theme.colors.text};
    cursor: pointer;

    @media ${({ theme }) => theme.mediaQueries.below768} {
        font-size: 15px;
    }
`;

const StyledMenuList = styled.ul`
    padding: 0;
    cursor: pointer;
    display: flex;
    list-style: none;
    height: 100%;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
`;

export const MenuList = ({ children }) => {
    return (
        <StyledMenuList>
            {children}
        </StyledMenuList>
    )
};

export const MenuItem = ({ children, href }) => {
    return (
        <StyledMenuItem href={href}>
            {children}
        </StyledMenuItem>
    )
};

const StyledMenuItem = styled.a`
    margin: 30px;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: ${({theme})=> theme.colors.text};
    text-decoration: none;
    @media ${({ theme }) => theme.mediaQueries.below768} {
        margin: 6px;
    }
`;

export const Menu = ({ children }) => {
    return (
        <StyledMenu>
            <MenuList>
                {children}
            </MenuList>
        </StyledMenu>
    )
};

const StyledMenu = styled.div`
    display: flex;
    margin: auto;
    text-align: center;
    min-height: 10vh;
    width: 100%;
    align-items: center;
`;

export const Section = styled.section`
    flex-direction: row;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Icon = styled.svg`
    height: 30px;
    width: 30px;
    fill: ${({ theme }) => theme.colors.background};
    margin: 20px;
    opacity: .66;

    :hover {
        opacity: .3;
    }
`;

export const ProfilePic = styled.img`
    max-width: 500px;
    max-height: 500px;
    width: 100%;
    height: auto;
    border-radius: 500rem;
    object-fit: cover;
    object-position: 70%;

    @media ${({ theme }) => theme.mediaQueries.below768} {
        height: 300px;
        width: 300px;
    }
`;

export const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    align-items: center;
    

    @media ${({ theme }) => theme.mediaQueries.below768} {
        display: inline-block;
        width: auto;
    }
`;

export const Column = styled.div`
    text-align: center;

    @media ${({ theme }) => theme.mediaQueries.below768} {
        display: inline-block;
        width: 100%;

        h1 {
            margin-top: 35px;
            text-align: center;
            font-size: 15px;
            margin-left: 0px;
        }
    }
`;

export const Header = styled.h1`
    margin: 0;  
    text-align: ${({ alignText })=> alignText || 'center'};
    font-size: ${({ size, theme })=> theme.fontSizes[size] || '26px'};
`;

export const FluidImg = styled.img`
    max-height: ${({ maxHeight })=> maxHeight || ''};
    max-width: ${({ maxWidth })=> maxWidth || ''};
    width: 100%;
    height: auto;

    @media ${({ theme }) => theme.mediaQueries.below768} {
        height: 300px;
        width: 300px;
    }
`;

// const StyledToggle = ({ className, children }) => (
//     <label class="switch">
//         <input class="checkbox"/>
//         <span class="slider-round"/>
//     </label>
//   );
  
// export const Toggle = styled(StyledToggle)`
//     .switch {
//         position: relative;
//         display: block;
//         width: 90px;
//         height: 55px;
//         margin-bottom: 30px;
//     }
//     .slider-round {
//         position: absolute;
//         cursor: pointer;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: white;
//         transition: .5s;
//         border: 3px solid white;
//         box-shadow: 1px 1px 1px rgba(0,0,0,.1);
//     }
// `;