import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./UserTable.css";

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
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return (
        <Button
          variant="outlined"
          size="small"
          style={{ marginLeft: 25, borderColor: "#001f54", color: "#001f54" }}
          onClick={onClick}
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
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return (
        <IconButton style={{ color: "red" }}>
          <DeleteIcon />
        </IconButton>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    email: "employee@gmail.com",
    username: "employee",
    role: "employee",
  },
  {
    id: 2,
    email: "employee@gmail.com",
    username: "employee",
    role: "employee",
  },
  {
    id: 3,
    email: "employee@gmail.com",
    username: "employee",
    role: "employee",
  },
  {
    id: 4,
    email: "employee@gmail.com",
    username: "employee",
    role: "employee",
  },
  {
    id: 5,
    email: "employee@gmail.com",
    username: "employee",
    role: "employee",
  },
  {
    id: 6,
    email: "employee@gmail.com",
    username: "employee",
    role: "employee",
  },
  {
    id: 7,
    email: "employee@gmail.com",
    username: "employee",
    role: "employee",
  },
  {
    id: 8,
    email: "employee@gmail.com",
    username: "employee",
    role: "employee",
  },
  {
    id: 9,
    email: "employee@gmail.com",
    username: "employee",
    role: "employee",
  },
];

function UserTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rowHeight={40}
        style={{ fontSize: "0.8rem" }}
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        onRowClick={(params, event) => {
          if (!event.ignore) {
            console.log("hello");
          }
        }}
      />
    </div>
  );
}

export default UserTable;
