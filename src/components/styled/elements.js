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
    font-style: normal;
    text-align: center;
    border-radius: 100px;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
    font-weight: 600;
    color: ${({theme})=> theme.colors.black};
    background: ${({theme})=> theme.colors.white};
    cursor: pointer;
`;

export const Menu = styled.div`
    display: flex;
    position: sticky;
    margin: auto;
    text-align: center;
    min-height: 10vh;
    width: 100%;
    align-items: center;
    ul {
        padding: 0;
        cursor: pointer;
        display: flex;
        list-style: none;
        height: 100%;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
    }
    
    a {
        margin: 30px;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
        color: ${({theme})=> theme.colors.black};
        text-decoration: none;
    }

    img.profile-pic {
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    
    align-items: center;

    img.profile-pic {
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
    }
`;

export const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 50% 50%;
    align-items: center;
    column {
        text-align: center;
        h1 {
            text-align: left;
            font-size: 26px;
            margin-left: 10px;
        }
        @media ${({ theme }) => theme.mediaQueries.below768} {
            display: inline-block;
            width: 100%;

            h1 {
                margin-top: 35px;
                text-align: center;
                font-size: 15px;
            }
        }
    }

    @media ${({ theme }) => theme.mediaQueries.below768} {
        display: inline-block;
        width: auto;
    }
`;