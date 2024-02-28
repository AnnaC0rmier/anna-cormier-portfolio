import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import img from '../assets/img/anna.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function MediaControlCard() {

  return (
    <div style={{ backgroundColor: '#e7dfd8', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ display: 'flex', width: '80%', height: '60%', border: '3px solid black', backgroundColor: '#e7dfd8' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent style={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Anna Cormier
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Full Stack Web Developer
            </Typography>
          </CardContent>
          <p>CONTACT ME:</p>
          <Box style={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            
            <IconButton>
              <GitHubIcon style={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon style={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton>
              <EmailIcon style={{ height: 38, width: 38 }} />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          style={{ width: '60%', marginRight: 0, marginLeft: 'auto' }}
          image={img}
          alt="Anna Cormier at the Color Factory Museum"
        />
      </Card>
    </div>
  );
}



