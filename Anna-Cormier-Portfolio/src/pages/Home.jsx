import Grid from '@mui/joy/Grid';
import img from '../assets/img/img.jpg';

export default function MyHome() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop:50 }}>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6} sx={{ textAlign: 'center' }}>
                    <h1>ANNA CORMIER</h1>
                    <h2>FULL STACK WEB DEVELOPER</h2>
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

