import React from 'react';
import './Community.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import Typography from '@mui/material/Typography'
import PushPinIcon from '@mui/icons-material/PushPin';

const currencies = [
    {
      value: 'USD',
      label: 'none',
    },
    {
      value: 'EUR',
      label: 'Question',
    },
    {
      value: 'BTC',
      label: 'Discussion',
    },
  ];  

const currenciess = [
    {
      value: 'USD',
      label: 'Likes',
    },
    {
      value: 'EUR',
      label: 'Oldest',
    },
    {
      value: 'BTC',
      label: 'Newest',
    },
  ];  

function Community() {
    const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className='CommunityPage'>
    <div className="header">
    <div className="input">
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
    <TextField
          fullWidth label="Search for posts..."
          style={{"marginTop":"5px"}}
          />
     </Box>    
    </div>
    <div className="filter">
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField
          id="outlined-select-currency"
          select
          value={currency}
          label="FilterByTags"
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>
    </div>
    <div className="sort">
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField
          fullWidth
          id="outlined-select-currency"
          select
          label="SortBy"
          value={currency}
          onChange={handleChange}
        >
          {currenciess.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>
    </div>
    </div>
            <div className="line"></div>
            <Divider style={{"marginTop":'5px'}} />
    <div className="postButton">
        <Button variant="contained">Contained</Button>
    </div>
    <div className="UserPostCollection">

    <div className="UserPostCard">
      <div className="PostIcons">
        
      <IconButton aria-label="add to favorites" style={{"display":"flex", "flexDirection":"column"}}>
          <FavoriteIcon sx={{"fontSize":"2rem"}}/>
          <Typography>5</Typography>
        </IconButton>
      <IconButton aria-label="add to favorites">
        <CommentIcon sx={{"fontSize":"2rem"}}/>
        </IconButton>
      <IconButton aria-label="add to favorites">
        <PushPinIcon sx={{"fontSize":"2rem"}}/>
        </IconButton>
      </div>
      <div className="PostBody">
      <Card style={{"border":"none", "boxShadow":"none"}} sx={{ maxWidth: 950 }}>
      <CardHeader
        avatar={
          <Avatar style={{"height":"4.1rem", "width":"4.1rem"}} sx={{ bgcolor: red[500] }} aria-label="recipe">
          </Avatar>
        }
        title="Shani Yadav and Sunny Yadav"
        subheader="November 4, 2022"
      />
      </Card>
      <Typography style={{"marginLeft":"1rem", "fontWeight":"bold"}} variant='h6'>This is a comment</Typography>
      <img alt='userPostImage' className='postImage' src='https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg' />
      </div>
    </div>

    <div className="UserPostCard">
      <div className="PostIcons">
        
      <IconButton aria-label="add to favorites" style={{"display":"flex", "flexDirection":"column"}}>
          <FavoriteIcon sx={{"fontSize":"2rem"}}/>
          <Typography>5</Typography>
        </IconButton>
      <IconButton aria-label="add to favorites">
        <CommentIcon sx={{"fontSize":"2rem"}}/>
        </IconButton>
      <IconButton aria-label="add to favorites">
        <PushPinIcon sx={{"fontSize":"2rem"}}/>
        </IconButton>
      </div>
      <div className="PostBody">
      <Card style={{"border":"none", "boxShadow":"none"}} sx={{ maxWidth: 950 }}>
      <CardHeader
        avatar={
          <Avatar style={{"height":"4.1rem", "width":"4.1rem"}} sx={{ bgcolor: red[500] }} aria-label="recipe">
          </Avatar>
        }
        title="Shani Yadav and Sunny Yadav"
        subheader="November 4, 2022"
      />
      </Card>
      <Typography style={{"marginLeft":"1rem", "fontWeight":"bold"}} variant='h6'>This is a comment</Typography>
      <img alt='userPostImage' className='postImage' src='https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg' />
      </div>
    </div>
    
    </div>

    </div>
  )
}

export default Community