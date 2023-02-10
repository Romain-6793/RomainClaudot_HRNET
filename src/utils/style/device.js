const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1920px',
    desktopL: '2560px',
}

export const device = {
    mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileM})`,
    mobileM: `(min-width: ${size.mobileM} and (max-width: ${size.mobileL})`,
    mobileL: `(min-width: ${size.mobileL} and (max-width: ${size.tablet})`,
    tablet: `(min-width: ${size.tablet} and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop} and (max-width: ${size.laptopL})`,
    laptopL: `(min-width: ${size.laptopL} and (max-width: ${size.desktop})`,
    desktop: `(min-width: ${size.desktop} and (max-width: ${size.desktopL})`,
    desktopL: `(min-width: ${size.desktop})`
};


