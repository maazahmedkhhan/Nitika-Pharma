"use client";
import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";

export default function FloatingSpeedDial() {
  const actions = [
    { icon: <i className="fa-solid fa-headset" />, name: "Contact" },
    { icon: <i className="fa-solid fa-user-group" />, name: "Ask an Expert" },
    { icon: <i className="fa-solid fa-vial" />, name: "Request an Sample" },
    { icon: <i className="fa-solid fa-file" />, name: "Request quote" },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 2000,
      }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => alert(`${action.name} clicked!`)}
        />
      ))}
    </SpeedDial>
  );
}
