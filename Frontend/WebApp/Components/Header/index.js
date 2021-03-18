import React from 'react';
import styled from 'styled-components';
import TodoCounter from 'Components/TodoCounter/index.js';
import TodoFilterButton from 'Components/TodoFilterButton';
import ClearCompletedButton from 'Components/ClearCompletedButton';

const HeaderContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 40px;
    padding: 0 35px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
        padding: 0 10px;
    }
`;

function Header() {
    return (
        <HeaderContainer className="todo-counter-container">
            <ClearCompletedButton />
            <TodoFilterButton />
            <TodoCounter />
        </HeaderContainer>
    );
}

export default Header;
