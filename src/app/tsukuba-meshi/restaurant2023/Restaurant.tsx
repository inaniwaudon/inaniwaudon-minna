import { styled } from '@linaria/react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

import Anchor from '@/components/common/Anchor';

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
  width: 5em;
  flex-shrink: 0;
  text-algin: center;
  font-weight: bold;
  display: inline-block;
`;

interface RestaurantProps {
  title: string;
  description: string;
  place: string;
  date?: string;
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
  date,
  maps,
  tel,
  web,
  twitter,
  instagram,
}: RestaurantProps) => {
  const fields = [
    { key: '住所', value: place, href: maps },
    { key: '営業日時', value: date },
    { key: 'TEL', value: tel, href: `tel:${tel}` },
    { key: 'Web', value: web, href: web },
    { key: <BsTwitter />, value: twitter, href: `https://twitter.com/${twitter}` },
    { key: <BsInstagram />, value: instagram, href: `https://instagram.com/${instagram}` },
  ];

  return (
    <div style={{ margin: '16px 0' }}>
      <h3 style={{ margin: 0 }}>{title}</h3>
      <RestaurantDescription>{description}</RestaurantDescription>
      <AddressList>
        {fields
          .flatMap((field) => (field.value ? field : []))
          .map((field, index) => (
            <AddressItem key={index}>
              <AddressItemHead>{field.key}</AddressItemHead>
              {field.href ? <Anchor href={field.href}>{field.value}</Anchor> : field.value}
            </AddressItem>
          ))}
      </AddressList>
    </div>
  );
};
export default Restaurant;
