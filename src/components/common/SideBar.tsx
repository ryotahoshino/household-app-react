import { Box, Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { CSSProperties } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { NavLink } from 'react-router-dom';

interface SideBarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
}

interface menuItem {
  text: string;
  path: string;
  icon: React.ComponentType,
}

const SideBar = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
  handleDrawerClose,
  handleDrawerTransitionEnd,
}: SideBarProps) => {

  const MenuItems: menuItem[] = [
    { text: 'Home', path: '/', icon: HomeIcon },
    { text: 'Report', path: '/report', icon: SignalCellularAltIcon },
  ]

  const baseLinkStyle: CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
  }

  const activeLinkStyle:CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {MenuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <NavLink key={index} to={item.path} style={({ isActive }) => {
                return {
                  ...baseLinkStyle,
                  ...(isActive ? activeLinkStyle : {}),
                }
              }}>
                <ListItemIcon>
                  {/*index % 2 === 0 ? <InboxIcon /> : <MailIcon />*/}
                  <item.icon />
                </ListItemIcon>
              </NavLink>
              
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        slotProps={{
          root: {
            keepMounted: true, // Better open performance on mobile.
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideBar;