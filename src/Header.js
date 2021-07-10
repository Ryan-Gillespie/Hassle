import React from 'react'
import styled from 'styled-components'

export default function Header() {
    const style = {
        height: '100px',
        backgroundColor: '#153243',

    }
    const Title = styled.h1`
        font-size: 72px;
        color: #fff;
        padding: 8px;
        padding-left: 15px;
        font-family: "Segoe UI";
    `;

    return (
        <div style={style}>
            <Title>Hassle</Title>
        </div>
    )
}
