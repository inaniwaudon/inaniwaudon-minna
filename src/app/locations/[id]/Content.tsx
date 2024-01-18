"use client";

import { styled } from "@linaria/react";

import { useState } from "react";
import CheckinContent from "./CheckinContent";
import Timeline from "./Timeline";
import { Checkin } from "./parser";

const Wrapper = styled.div`
  display: flex;
`;

interface MainProps {
  checkins: Checkin[];
}

const Main = ({ checkins }: MainProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Wrapper>
      <Timeline checkins={checkins} setSelectedIndex={setSelectedIndex} />
      <CheckinContent checkin={checkins[selectedIndex]} />
    </Wrapper>
  );
};

export default Main;
