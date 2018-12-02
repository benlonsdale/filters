import React from 'react';
import styled from "styled-components";

export default ({ id, label, ...props }) => {
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <input type="checkbox" id={id} {...props} />
        </Container>
    );
};

const Container = styled.div`

`