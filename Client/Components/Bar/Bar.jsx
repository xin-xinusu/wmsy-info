import React, { useState } from 'react';
import Arrow from '../../../assets/svg/Arrow.svg';
import { COLORS } from '../../utils/constants';
import { TVariant, TWeight, Typography } from '../Typography';
import { ArrowContainer, BarContainer, ContentBarContainer } from './BarStyles';

const Bar = (props) => {
  const {
    children,
    label,
    variant = 'dark',
    fullWidth = false,
    collapsible = true,
  } = props;

  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    collapsible && setOpen(!open);
  };

  const getWidth = () => {
    if (fullWidth) {
      return '100%';
    }
    return 'auto';
  };

  return (
    <ContentBarContainer width={getWidth()}>
      <BarContainer variant={variant} collapsible={collapsible} onClick={toggleOpen}>
        <Typography weight={TWeight.BOLD} variant={TVariant.XM} color={COLORS.WHITE}>
          {label}
        </Typography>

        {collapsible && (
          <ArrowContainer open={open}>
            <Arrow fill={COLORS.WHITE} />
          </ArrowContainer>
        )}
      </BarContainer>
      {open && children}
    </ContentBarContainer>
  );
};

export default Bar;
