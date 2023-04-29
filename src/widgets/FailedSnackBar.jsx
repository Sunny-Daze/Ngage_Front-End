import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

export default function CustomizedSnackbar(props) {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.handleSnackbar(false);
  };

  const vertical = 'top';
  const horizontal = 'center';
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={props.snackbarSwitch} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical, horizontal}}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {props.snackbarMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}