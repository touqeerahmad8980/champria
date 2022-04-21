import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import useStyles from './Footer.styles';

const Footer = () => {
	const classes = useStyles();
	

    return (
       <Box className={classes.footerWrap}>
		   <Box display="flex" alignItems="center">
			   <img src="/assets/images/footer-logo.svg" alt="Footer Logo" />
			   <Typography>
			   		©2022 Champria.gg
			   </Typography>
			   <Link href='#'>Terms of Service</Link>
			   <Link href='#'>Privacy Policy</Link>
		   </Box>
		   <Box className={classes.connectLinks}>
			   <Typography>Connect with us</Typography>
			   <img src="/assets/images/discord-icon.svg" alt="discord" width={16} />
			   <img src="/assets/images/facebook-icon.svg" alt="facebook" width={16} height={18} />
			   <TwitterIcon />
			   <InstagramIcon />
			   <img src="/assets/images/linkedin-icon.svg" alt="linkedin" width={16} />
		   </Box>
	   </Box>
    )
}

export default Footer;