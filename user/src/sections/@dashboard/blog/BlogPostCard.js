import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Card, Grid, Avatar, Typography, CardContent, CardActions, CardMedia, Button } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
import { fShortenNumber } from '../../../utils/formatNumber';
//
import SvgIconStyle from '../../../components/SvgIconStyle';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index }) {
  const { cover, title, view, comment, share, author, createdAt } = post;
  // const latestPostLarge = index === 0;
  // const latestPost = index === 1 || index === 2;

  const POST_INFO = [
    { number: comment, icon: 'eva:message-circle-fill' },
    { number: view, icon: 'eva:eye-fill' },
    { number: share, icon: 'eva:share-fill' },
  ];

  return (
    // <Grid item xs={12} sm={latestPostLarge ? 12 : 6} md={latestPostLarge ? 6 : 3}>
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle>
          <CoverImgStyle alt={title} src={cover} />
        </CardMediaStyle>
        <CardContent
          sx={{
            pt: 4,
          }}
        >
          <Typography variant="h6" component="div">
            Name &nbsp; &nbsp; #123456
          </Typography>{' '}
          <Typography variant="body2" gutterBottom color="text.secondary">
            Software Professional - Graduate
          </Typography>
          <Typography variant="body2" color="black">
            26 Yrs, 5ft 2 inch <br /> Khatri - Hindu, Delhi - India
          </Typography>
          {/* <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              ...{ typography: 'h5', height: 60 },
            }}
          >
            {title} &nbsp; #123456
            <br />
            Software Engineer
            <br />
            26 yrs &nbsp; 5ft 2 inch
            <br />
          </TitleStyle> */}
          {/* View matching results button */}
          <InfoStyle>
            <Button
              size="small"
              sx={{
                textTransform: 'none',
                color: '#795548',
                fontWeight: 600,
              }}
            >
              View Matching Results
            </Button>
            {/* {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: 1.5,
                }}
              >
                <Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />
                <Typography variant="caption">{fShortenNumber(info.number)}</Typography>
              </Box>
            ))} */}
          </InfoStyle>
        </CardContent>
      </Card>
      {/* Matches.jsx */}
      {/* <Card sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          // height="140"
          image="https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Name &nbsp; &nbsp; #123456
          </Typography>{' '}
          <Typography variant="body2" gutterBottom color="text.secondary">
            Software Professional - Graduate
          </Typography>
          <Typography variant="body2" color="black">
            26 Yrs, 5ft 2 inch <br /> Khatri - Hindu, Delhi - India
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'flex-end',
            float: 'right',
            //   marginTop:1
          }}
        >
          <Button
            size="small"
            sx={{
              textTransform: 'none',
              color: '#795548',
              fontWeight: 600,
            }}
          >
            View Matching Results
          </Button>
        </CardActions>
      </Card> */}
    </Grid>
  );
}
