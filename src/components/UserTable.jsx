import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton, Modal, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./UserTable.css";
import EditUserDetails from "./EditUserDetails";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";

let selectedUser;
let users = [];

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
            params.row.dialogOpen();
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
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  height: 400,
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};
// componentDidUpdate = async () => {
// let token =  localStorage.getItem('token')
// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };
// let response = await axios.post(domain + endPoints.fetchUsers,config);
// console.log(response);
// };

function UserTable() {
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");

      // console.warn(token);

      let response = await axios.post(
        domain + endPoints.fetchUsers,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        let listOfusers = response.data.result;

        let arr = [];

        listOfusers.forEach((e) => {
          arr.push({
            id: e._id,
            email: e.email,
            username: e.userName,
            role: e.role,
            dialogOpen: () => handleOpen(),
            dialogClose: () => handleClose(),


          });
        });

        setState(arr);
      }
    }

    fetchData();
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rowHeight={40}
        style={{ fontSize: "0.8rem" }}
        rows={state}
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
