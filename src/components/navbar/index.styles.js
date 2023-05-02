import styled from "styled-components";

export const NavigationContainer = styled.div`
  background-color: #0b0819;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1276px;
    margin: 0 auto;
    height: 6.9rem;
    padding: 0 20px;
  }
  .logo {
    width: 12rem;
  }

  .connect-btn {
    background: linear-gradient(94.37deg, #3387d5 -5.94%, #7a06c9 115.34%);
    border-radius: 30px;
    font-size: 1.6rem;
    border: none;
    color: #fff;
    font-family: inherit;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
  }

  nav {
    a {
      margin-top: 20px;
      text-decoration: none;
      font-size: 1.6rem;
      color: #5a5a5a;

      margin-right: 5rem;

      height: 42px;
      display: inline-block;
    }

    .active {
      border-bottom: 2px solid #627eea;
      color: #627eea;
      font-weight: 600;

      text-align: center;
    }
  }
  .menu_icon {
    font-size: 30px;
  }
  @media (max-width: 800px) {
    .desktop {
      display: none;
    }
  }
  @media (min-width: 800px) {
    .mobile-menu {
      display: none;
    }
  }
`;
export const DrawerContent = styled(NavigationContainer)`
  min-width: 250px;
  background: #040406;

  position: relative;
  border: 1px solid rgba(110, 86, 248, 0.25);
  height: 100%;
  padding: 30px;
  .mobile-nav-links {
    display: flex;
    flex-direction: column;
  }
  .mobile-connect-btn {
    margin-top: 50px;
  }
  ul {
    display: flex;
    flex-direction: column;
    a {
      width: fit-content;
    }
  }
 
`;

export const ModalCloseButton = styled.button`
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 12px;
`;
