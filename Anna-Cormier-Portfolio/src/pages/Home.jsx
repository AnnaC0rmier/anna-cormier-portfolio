import Grid from '@mui/joy/Grid';
import img from '../assets/img/img.jpg';
import CodeIcon from '@mui/icons-material/Code';
import DataArrayIcon from '@mui/icons-material/DataArray';
import DataObjectIcon from '@mui/icons-material/DataObject';

export default function MyHome() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop:30}}>
            <Grid container sx={{  height: '100%' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6} sx={{ textAlign: 'center' }}>
                    <h1 style={{color:'#da3d85'}}>ANNA CORMIER</h1>
                    <h2 style={{color:'#da3d85'}}>FULL STACK WEB DEVELOPER</h2>
                    <div style={{color:'white' ,padding:100}}>
                    <h1>"The best way to predict the future is to invent it."</h1>
                    <p>- Alan Kay</p>
                    </div>
                </Grid>
                <Grid xs={6} sx={{ textAlign: 'center' }}>
                    <img
                        src={img}
                        alt="Anna Cormier"
                        style={{ height: '100vh', width: 750 }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

