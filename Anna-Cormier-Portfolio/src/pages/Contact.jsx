import React from 'react';
import resume from '../assets/img/resume.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import resumePdf from '../assets/resume/AnnaCormier.pdf';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export default function Contact() {
  return (
    <div style={{ display: 'flex', marginTop: 20 }}>
    
      <div style={{ marginRight: 20 }}>
        <Tooltip title="Download Resume" arrow>
          <a href={resumePdf} download="AnnaCormier.pdf">
            <DownloadIcon style={{ fontSize: 40, cursor: 'pointer', color: 'white' }} />
          </a>
        </Tooltip>
      </div>

     
      <div style={{ marginRight: 20 }}>
        
        <img
          src={resume}
          alt="Resume Screenshot"
          style={{ width: '600px', height: '100vh' }}
        />
      </div>

     
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h1 style={{ color: 'white', textAlign: 'center', flexDirection: 'row' }}>LET'S CONNECT:</h1>
        </div>
        <Tooltip title="GitHub" arrow>
          <div
            role="button"
            tabIndex={0}
            onClick={() => openInNewTab('https://github.com/AnnaC0rmier')}
            onKeyPress={() => openInNewTab('https://github.com/AnnaC0rmier')}
            style={{ cursor: 'pointer' }}
          >
            <GitHubIcon style={{ fontSize: 80, margin: 10, color: '#da3d85' }} />
          </div>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow>
          <div
            role="button"
            tabIndex={0}
            onClick={() => openInNewTab('https://www.linkedin.com/in/anna-cormier')}
            onKeyPress={() => openInNewTab('https://www.linkedin.com/in/anna-cormier')}
            style={{ cursor: 'pointer' }}
          >
            <LinkedInIcon style={{ fontSize: 80, margin: 10, color: '#f67f72' }} />
          </div>
        </Tooltip>
        <Tooltip title="Email" arrow>
          <div
            role="button"
            tabIndex={0}
            onClick={() => openInNewTab('mailto:anna.cormier.96@gmail.com')}
            onKeyPress={() => openInNewTab('mailto:anna.cormier.96@gmail.com')}
            style={{ cursor: 'pointer' }}
          >
            <EmailIcon style={{ fontSize: 80, margin: 10, color: '#fcac3f' }} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};




