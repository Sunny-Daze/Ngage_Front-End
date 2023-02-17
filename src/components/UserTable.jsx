import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton, Modal, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./UserTable.css";
import EditUserDetails from "./EditUserDetails";

let selectedUser;

const columns = [
  { field: "email", headerName: "Email", width: 200 },
  { field: "username", headerName: "User Name", width: 200 },
  { field: "role", headerName: "Role", width: 180 },
  {
    field: "editbutton",
    headerName: "",
    sortable: false,
    headerClassName: "lastcolumnSeparator",
    width: 100,
    renderCell: (params) => {
      return (
        <Button
          variant="outlined"
          size="small"
          style={{ marginLeft: 25, borderColor: "#001f54", color: "#001f54" }}
          onClick={() => {
            selectedUser = params.row;
            params.row.dialog();
          }}
        >
          <EditIcon />
        </Button>
      );
    },
  },
  {
    field: "deletebutton",
    headerName: "",
    hidable: true,
    sortable: false,
    headerClassName: "lastcolumnSeparator",
    width: 100,
    renderCell: (params) => {
      return (
        <IconButton style={{ color: "red" }}>
          <DeleteIcon />
        </IconButton>
      );
    },
  },
];

const modelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: 500,
  p: 4,
};

function UserTable() {
  const rows = [
    {
      id: 8,
      email: "employee@gmail.com",
      username: "employee",
      role: "employee",
      dialog: () => handleOpen(),
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rowHeight={40}
        style={{ fontSize: "0.8rem" }}
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modelStyle}>
          <EditUserDetails props={selectedUser} />
        </Box>
      </Modal>
    </div>
  );
}

export default UserTable;
