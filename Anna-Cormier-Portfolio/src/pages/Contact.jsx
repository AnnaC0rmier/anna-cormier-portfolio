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
          <DownloadIcon style={{ fontSize: 40, cursor: 'pointer' ,color:'white' }} />
        </a>
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
        <h1 style={{color:'white', textAlign:'center', flexDirection:'row'}}>LETS CONNECT:</h1>
       </div>
        <GitHubIcon style={{ fontSize: 40, margin: 10, cursor: 'pointer', color:'#da3d85' }} />
        <LinkedInIcon style={{ fontSize: 40, margin: 10, cursor: 'pointer' ,color:'#f67f72' }} />
        <EmailIcon style={{ fontSize: 40, margin: 10, cursor: 'pointer' ,color: '#fcac3f' }} />
      </div>
    </div>
  );
};

export default ResumeDownload;


