import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import Button from "@mui/material/Button";
import { createPost } from "../services/posts.services";

class RichTextEditor extends Component {
  constructor(props) {
    super(props);

    this.value = "";
    this.modules = {
      toolbar: [
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["clean", "image"],
      ],
    };

    this.formats = [
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "list",
      "bullet",
      "align",
      "color",
      "background",
      "image",
    ];

    this.state = {
      comments: "",
    };

    this.rteChange = this.rteChange.bind(this);
  }

  rteChange = (content, delta, source, editor) => {
    // console.log(editor.getHTML()); // rich text
    // console.log(editor.getText()); // plain text
    // console.log(editor.getLength());
    this.value = editor.getHTML();
  };

  render() {
    return (
      <div>
        <div>
          <ReactQuill
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            onChange={this.rteChange}
            value={this.state.comments || ""}
            style={{ height: 350, width: "100%" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button
            onClick={async () => {
              // console.log(this.value);
              await createPost(this.value);
            }}
          >
            Post
          </Button>
        </div>
      </div>
    );
  }
}

export default RichTextEditor;
