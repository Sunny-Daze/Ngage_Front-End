import * as React from 'react';
import { Divider, Modal, Typography, Box, Chip, TextField, Button } from '@mui/material';
import ReactQuill from "react-quill";
import 'quill/dist/quill.snow.css';
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 680,
  // height: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: '5px',
  overflowY:'scroll',
  overflowX:'scroll'
};

export default function CreatePostModal(props) {
  // quill editor
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font"
  ];

  const [code, setCode] = React.useState("");
  const handleProcedureContentChange = (content, delta, source, editor) => {
    setCode(content);
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };


  const handleClose = () => props.setPostModalSwitch(false);

  return (
    <div>
      <Modal
        open={props.postModalswitch}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize:'1rem'}}>
            CREATE POST
          </Typography>
          <Divider style={{marginTop:'0.1rem'}} />
          <Box className="chips" style={{marginTop:'1rem', marginBottom:'1rem', display:'flex', gap:'0.5rem'}}>
          <Chip label="Question" variant="outlined" onClick={props.setModalSwitch} />
          <Chip label="Discussion" variant="outlined" />
          </Box>
          <TextField id="outlined-basic" label="Title" variant="outlined" required fullWidth size="normal" />
          <Box className="quillEditor" style={{width:625, marginTop:'1rem', height:200, marginBottom:'0.9rem' }}>
          {console.log(code)} 
      <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={code}
      onChange={handleProcedureContentChange}
      style={{height:'150px'}}
      />
          </Box>

          <Button variant="contained" style={{marginTop:'1rem', width:'100%', background: "#001f54"}} >Create post <AddIcon style={{ marginLeft: "0.2rem", fontSize: "1.4rem" }} /></Button>
        </Box>
      </Modal>
    </div>
  );
}