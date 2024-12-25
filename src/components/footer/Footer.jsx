import React from 'react';
import { Toolbar, Typography, Box } from '@mui/material';
import './Footer.scss';

function Footer() {
const credits = 'EstherSoftware.Dev';

  return (
    <Box className="footer">
        <Toolbar>
          <Typography>
            <a href="https://esthersoftware.dev/" target="_blank" rel="noreferrer">{credits}</a>
          </Typography>
        </Toolbar>
    </Box>
  );
}

export default Footer;
