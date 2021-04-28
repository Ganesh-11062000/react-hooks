import React from "react";
import { userContext, channelContext } from "../../App";

function ComponentF() {
  return (
    <div className="text-center">
      component F
      <channelContext.Consumer>
        {(channel) => {
          return (
            <userContext.Consumer>
              {(user) => {
                return (
                  <h1>
                    {user} is learning from {channel} channel
                  </h1>
                );
              }}
            </userContext.Consumer>
          );
        }}
      </channelContext.Consumer>
    </div>
  );
}

export default ComponentF;
