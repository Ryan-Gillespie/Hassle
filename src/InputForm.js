import React from 'react'
import styled from 'styled-components'

export default function InputForm() {
    const Container = styled.div`
        background-color: #C02130;
        width: 220px;
    `;

    return (
        <Container>
            <h3>Insert new Task</h3>
            <form>
                <label>Task</label> <input type="text" name="task"></input>
                <button>+</button>
            </form>
        </Container>
    )
}
