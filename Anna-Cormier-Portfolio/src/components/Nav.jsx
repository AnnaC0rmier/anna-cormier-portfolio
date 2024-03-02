import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Nav() {
  return (
    <div style = {{ backgroundColor: '#160708' }}>
      <ButtonGroup
        aria-label="Basic button group"
        style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 40 }}
      >
        <Link to='/'>
          <Button style={{ color: '#bb642d', border: 'none' }}>Home</Button>
        </Link>
        <Link to='/about'>
          <Button style={{ color: '#bb642d', border: 'none' }}>About</Button>
        </Link>
        <Link to='/contact'>
          <Button style={{ color: '#bb642d', border: 'none' }}>Resume</Button>
        </Link>
        <Link to='/projects'>
          <Button style={{ color: '#bb642d', border: 'none' }}>Projects</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
}


