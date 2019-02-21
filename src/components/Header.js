import React from 'react'

const Header = () => {
    const style = {
        
        header: {
            padding: '15px',
            background: 'grey',
            color: 'white',
            fontSize: '20px',
        }
    };
    return (
        <div style={style.header}>
            All campaigns
        </div>
    )
}

export default Header;