import React from 'react';
import resume from '../assets/img/resume.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import resumePdf from '../assets/resume/AnnaCormier.pdf'

const ResumeDownload = () => {
  return (
    <div style={{ display: 'flex', marginTop: 20 }}>
    
      <div style={{ marginRight: 20 }}>
        <a href={resumePdf} download="AnnaCormier.pdf">
          <DownloadIcon style={{ fontSize: 40, cursor: 'pointer' ,color:'orange' }} />
        </a>
      </div>

     
      <div style={{ marginRight: 20 }}>
        
          <img
            src={resume}
            alt="Resume Screenshot"
            style={{ width: '600px', height: 'auto' }}
          />
      </div>

     
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1 style={{color:'orange', textAlign:'center', flexDirection:'row'}}>LETS CONNECT:</h1>
       </div>
        <GitHubIcon style={{ fontSize: 40, margin: 10, cursor: 'pointer', color:'orange' }} />
        <LinkedInIcon style={{ fontSize: 40, margin: 10, cursor: 'pointer' ,color:'orange' }} />
        <EmailIcon style={{ fontSize: 40, margin: 10, cursor: 'pointer' ,color: 'orange' }} />
      </div>
    </div>
  );
};

export default ResumeDownload;


