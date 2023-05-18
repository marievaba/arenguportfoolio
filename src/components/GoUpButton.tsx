import React from 'react';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

export const GoUpButton = () => {
  const [isScrolledDown, setIsScrolledDown] = React.useState(false);

  const onScroll = (e: Event) => {
    const window = e.currentTarget as Window;
    if (!isScrolledDown && window.scrollY > 900) {
      setIsScrolledDown(true);
    }
    if (isScrolledDown && window.scrollY <= 900) {
      setIsScrolledDown(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  });

  return (isScrolledDown 
    ? <KeyboardArrowUpOutlinedIcon
      className="go-up-button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    />
    : null
  );
}