import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Nav() {
  return (
    <div style = {{backgroundColor: 'rgba(255, 255, 255, 0.2)', height:50, borderRadius:5
    }}>
      <ButtonGroup
        aria-label="Basic button group"
        style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 40}}
      >
        <Link to='/'>
          <Button style={{ color: '#552a6f', border: 'none' ,fontSize:25}}>Home</Button>
        </Link>
        <Link to='/about'>
          <Button style={{ color: '#da3d85', border: 'none', fontSize:25 }}>About</Button>
        </Link>
        <Link to='/contact'>
          <Button style={{ color: '#f67f72', border: 'none', fontSize:25 }}>Resume</Button>
        </Link>
        <Link to='/projects'>
          <Button style={{ color: '#fcac3f', border: 'none', fontSize:25 }}>Projects</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}


