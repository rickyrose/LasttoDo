import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Cross } from 'assets/Icons/cross.svg';
import { ReactComponent as Success } from 'assets/Icons/success.svg';

const TodoCounterContainer = styled.div`
    display: flex;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-left: -80px;
        margin-top: -65px;
    }
`;

const TodoCounterItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TodoCounterText = styled.div`
    font-size: 20px;
    margin: 5px 10px 5px 5px;
    user-select: none;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 16px;
        margin: 5px 8px 5px 5px;
    }
`;

function TodoCounterComponent({ completed, uncompleted }) {
    return (
        <TodoCounterContainer>
            <TodoCounterItem>
                <Success className="counter-icon" />
                <TodoCounterText>{completed}</TodoCounterText>
            </TodoCounterItem>
            <TodoCounterItem>
                <Cross className="counter-icon" />
                <TodoCounterText>{uncompleted}</TodoCounterText>
            </TodoCounterItem>
        </TodoCounterContainer>
    );
}

TodoCounterComponent.propTypes = {
    completed: PropTypes.number.isRequired,
    uncompleted: PropTypes.number.isRequired,
};

export default TodoCounterComponent;
