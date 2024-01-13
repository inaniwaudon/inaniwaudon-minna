import { styled } from "@linaria/react";

const Heading = styled.h3`
  color: #333;
  font-size: 16px;
  font-weight: normal;
  margin: 0 0 4px 0;

  &:before {
    color: #ccc;
    content: '# ';
    margin-right: 4px;
  }
`;

const H3 = (props: React.ComponentPropsWithoutRef<"h3">) => {
  return <Heading {...props} />;
};

export default H3;
