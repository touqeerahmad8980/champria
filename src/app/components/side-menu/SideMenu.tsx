import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Toolbar from '@mui/material/Toolbar';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useStyles from './SideMenu.styles';
import { IProps } from './types';

const SideMenu = ({drawerWidth, mobileOpen, handleDrawerToggle, window}:IProps) => {
	const classes = useStyles();
  	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	const container = window !== undefined ? () => window().document.body : undefined;
	const drawer = (
		<div>
			<Toolbar className={classes.logoWraper}>
				<img src="/assets/images/logo.svg" alt="Champria" />
			</Toolbar>
			<List className={classes.menuWraper}>
				<ListItem button>
					<ListItemText primary="Home" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Scrims" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Recruitment Tools" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="My Teams" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Overwatch Data" />
				</ListItem>
				<ListItemButton onClick={handleClick}>
					<ListItemText className={classes.eventText} primary="Events" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Champria Chillin’" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Champria Challenge" />
						</ListItemButton>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="SoS Spring 2022" />
						</ListItemButton>
					</List>
				</Collapse>
				<ListItem button>
					<ListItemText primary="About" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Blog" />
				</ListItem>
				<ListItem button>
					<ListItemText primary="Contact Us" />
				</ListItem>
			</List>
		</div>
	);

    return (
      	<Box
			component="nav"
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
			aria-label="mailbox folders"
		>
			<Drawer
				container={container}
				className={classes.drawerWrap}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
					ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': { 
						boxSizing: 'border-box', 
						width: drawerWidth,
						border: "none"
					},
				}}
			>
				{drawer}
			</Drawer>
			<Drawer
				open
				className={classes.drawerWrap}
				variant="permanent"
				sx={{
					display: { xs: 'none', sm: 'block' },
					'& .MuiDrawer-paper': { 
						boxSizing: 'border-box', 
						width: drawerWidth,
						border: "none"
					},
				}}
			>
				{drawer}
			</Drawer>
		</Box>
    )
}

export default SideMenu;