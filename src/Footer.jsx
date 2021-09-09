import React from 'react';


const Footer = () => {
    const date = new Date().getFullYear();
    
    return(
        <footer className='w-100  text-center'>
            <p>© {date} DevilZala. All rights Reserved | Terms and Condition Apply</p>
        </footer>
    );
}

export default Footer;