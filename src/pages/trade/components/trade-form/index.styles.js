import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 470px;
  margin: 14.6rem auto;
  background: #0b0819;
  border-radius: 1.8rem;
  border: 1px solid rgba(110, 86, 248, 0.25);

  

  .token-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-40px);

    img {
      width: 70px;
      background: #1c1731;
      padding: 10px;
      border-radius: 50%;
      border: 6px solid #040406;
    }
  }
  .inner {
    padding: 0 4rem 4rem 4rem;
  }
  @media(max-width:800px){
    margin: 5rem auto;
  }
`;

export const Spacer = styled.div`
  margin-bottom: 2.4rem;
`;
