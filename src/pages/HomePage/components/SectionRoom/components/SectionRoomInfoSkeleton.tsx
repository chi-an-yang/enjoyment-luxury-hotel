import { useTheme, Skeleton, useMediaQuery } from '@mui/material';

const SectionRoomInfoSkeletonDesktop = () => {
  const { palette } = useTheme();
  return (
    <>
      <Skeleton
        variant="text"
        sx={{
          width: '100%',
          fontSize: '40px',
          color: palette.neutral[0],
          bgcolor: 'grey.900',
          mb: 2,
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          width: '100%',
          fontSize: '16px',
          color: palette.neutral[0],
          bgcolor: 'grey.900',
          mb: 5,
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          width: '100%',
          fontSize: '32px',
          color: palette.neutral[0],
          bgcolor: 'grey.900',
          mb: 5,
        }}
      />
      <Skeleton
        variant="rounded"
        sx={{
          width: '100%',
          maxWidth: '628px',
          height: '116px',
          borderRadius: '8px',
          bgcolor: 'grey.900',
          mb: 5,
        }}
      />
    </>
  );
};

const SectionRoomInfoSkeletonMobile = () => {
  const { palette } = useTheme();
  return (
    <>
      <Skeleton
        variant="text"
        sx={{
          width: '100%',
          fontSize: '28px',
          color: palette.neutral[0],
          bgcolor: 'grey.900',
          mb: 2,
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          width: '100%',
          fontSize: '14px',
          color: palette.neutral[0],
          bgcolor: 'grey.900',
          mb: 3,
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          width: '100%',
          fontSize: '16px',
          color: palette.neutral[0],
          bgcolor: 'grey.900',
          mb: 3,
        }}
      />
      <Skeleton
        variant="rounded"
        sx={{
          width: '100%',
          maxWidth: '351px',
          height: '64px',
          borderRadius: '8px',
          bgcolor: 'grey.900',
          mb: 3,
        }}
      />
    </>
  );
};

const SectionRoomInfoSkeleton = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? <SectionRoomInfoSkeletonDesktop /> : <SectionRoomInfoSkeletonMobile />;
};

export default SectionRoomInfoSkeleton;
