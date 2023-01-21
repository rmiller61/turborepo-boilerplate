import { StyledComponent } from '@emotion/styled';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { shouldForwardProp } from 'utils-mui';

import { ButtonProps } from './';

export const ButtonStyled: StyledComponent<ButtonProps> = styled(Button, {
  shouldForwardProp: (prop) => shouldForwardProp<ButtonProps>(['isDisabled', 'bgColor'], prop),
})<ButtonProps>(({ theme, isDisabled, size, bgColor }) => ({
  width: isDisabled ? '100%' : undefined,
  color: size === 'small' ? theme.palette.secondary.main : undefined,
  backgroundColor: bgColor,
  '&.Mui-disabled': {
    color: theme.brand.green,
    backgroundColor: theme.palette.grey[600],
  },
}));
