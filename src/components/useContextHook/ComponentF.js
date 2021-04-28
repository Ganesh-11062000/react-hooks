import React, { useContext } from "react";
import { userContext, channelContext } from "../../App";

function ComponentF() {
  const user = useContext(userContext);
  const channel = useContext(channelContext);

  return (
    <div className="text-center">
      component F
      <h1>
        {user} is learning from {channel} channel
      </h1>
    </div>
  );
}

export default ComponentF;
