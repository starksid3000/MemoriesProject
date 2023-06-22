import { styled } from '@mui/system';

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const StyledPaper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledFileInput = styled('input')({
  width: '97%',
  margin: '10px 0',
});

export const StyledButton = styled('button')({
  marginBottom: 10,
});
