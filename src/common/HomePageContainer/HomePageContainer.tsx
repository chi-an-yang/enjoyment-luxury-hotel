import { ReactNode } from 'react';
import { Container, SxProps } from '@mui/material';

const HomePageContainer = ({ children, sx }: { children: ReactNode; sx?: SxProps }) => {
  return (
    <Container maxWidth={'lg'} disableGutters sx={{ minHeight: '100vh', ...sx }}>
      {children}
    </Container>
  );
};

export default HomePageContainer;
