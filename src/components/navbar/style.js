import styled from "styled-components";
// import hamburger from "../../asset/hamburger.svg";

export const HeaderFooterContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  a {
    text-decoration: none;
    color: white;
  }
  a:visited { text-decoration: none; color:333333; }
  a:hover { 
    text-decoration: none; 
  }
  a:focus { text-decoration: none; color:#0D2040; }
  a:hover, a:active { text-decoration: none; color:black }
  h2 {
    margin: auto;
  }
  .menu-item{
    padding-left: 25px;
    padding-right: 25px;
    height: 60px;
    cursor: pointer;
  }
  .header{
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 20px;
    justify-content: space-between;
  }
  .menu{
    display: flex;
    align-items: center;
  }
  .menu-item:hover{
    color: 333333;
    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    background-color: #D1E9D6;
  }
  .hamburger {
    display: none;
  }
  .links {
    display: flex;
    .link {
      margin: 0 10px;
    }
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
  .links-mobile {
    transition: 0.3s ease-in-out;
    position: fixed;
    z-index: 105;
    top: 0;
    right: 0;
    width: 100vw;
    padding: 20px 20px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    text-align: right;
    background-color: #0d2040;
    .link-mobile {
      margin: 10px 0;
    }
  }
  .footer {
    width: 100%;
    display:flex;
    align-items: center;
    position: absolute;
    height: 5vw;

    p {
      margin: auto;
      // margin-left: 10px;
      text-align: center;
      font-size: 0.8rem;
    }
  }

  .logo {
    height: 50px;
  }
  .childcontainer {
    padding-top: 60px;
  }
  .no-padding-top {
    padding-top: 0px;
  }
  .daftar {
    // font-family: Montserrat;
    font-weight: bold;
    font-size: 1em;
    color: 333333;
    transform: translateY(+100%);
  }
  .button-menu {
    padding: 15px;
    color: #e5e6de;
    text-align: center;
  }
  .button-menu:hover {
    background-color: #07152e;
  }
  .dropdown-item {
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
  }
  .button-menu:hover .dropdown-item {
    color: #f2cf35;
  }
  @media only screen and (max-width: 450px) {
    .logo {
      height: 45px;
    }
    .dropdown-mobile {
      display: inline-block;
    }
    .dropdown {
      display: none;
    }
    .dropdown-mobile-item {
      font-size: 0.93em;
    }
  }
`;
