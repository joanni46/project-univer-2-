import { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

function Avtoriz() {
    return(
        <StyledAvtoriz>
            <h1>avtorization</h1>
            <div>
                <button>ok</button>
            </div>
        </StyledAvtoriz>
    );
}

export default Avtoriz


const StyledAvtoriz = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: pink;
    
`;


