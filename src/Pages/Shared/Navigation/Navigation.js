import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/system';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const theme = useTheme()
  const useStyle = makeStyles({
    navItem : {
      color : 'white',
      textDecoration : 'none',
      [theme.breakpoints.down('sm')] : {
        display : 'none'
      }
    },
    navIcon : {
      [theme.breakpoints.up('sm')] : {
        display : 'none!important'
      }
    }
  })
  const {navItem, navIcon} = useStyle()
  const [state, setState] = React.useState(false);
  const list =  (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
          <ListItem button >
          <ListItemText>
            <Link to='/home'>Home</Link>
          </ListItemText>
          </ListItem>
      </List>
    </Box>
  );
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={navIcon}
            onClick={() => setState(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link className={navItem} to='/home'>Home</Link>
        </Toolbar>
      </AppBar>
    </Box>

    <React.Fragment >
      <Drawer
        open={state}
        onClose={() => setState(false)}
      >
        {list}
      </Drawer>
    </React.Fragment>
</>
  );
}

export default Navigation