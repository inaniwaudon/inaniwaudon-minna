import { styled } from "@linaria/react";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import { Button } from "../../_lib/styles";

const Wrapper = styled.div`
  padding: 16px 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  position: sticky;
  top: 0;

  @media screen and (max-width: 500px) {
    padding: 16px 30px;
  }
`;

const Item = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Label = styled.label`
  width: 5em;
  margin-right: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BackButton = styled.button`
  width: 24px;
  line-height: 24px;
  color: #666;
  font-size: 24px;
  padding: 4px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #999;
  }
`;

const SearchButton = styled(Button)`
  width: 16px;
  line-height: 16px;
  font-size: 16px;
  padding: 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

interface ModalHeaderProps {
  latitude?: number;
  longitude?: number;
  query?: string;
  search: () => void;
  setLatitude: (value: number) => void;
  setLongitude: (value: number) => void;
  setQuery: (value: string) => void;
  setDisplays: (value: boolean) => void;
}

const ModalHeader = ({
  latitude,
  longitude,
  query,
  setLatitude,
  setLongitude,
  setQuery,
  setDisplays,
  search,
}: ModalHeaderProps) => {
  return (
    <Wrapper>
      <div>
        <Item>
          <Label>緯度</Label>
          <input
            value={latitude}
            onChange={(e) => setLatitude(parseFloat(e.currentTarget.value))}
          />
        </Item>
        <Item>
          <Label>経度</Label>
          <input
            value={longitude}
            onChange={(e) => setLongitude(parseFloat(e.currentTarget.value))}
          />
        </Item>
        <Item>
          <Label>キーワード</Label>
          <input
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </Item>
      </div>
      <ButtonWrapper>
        <BackButton onClick={() => setDisplays(false)}>
          <MdClose />
        </BackButton>
        <SearchButton
          disabled={latitude === undefined || longitude === undefined}
          onClick={search}
        >
          <IoSearch />
        </SearchButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ModalHeader;
