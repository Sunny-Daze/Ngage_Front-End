import React from "react";
import "./Recreation.css";
import Card from "../widgets/CardWithPoints";
import { Divider, styled } from "@mui/material";
import RecreationCard from "../widgets/RecreationCard";
import ActiveRecreationCard from "../widgets/ActiveRecreationCard";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";
import { getUserPoints } from "../utils/localuserDetails";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

function Recreation() {
  const [activeActivity, setActiveActivity] = React.useState([]);
  const [recreations, setRecreations] = React.useState([]);

  function addActivity(id) {
    let index = recreations.findIndex((e) => e._id == id);
    if (index != -1) {
      activeActivity.push(recreations[index]);
      setActiveActivity([...activeActivity]);
    }
  }

  React.useEffect(() => {
    async function fetchData() {
      let token = localStorage.getItem("token");

      let response = await axios.post(
        domain + endPoints.fetchRecreations,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        console.info(response.data.result);
        let active = response.data.result.filter((e) => e.participated);
        let inActive = response.data.result.filter((e) => !e.participated);
        setRecreations([...inActive]);
        setActiveActivity([...active]);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="Recreation">
      <Card
        heading="Recreation"
        subheading="Welcome to the recreation, where you can mantain you work life balance"
        coins={getUserPoints()}
      />
      {activeActivity.length > 0 && (
        <div className="ActiveRecreationActivity">
          {activeActivity.map((e) => (
            <ActiveRecreationCard data={e} />
          ))}
          {/* <ActiveRecreationCard title="Industry Visit" desc="lets have a singing faceoff" reward="2000" /> */}
        </div>
      )}
      <Root>
        <Divider style={{ marginTop: "0.8rem", marginBottom: "1rem" }}>
          All Activities
        </Divider>
      </Root>
      <div className="Recreation-Activities">
        {recreations.map((e) => (
          <RecreationCard
            addActivity={addActivity}
            recreation={e}
            key={e._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Recreation;
