import * as React from 'react';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const LoremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et orci facilisis, a accumsan nisi fermentum. Sed eget nunc vitae tellus ultricies efficitur vel vitae libero. Integer nec ullamcorper turpis. Duis tincidunt semper elit, a fermentum velit vulputate ac. Maecenas fermentum erat eu urna iaculis, eu hendrerit urna cursus.';



export default function RowAndColumnSpacing() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: '100%' ,marginTop:10, marginLeft:10 }}
    >
      <Grid xs={6}>
       
        <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
     
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1, marginBottom:3}}>
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
      <Grid xs={6}>
       
        <Card sx={{ maxWidth: 500, marginBottom:3,  background: `linear-gradient(to right, rgba(85, 42, 111, 0.2), rgba(218, 61, 133, 0.5), rgba(246, 127, 114, 0.5), rgba(252, 172, 63, 0.2))` }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="black">
           'LoremIpsum'
          </Typography>
          <Typography variant="body2" color="black">
          {LoremIpsum}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

       
      </Grid>
      <Grid xs={6}>
       
        <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
     
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 , marginBottom:3 }}>
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
      <Grid xs={6}>
       
        <Card sx={{ maxWidth: 500 , marginBottom:3,  background: `linear-gradient(to right, rgba(85, 42, 111, 0.2), rgba(218, 61, 133, 0.5), rgba(246, 127, 114, 0.5), rgba(252, 172, 63, 0.2))`}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="black">
          'LoremIpsum'
          </Typography>
          <Typography variant="body2" color="black">
          {LoremIpsum}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

       
      </Grid>
      <Grid xs={6}>
      
        <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
     
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1  , marginBottom:3}}>
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
      <Grid xs={6}>
       
        <Card sx={{ maxWidth: 500 , marginBottom:3,  background: `linear-gradient(to right, rgba(85, 42, 111, 0.2), rgba(218, 61, 133, 0.5), rgba(246, 127, 114, 0.5), rgba(252, 172, 63, 0.2))` }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="black">
          'LoremIpsum'
          </Typography>
          <Typography variant="body2" color="black">
          {LoremIpsum}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

      
      </Grid>
      <Grid xs={6}>
      
        <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
     
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 , marginBottom:3 }}>
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
      <Grid xs={6}>
  
        <Card sx={{ maxWidth: 500 , marginBottom:3,  background: `linear-gradient(to right, rgba(85, 42, 111, 0.2), rgba(218, 61, 133, 0.5), rgba(246, 127, 114, 0.5), rgba(252, 172, 63, 0.2))` }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="black">
          'LoremIpsum'
          </Typography>
          <Typography variant="body2" color="black">
          {LoremIpsum}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

       
      </Grid>
      
    </Grid>
  );
}
