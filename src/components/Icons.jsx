import * as React from 'react';
import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';

const StyledBadge = styled(Badge)(({ theme }) => ({
  [`& .${Badge.badge}`]: {
    top: -12,
    right: -6,
  },
}));

export function IconButtonWithBadge() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={2} color="primary" overlap="circular">
        <ShoppingCartIcon fontSize="large" />
      </StyledBadge>
    </IconButton>
  );
}

export function AccountCircle() {
  return (
    <IconButton aria-label="account" >
      <AccountCircleIcon fontSize="large" />
    </IconButton>
  );
}

export function LoadingIconButton() {
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    });
    return (
      <Tooltip title="Click to see loading">
        <IconButton onClick={() => setLoading(true)} loading={loading}
          sx ={{
              fontSize: '3rem',
              padding: '12px',
              '& .MuiSvgIcon-root':{
                  fontSize: '2rem'
              }
  
          }}>
          <ShoppingCartIcon />
        </IconButton>
      </Tooltip>
    );
  }