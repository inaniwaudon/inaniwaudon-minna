import { styled } from "@linaria/react";

const Wrapper = styled.div<{ displays: boolean }>`
  width: 100%;
  height: 100vh;
  display: ${({ displays }) => (displays ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Override = styled.div`
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
`;

const Content = styled.div`
  max-height: calc(100% - 100px);
  margin: 30px 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (max-width: 500px) {
    margin: 30px 30px;
  }
`;

interface ModalProps {
  displays: boolean;
  setDisplays: (value: boolean) => void;
}

const Modal = ({ displays, setDisplays }: ModalProps) => {
  return (
    <Wrapper displays={displays}>
      <Override onClick={() => setDisplays(false)} />
      <Content>あ</Content>
    </Wrapper>
  );
};

export default Modal;
