import { BsInstagram, BsTwitter } from 'react-icons/bs';
import styled from 'styled-components';
import PageAnchor from './common/PageAnchor';

const RestaurantDescription = styled.p`
  line-height: 1.8;
  margin: 0;
`;

const AddressList = styled.ul`
  margin: 8px 0 0 0;
  padding-left: 20px;
  border-left: solid 1px #ccc;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AddressItem = styled.li`
  list-style: none;
  word-break: break-all;
  display: flex;
`;

const AddressItemHead = styled.div`
  width: 4em;
  flex-shrink: 0;
  text-algin: center;
  font-weight: bold;
  display: inline-block;
`;

interface RestaurantProps {
  title: string;
  description: string;
  place: string;
  maps: string;
  tel?: string;
  web?: string;
  twitter?: string;
  instagram?: string;
}

const Restaurant = ({
  title,
  description,
  place,
  maps,
  tel,
  web,
  twitter,
  instagram,
}: RestaurantProps) => (
  <div style={{ margin: '16px 0' }}>
    <h3 style={{ margin: 0 }}>{title}</h3>
    <RestaurantDescription>{description}</RestaurantDescription>
    <AddressList>
      <AddressItem>
        <AddressItemHead>住所</AddressItemHead>
        <PageAnchor href={maps}>{place}</PageAnchor>
      </AddressItem>
      {tel && (
        <AddressItem>
          <AddressItemHead>TEL</AddressItemHead>
          <PageAnchor href={`tel:${tel}`}>{tel}</PageAnchor>
        </AddressItem>
      )}
      {web && (
        <AddressItem>
          <AddressItemHead>Web</AddressItemHead>
          <PageAnchor href={web}>{web}</PageAnchor>
        </AddressItem>
      )}
      {twitter && (
        <AddressItem>
          <AddressItemHead>
            <BsInstagram />
          </AddressItemHead>
          <PageAnchor href={`https://twitter.com/${twitter}`}>@{twitter}</PageAnchor>
        </AddressItem>
      )}
      {instagram && (
        <AddressItem>
          <AddressItemHead>
            <BsTwitter />
          </AddressItemHead>
          <PageAnchor href={`https://instagram.com/${instagram}`}>@{instagram}</PageAnchor>
        </AddressItem>
      )}
    </AddressList>
  </div>
);
export default Restaurant;
