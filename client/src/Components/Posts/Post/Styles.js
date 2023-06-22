import { styled } from '@mui/system';

export const StyledMedia = styled('div')({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
});

export const StyledBorder = styled('div')({
  border: 'solid',
});

export const StyledFullHeightCard = styled('div')({
  height: '100%',
});

export const StyledCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
});

export const StyledOverlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

export const StyledOverlay2 = styled(StyledOverlay)({
  right: '20px',
  left: 'auto',
});

export const StyledGrid = styled('div')({
  display: 'flex',
});

export const StyledDetails = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

export const StyledTitle = styled('div')({
  padding: '0 16px',
});

export const StyledCardActions = styled('div')({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});
