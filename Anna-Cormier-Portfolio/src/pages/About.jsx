import * as React from 'react';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { CardActionArea } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const LoremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et orci facilisis, a accumsan nisi fermentum. Sed eget nunc vitae tellus ultricies efficitur vel vitae libero. Integer nec ullamcorper turpis. Duis tincidunt semper elit, a fermentum velit vulputate ac. Maecenas fermentum erat eu urna iaculis, eu hendrerit urna cursus.';

export default function MyAbout() {
  return (
    <Grid container spacing={2} justifyContent="space-around" sx={{ margin: '20px' }}>
      <Grid item xs={4}>
        <Box
          component="ul"
          sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
          <h1 style={{color:'white'}}>HOW IT STARTED</h1>
          <Card component="li" sx={{ minWidth: 300, flexGrow: 1, marginBottom: 3 }}>
            <CardCover>
              <video
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
              >
                <source
                  src="https://assets.codepen.io/6093409/river.mp4"
                  type="video/mp4"
                />
              </video>
            </CardCover>
            <CardContent>
              <Typography
                level="body-lg"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 12, sm: 18 }}
              >
                Video
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={4} style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <EastIcon
          style={{ fontSize: 200, margin: 10, cursor: 'pointer', color: 'orange'}}
        />
      </Grid>

      <Grid item xs={4}>
        <Box
          component="ul"
          sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
          <h1 style={{color:'white'}}>HOW ITS GOING</h1>
          <Card component="li" sx={{ minWidth: 300, flexGrow: 1, marginBottom: 3 }}>
            <CardCover>
              <video
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
              >
                <source
                  src="https://assets.codepen.io/6093409/river.mp4"
                  type="video/mp4"
                />
              </video>
            </CardCover>
            <CardContent>
              <Typography
                level="body-lg"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 12, sm: 18 }}
              >
                Video
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Card sx={{ }}>
          <h1 style={{textAlign:'center'}}>LORIUM IPSUM</h1>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {LoremIpsum}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {LoremIpsum}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}




