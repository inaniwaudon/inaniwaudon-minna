import { styled } from "@linaria/react";

const Heading = styled.h2`
  color: #444;
  font-size: 20px;
  margin-top: 24px;
  margin-bottom: 8px;
  padding-left: 16px;
  border-left: solid 1px #333;
`;

const H2 = (props: React.ComponentPropsWithoutRef<"h2">) => {
  return <Heading {...props} />;
};

export default H2;
