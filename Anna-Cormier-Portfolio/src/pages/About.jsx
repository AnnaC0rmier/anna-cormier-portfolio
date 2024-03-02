import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

const Item = styled('div')({
  backgroundColor: 'lightgray',
  padding: '20px',
  textAlign: 'center',
  height: '200px', // Adjust the height as per your preference
});

const LoremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et orci facilisis, a accumsan nisi fermentum. Sed eget nunc vitae tellus ultricies efficitur vel vitae libero. Integer nec ullamcorper turpis. Duis tincidunt semper elit, a fermentum velit vulputate ac. Maecenas fermentum erat eu urna iaculis, eu hendrerit urna cursus.';

export default function MyAbout() {
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ width: '100%' }}
      >
        <Grid item xs={6}>
          <Item>
          <Card component="li" sx={{ minWidth: 500, flexGrow: 1 }}>
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
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{LoremIpsum}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{LoremIpsum}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Card component="li" sx={{ minWidth: 500, flexGrow: 1 }}>
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
          </Item>
        </Grid>
      </Grid>

      <Card size="lg" sx={{ marginTop: '50px', textAlign: 'center', backgroundColor: 'lightgray' }}>
        <Typography variant="h2" fontWeight="bold" mt={4} mb={2}>
          ABOUT ME AND MY JOURNEY
        </Typography>
        <Typography variant="body1">
          {LoremIpsum}
          {LoremIpsum}
          {LoremIpsum}
        </Typography>
      </Card>
    </>
  );
}
