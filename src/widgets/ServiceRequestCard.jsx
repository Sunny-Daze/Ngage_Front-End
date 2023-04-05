import React from "react";
import "./ServiceRequestCard.css";
import { Typography, Button } from "@mui/material";

function ServiceRequestCard() {
  return (
    <div className="ServiceRequestCard">
      <div className="ServiceRequestCardHeading">
        <Typography
          variant="h5"
          style={{ fontSize: "1.2rem", marginBottom: "0.3rem" }}
        >
          Service Request #1
        </Typography>
        <Typography variant="body2" style={{ fontSize: "0.7rem" }}>
          Created by:
        </Typography>
        <Typography variant="body2" style={{ fontSize: "0.8rem" }}>
          Name:
        </Typography>
        <Typography variant="body2" style={{ fontSize: "0.8rem" }}>
          Address:
        </Typography>
        <Typography variant="body2" style={{ fontSize: "0.8rem" }}>
          Phone:
        </Typography>
        <Typography
          variant="body2"
          style={{ fontSize: "0.8rem", marginTop: "0.3rem" }}
        >
          Service Information:
        </Typography>
      </div>

      <div className="ServiceRequestInfo">
        <table style={{ width: "100%" }}>
          <tr>
            <th><Typography variant='body2' style={{textAlign:'start', fontSize:'0.95rem'}}>Background</Typography></th>
            <th><Typography variant='body2' style={{textAlign:'start', fontSize:'0.95rem'}}>Introduction</Typography></th>
            <th><Typography variant='body2' style={{textAlign:'start', fontSize:'0.95rem'}}>Project Title</Typography></th>
            <th><Typography variant='body2' style={{textAlign:'start', fontSize:'0.95rem'}}>Resources</Typography></th>
          </tr>
          <tr>
            <td><Typography variant='body2' style={{fontSize:'0.8rem', color:'grey', marginBottom:'1rem', fontWeight:'lighter'}}>random</Typography></td>
            <td><Typography variant='body2' style={{fontSize:'0.8rem', color:'grey', marginBottom:'1rem', fontWeight:'lighter'}}>random</Typography></td>
            <td><Typography variant='body2' style={{fontSize:'0.8rem', color:'grey', marginBottom:'1rem', fontWeight:'lighter'}}>random</Typography></td>
            <td rowspan="5" style={{paddingLeft:'1.2rem'}}><Typography variant='body2' style={{fontSize:'0.8rem', color:'grey', marginBottom:'1rem', fontWeight:'lighter'}}>
            <ul>
                    <li>random</li>
                    <li>random</li>
                    <li>random</li>
                    <li>random</li>
                  </ul>
              </Typography>
              </td>
          </tr>
          <tr>
            <th><Typography variant='body2' style={{textAlign:'start', fontSize:'0.95rem'}}>Body</Typography></th>
            <th><Typography variant='body2' style={{textAlign:'start', fontSize:'0.95rem'}}>Objectify</Typography></th>
            <th><Typography variant='body2' style={{textAlign:'start', fontSize:'0.95rem'}}>Reference</Typography></th>
          </tr>
          <tr>
            <td><Typography variant='body2' style={{fontSize:'0.8rem', color:'grey', marginBottom:'1rem', fontWeight:'lighter'}}>random</Typography></td>
            <td><Typography variant='body2' style={{fontSize:'0.8rem', color:'grey', marginBottom:'1rem', fontWeight:'lighter'}}>random</Typography></td>
            <td rowspan="3" style={{paddingLeft:'1.2rem'}}><Typography variant='body2' style={{fontSize:'0.8rem', color:'grey', marginBottom:'1rem', fontWeight:'lighter'}}>
                <ul>
                    <li>random</li>
                    <li>random</li>
                    <li>random</li>
                    <li>random</li>
                  </ul>
                </Typography>
            </td>
          </tr>
          <tr>
            <th><Typography variant='body2' style={{textAlign:'start', fontSize:'0.95rem'}}>Budget</Typography></th>
            <th><Typography variant='body2' style={{textAlign:'start', fontSize:'0.95rem'}}>Problem Statement</Typography></th>
          </tr>
          <tr>
            <td><Typography variant='body2' style={{fontSize:'0.8rem', color:'grey', marginBottom:'1rem', fontWeight:'lighter'}}>2345</Typography></td>
            <td><Typography variant='body2' style={{fontSize:'0.8rem', color:'grey', marginBottom:'1rem', fontWeight:'lighter'}}>random</Typography></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ServiceRequestCard;
