import { StyledButton } from "./index.styles";

export const Button = (props) => {
  const { text, variant = "small", ...rest } = props;
  return (
    <StyledButton variant={variant} {...rest}>
      {text}
    </StyledButton>
  );
};
