import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import classes from "./Header.module.css";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const Header = ({ isOpened, setIsOpened }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );
    return (
        <div className={classes.header}>

            <div className={classes.title}>
                <div className={classes.logo}> LOGO  </div>
            </div>
            <div className={classes.header_title}>
                <div onClick={() => setIsOpened((el) => !el)}>
                    {isOpened ? <ChevronLeftOutlinedIcon className={classes.header_icons} /> : <MenuOutlinedIcon className={classes.header_icons} />}

                </div>
                <div className={classes.header_input}>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className={classes.header_menu}>

                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,

                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            left: 20,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,

                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 54,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 1, width: "40px", height: "40px" }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >

                    <Badge color="primary" badgeContent={0} showZero>
                        <NotificationsIcon sx={{ fontSize: "20px" }} />
                    </Badge>

                </IconButton>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 1, width: "40px", height: "40px" }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >

                    <Badge color="primary" size="small" badgeContent={0} showZero>
                        <MailIcon sx={{ fontSize: "20px" }} />
                    </Badge>

                </IconButton>
                <Tooltip title="Account settings" sx={{ width: 30, height: 30, }}>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 1, }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 35, height: 35, background: "#fff", borderRadius: '50%', fontSize: "15px", border: "1px solid  #E0E3E7", color: "black" }}>M</Avatar>
                    </IconButton>
                </Tooltip>
                <React.Fragment key={"right"}>
                    <Tooltip title="settings" onClick={toggleDrawer("right", true)}>
                        <IconButton
                            size="small"
                            sx={{ mr: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 35, height: 35, background: "#fff", borderRadius: '50%', fontSize: "15px", border: "1px solid  #E0E3E7", color: "black" }}>
                                <SettingsRoundedIcon style={{ fontSize: "20px" }} />
                            </Avatar>
                        </IconButton>
                    </Tooltip>

                    <SwipeableDrawer
                        anchor={"right"}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                        onOpen={toggleDrawer("right", true)}
                    >
                        {list("right")}
                    </SwipeableDrawer>
                </React.Fragment>
            </div>

        </div >

    )

}
export default Header