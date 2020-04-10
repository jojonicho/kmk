import styled from "styled-components";
export const AppContainer = styled.div`
    min-height: 100vh;
    // padding: 10px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    // background: #e5e5e5;

    .title {
    font-size: 62px;
    /* font-size: 2.5em; */
    // color: 333333;
    margin-bottom: 70px;
    }
    @media only screen and (max-width: 840px) {
        padding-bottom: 50px;
        .title {
            font-size: 33px;
            margin-bottom: 50px;
        }
    }
`