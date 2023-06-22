import { styled } from '@mui/system';

export const StyledMainContainerV2 = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const StyledSmMarginV2 = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const StyledActionDivV2 = styled('div')({
  textAlign: 'center',
});
