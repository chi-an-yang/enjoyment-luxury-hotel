const useNavMenuListStyle = () => {
  const navMenuListStyle = {
    flex: '1 0 auto',
    display: 'flex',
    position: 'fixed',
    top: '50%',
    left: '-50px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 16px',
    opacity: 0,
    width: 0,
    transform: 'translateY(-50%)',
    transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    '&.open': {
      left: 0,
      opacity: 1,
      width: '100%',
    },
  };
  return navMenuListStyle;
};

export default useNavMenuListStyle;
