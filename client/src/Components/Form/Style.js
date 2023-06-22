import { Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';

export const StyledRoot = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));
export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledFileInput = styled('div')({
  width: '97%',
  margin: '10px 0',
});

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));