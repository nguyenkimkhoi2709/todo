import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';
import Register from '../../features/Auth/components/Register/index'


export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link  className="link" to="/">Test Login React App</Link>
          </Typography>

          <NavLink to="/todos" className="link">
            <Button color="inherit">Todo</Button>
          </NavLink>

          <NavLink to="/albums" className="link">
            <Button color="inherit">Album</Button>
          </NavLink>

          <Button onClick={handleClickOpen} color="inherit">Đăng nhập</Button>
        </Toolbar>
      </AppBar>

      <Dialog 
        disableEscapeKeyDown  
        open={open} 
        onClose={handleClose}
      >
        <DialogContent>
          <Register />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
