import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BasicTextFields from './Modeltext'

const style = {
  '& > :not(style)': { m: 1, width: '50ch' },
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "25%",
  height: "70%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CRUD_APP
          </Typography>
          <Button onClick={handleOpen} color="inherit">ADD ITEM</Button>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={style} noValidate autoComplete="off">
              <BasicTextFields close={handleClose} />
            </Box>
          </Modal>

        </Toolbar>
      </AppBar>
    </Box>
  );
}