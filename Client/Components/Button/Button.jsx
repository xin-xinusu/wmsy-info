import React from 'react';
import { COLORS } from '../../utils/constants';
import { StyledButton } from './ButtonStyles';
import { ButtonSizes } from './button.standards';

export const Button = ({
  id,
  children,
  onClick,
  color = COLORS.DARK_PURPLE,
  size = ButtonSizes.M,
  disabled = false,
  fullWidth = false,
}) => {
  const getPadding = () => {
    switch (size) {
      case ButtonSizes.XS2:
        return '0.6875rem 1.5rem 0.8125rem 1.5rem';
      case ButtonSizes.XS3:
        return '0.46875rem 0.5625rem 0.46875rem 0.5625rem';
      case ButtonSizes.XS:
        return '.8rem .5rem .7rem .5rem';
      case ButtonSizes.M:
        return '1.125rem 1rem 1rem 1rem';
      case ButtonSizes.L:
        return '1.125rem 1.375rem 1rem 1.375rem';
      default:
        return '.75rem .625rem .625rem .625rem';
    }
  };

  const getWidth = () => {
    if (fullWidth) {
      return '100%';
    }
    return 'fit-content';
  };

  return (
    <StyledButton
      id={id}
      onClick={onClick}
      disabled={disabled}
      padding={getPadding()}
      backgroundColor={color}
      width={getWidth()}
    >
      {children}
    </StyledButton>
  );
};

