import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';

export default function Nav() {
  const buttonStyle = {
    borderRadius: 5,
    fontSize: 20,
    margin: 5,
    border: '1px solid white',
  };

  const hoverStyle = {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'white',
    },
  };

  return (
    <div>
      <ButtonGroup
        aria-label="Basic button group"
        style={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        <Tooltip title="Home" arrow>
          <Link to='/'>
            <Button
              style={{ ...buttonStyle, color: '#552a6f' }}
              sx={hoverStyle}
            >
              HOME
            </Button>
          </Link>
        </Tooltip>
        <Tooltip title="About" arrow>
          <Link to='/about'>
            <Button
              style={{ ...buttonStyle, color: '#da3d85' }}
              sx={hoverStyle}
            >
             ABOUT
            </Button>
          </Link>
        </Tooltip>
        <Tooltip title="Resume" arrow>
          <Link to='/contact'>
            <Button
              style={{ ...buttonStyle, color: '#f67f72' }}
              sx={hoverStyle}
            >
              CONNECT
            </Button>
          </Link>
        </Tooltip>
        <Tooltip title="Projects" arrow>
          <Link to='/projects'>
            <Button
              style={{ ...buttonStyle, color: '#fcac3f' }}
              sx={hoverStyle}
            >
              PROJECTS
            </Button>
          </Link>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}


