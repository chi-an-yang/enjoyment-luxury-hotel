const useNavbarListStyle = () => {
  const navbarListStyle = {
    flexGrow: 0,
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    '.reservation': {
      width: '128px',
      height: '56px',
      display: 'flex',
      padding: '16px 32px',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px',
    },
  };
  return navbarListStyle;
};

export default useNavbarListStyle;
