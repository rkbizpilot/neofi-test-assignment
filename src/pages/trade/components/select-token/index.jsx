import { LabelContainer, StyledSelcect } from "./index.styles";

export const SelectToken = (props) => {
  const {
    label = "Current Value",
    value = "2548714",
    coinSelected,
    onClick,
  } = props;
  return (
    <>
      <LabelContainer>
        <label>{label}</label>
        <p>₹{value}</p>
      </LabelContainer>
      <StyledSelcect onClick={onClick}>
        <div className="container">
          <div className="left">
            <img src={coinSelected?.image} alt="coin" />
            <p className="token-name">{coinSelected?.name}</p>
          </div>
          <div className="right">
            <i className="fa-sharp fa-solid fa-caret-down"></i>
          </div>
        </div>
      </StyledSelcect>
    </>
  );
};
