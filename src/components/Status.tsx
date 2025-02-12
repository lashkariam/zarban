import React from "react";

interface StatusProps {
  completed: boolean;
}

const Status: React.FC<StatusProps> = ({ completed }) => (
  <div
    style={{
      background: completed ? "green" : "red",
      borderRadius: "8px",
      padding: "8px",
    }}
  >
    {completed ? "Complete" : "Pending"}
  </div>
);

export default Status;
