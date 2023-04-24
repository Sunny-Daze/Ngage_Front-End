import React from "react";
import "./CustomerFeedback.css";
import { Mention, MentionsInput } from "react-mentions";
import mentionsInputStyle from "../utils/mentionsInputStyle";
import FeedbackCard from "../widgets/FeedbackCard";
import {Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function CustomerFeedback() {
  const [formState, setFormState] = React.useState({
    username: "",
    comment: "",
  });

  const users = [
    {
      id: "isaac",
      display: "Isaac Newton",
    },
    {
      id: "sam",
      display: "Sam Victor",
    },
    {
      id: "emma",
      display: "emmanuel",
    },
  ];

  return (
    <div className="CustomerFeedback">
      <MentionsInput
        placeholder="Add Comment. Use '@' for mention and '&' for emojis"
        value={formState.comment}
        onChange={(e) =>
          setFormState({ ...formState, comment: e.target.value })
        }
        style={mentionsInputStyle}
      >
        <Mention style={{ background: "#cee4e5" }} data={users} />
      </MentionsInput>

		<div className="feedbackButton">
		<Button variant='contained' size='small' endIcon={<SendIcon />} style={{background:'#001F54', color:'white', marginRight:'1rem'}}>Send</Button>
		</div>

      <div className="feedbackArea">
        <FeedbackCard
          userName="sunny"
          feedback="slkdjf slkdjfds klsdjf ldsjf ksdfj "
        />
        <FeedbackCard userName="sunny" />
      </div>
    </div>
  );
}

export default CustomerFeedback;
