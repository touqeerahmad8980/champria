import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import useStyles from './Header.styles';
import { IProps } from './types';

const Header = ({drawerWidth, handleDrawerToggle}:IProps) => {
	const classes = useStyles();
	const [teamName, setTeamName] = React.useState('');

	const handleTeamChange = (event: SelectChangeEvent) => {
		setTeamName(event.target.value);
	};

    return (
        <AppBar
			className={classes.headerWrap}
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
				position: "static"
			}}
		>
			<Toolbar className={classes.actionWrap}>
				<IconButton
					color="inherit"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: 'none' } }}
				>
					<MenuIcon />
				</IconButton>
				<Box>
					<IconButton size="large" aria-label="search" color="inherit">
						<SearchIcon />
					</IconButton>
					<IconButton size="large" aria-label="search" color="inherit">
						<NotificationsIcon />
					</IconButton>
					<IconButton size="large" aria-label="search" color="inherit">
						<Avatar src="/assets/images/broken-avatar.svg" /> <KeyboardArrowDownIcon />
					</IconButton>
				</Box>
			</Toolbar>
			<Box className={classes.headingWrap}>
				<Typography variant='h2'>My Scrims</Typography>
				<Box mt={2} className={classes.selectWrap}>
					<FormControl sx={{ minWidth: 120 }}>
						<InputLabel id="demo-simple-select-helper-label">Team Name</InputLabel>
						<Select
							value={teamName}
							label="Age"
							onChange={handleTeamChange}
						>
							<MenuItem value={1}>Option 1</MenuItem>
							<MenuItem value={2}>Option 2</MenuItem>
							<MenuItem value={3}>Option 3</MenuItem>
						</Select>
					</FormControl>
					<Button className={classes.createBtn} variant="contained">Create Scrim</Button>
				</Box>
			</Box>
		</AppBar>
    )
}

export default Header;