import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid, GridSelectionModel  } from '@mui/x-data-grid';

interface DialogProps {
  onArchiveOrders: () => void;
}


export default function AlertDialog({onArchiveOrders}: DialogProps) {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const archiveOrders = () => {
      onArchiveOrders()
    }
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Aннулировать
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Вы уверены что хотите аннулировать товар(ы)?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             товар
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={archiveOrders}>Применить</Button>
            <Button onClick={handleClose} autoFocus>
              Отклонить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }