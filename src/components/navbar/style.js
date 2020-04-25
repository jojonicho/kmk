import styled from "styled-components";
// import hamburger from "../../asset/hamburger.svg";


export const NavbarContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  a {
    text-decoration: none;
    color: black;
  }
  h2 {
    margin: auto;
  }
  .menu-item{
    padding-left: 25px;
    padding-right: 25px;
    height: 60px;
    cursor: pointer;
  }

  nav{
    position: ${props => (props.show && props.pos ?  "fixed" : "absolute" )};
    background: ${props => (props.show && props.pos ?  "white" : "transparent" )};
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 10px;
    justify-content: space-between;
    transition: background 500ms ease-in-out, left 500ms linear;
  }
  
  .menu{
    float: right;
    display: flex;
    align-items: center;
  }

  .menu-item:hover{
    // color: 333333;
    color: ${props => (props.show ?  "white" : "black" )};
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    // background: white;
  }
  .hamburger {
    display: none;
  }
  .no-decor {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .notShown {
    transform: translateY(-100vh);
  }
  .footer {
    width: 100%;
    display:flex;
    align-items: center;
    position: absolute;
    height: 5vw;
    background: '#07152e';

    p {
      margin: auto;
      text-align: center;
      font-size: 0.8rem;
    }
  }

  .logo {
    height: 50px;
    transition: transform 300ms ease-in-out;
  }
  .logo:hover {
    transform: scale(1.1);
  }
  .logo-sidebar{
    width: 100%;
  }

  .childcontainer {
    padding-top: 60px;
  }
  .no-padding-top {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .daftar {
    font-weight: bold;
    font-size: 1em;
    color: 333333;
    transform: translateY(+100%);
  }
`;
