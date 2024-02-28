
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Nav() {
  return (
    <div style={{ backgroundColor: '#e7dfd8' }}>
      <ButtonGroup variant="outlined" aria-label="Basic button group" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}
