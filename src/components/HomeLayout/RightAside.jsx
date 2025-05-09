import React from "react";
import SocialLogin from "./SocialLogin";
import FindUsOn from "./FindUsOn";
import QZone from "./QZone";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin/>
      <FindUsOn></FindUsOn>
      <QZone></QZone>
    </div>
  );
};

export default RightAside;
