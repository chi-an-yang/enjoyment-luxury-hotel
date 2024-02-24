import { ReactNode } from 'react';
import { Container, SxProps } from '@mui/material';

const HomePageContainer = ({ children, sx }: { children: ReactNode; sx?: SxProps }) => {
  return (
    <Container maxWidth={'lg'} sx={{ ...sx, minHeight: '100vh' }}>
      {children}
    </Container>
  );
};

export default HomePageContainer;
