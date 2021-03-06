const fontSizes = {
    large: '40px',
    medium: '26px',
    small: '16px'
};

const mediaQueries = {
    below768: 'only screen and (max-width: 767px)',
    over768: 'only screen and (max-width: 991px) and (min-width: 768px)',
    below1200: 'only screen and (max-width: 1199px) and (min-width: 992px)',
    over1200: 'only screen and (min-width: 1200px)'
};

export const lightTheme = {
    colors: {
        body: '#FFF',
        text: '#363537',
        toggleBorder: '#FFF',
        background: '#363537'
    }, 
    fontSizes: fontSizes,
    mediaQueries: mediaQueries
};

export const darkTheme = {
    colors: {
        body: '#363537',
        text: '#FAFAFA',
        toggleBorder: '#6B8096',
        background: '#999',
    }, 
    fontSizes: fontSizes,
    mediaQueries: mediaQueries
};