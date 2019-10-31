import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styled';

const Container = styled.div`
    background: red;
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Container> Jefferson website =D </Container>
        </>
    );
};

export default App;
