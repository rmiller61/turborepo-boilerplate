import { StyledComponent } from '@emotion/styled';
import { Box, styled, colors, alpha } from '@mui/material';
import React from 'react';

export const TiltContent: StyledComponent<{ sx: any; children: React.ReactNode }> = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: alpha(colors.blue[300], 0.17),
  [theme.breakpoints.down('tablet')]: {
    backgroundColor: theme.palette.warning.light,
  },
  padding: '50px 40px',
  borderRadius: '5px',
  boxShadow: theme.shadows[3],
}));
