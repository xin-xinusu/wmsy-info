import { COLORS } from "../../utils";
import { Input, InputFieldContainer, Label } from "./InputFieldStyles";

export const InputField = (props) => {
  const {
    label,
    name,
    fullWidth = true,
    placeholder,
    disabled = false,
    type = "text",
    value = undefined,
    onChange = undefined,
    ...rest
  } = props;

  const getWidth = () => {
    if (fullWidth) {
      return "100%";
    }
    return "auto";
  };

  const getMargin = () => {
    if (label) {
      return "15px";
    }
    return "0";
  };

  const getColor = () => {
    if (disabled) {
      return `${COLORS.LILAC_GREY}`;
    } else {
      return `${COLORS.DARK_PURPLE}`;
    }
  };

  const getCursor = () => {
    if (disabled) {
      return "not-allowed";
    } else {
      return "text";
    }
  };

  return (
    <InputFieldContainer width={getWidth()}>
      {label && (
        <Label htmlFor={name} color={getColor()}>
          {label}
        </Label>
      )}
      <Input
        id={name}
        placeholder={placeholder}
        type={type}
        margin={getMargin()}
        disabled={disabled}
        border={getColor()}
        cursor={getCursor()}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </InputFieldContainer>
  );
};
