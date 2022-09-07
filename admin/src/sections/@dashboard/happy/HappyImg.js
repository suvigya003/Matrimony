import React, { useState } from 'react';
import {Box,Button} from '@mui/material';
// import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
// import { storage, db } from '../firebase';
// import firebase from 'firebase/compat/app';
import './HappyImg.css';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export default function  HappyImg({ userName }) {
  const [caption, setCaption] = useState('');
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    
  };

  return (
    <div className="imageupload">
      {/* <progress className="imageupload__progress" value={progress} max="100" /> */}
      {/* <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      /> */}
      <Button
        type="submit"
        sx={{
          // borderColor:'red'
          border: '1px solid white',
          borderColor: 'ActiveBorder',
          textDecoration: 'none',
          // fontSize:'10px'
          fontWeight: 500,
          // fontColor: 'secondary.main',
        }}
      >
        {/* <AttachmentOutlinedIcon/> */}
        {/* <AccessAlarmIcon /> */}
        <input type="file" id="abc" onChange={handleChange} />
        <label htmlFor="abc">
          <Box sx={{ display: 'flex' }} pl={3} pr={3}>
            <img height="20px" width="20px" src="https://cdn-icons-png.flaticon.com/128/149/149284.png" alt="Hello" />{' '}
            &nbsp; &nbsp;  Upload Image
          </Box>
        </label>
      </Button>

      {/* <Button onClick={handleUpload}>Upload</Button> */}
    </div>
  );
}


