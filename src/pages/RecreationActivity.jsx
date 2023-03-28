import React, { useState } from "react";
import "./RecreationActivity.css";
import ActivityContentBanner from "../widgets/ActivityContentBanner";
import ActivityMilestoneCard from "../widgets/ActivityMilestoneCard";
import { useLocation } from "react-router-dom";

import { Divider, styled } from "@mui/material";
const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

function RecreationActivity() {
  const { state } = useLocation();
  const [milestones, setMilestones] = useState([...state.data.milestones]);

  return (
    <div className="RecreationActivity">
      <ActivityContentBanner
        heading={state.data.title}
        subheading={state.data.desc}
        milestones={state.data.milestones.length}
        createdBy={state.data.createdBy.userName}
      />
      <Root>
        <Divider style={{ marginTop: "0.8rem", marginBottom: "0.8rem" }}>
          Milestones
        </Divider>
      </Root>

      <div className="CourseLevels">
        {milestones.map((e, index) => (
          <>
            <ActivityMilestoneCard data={e} key={e._id} index={index} />

            <div style={{ marginBottom: "10px" }}></div>
          </>
        ))}
        {/* {milestones.map((e) => {
          <ActivityMilestoneCard title="Solo" desc="okay dokay" key={e._id} />;
          // <ActivityMilestoneCard title={e.title} desc ={e.desc} />
        })} */}
      </div>
    </div>
  );
}

export default RecreationActivity;
