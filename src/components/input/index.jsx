import { StyledInput, InputElem } from "./index.styles";

export const Input = (props) => {
  const { label, placeholder, rightValue, disabled, ...rest } = props;
  return (
    <StyledInput>
      {label && <label>{label}</label>}
      <InputElem
        type="text"
        placeholder={placeholder}
        rightValue={rightValue}
        disabled={disabled}
        {...rest}
      />
    </StyledInput>
  );
};
