"use client";

import { styled } from "@linaria/react";
import { useCallback, useEffect, useState } from "react";
import { MdPlace } from "react-icons/md";

import { fetchPlaces } from "../../_lib/api";
import {
  FoursquareOriginalPlace,
  FoursquarePlace,
  getCurrentPosition,
} from "../../_lib/utils";
import ModalHeader from "./ModalHeader";

const Wrapper = styled.div<{ displays: boolean }>`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: ${({ displays }) => (displays ? "block" : "none")};
  background: #fff;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const List = styled.ul`
  margin: 0 -4px;
  padding: 0 50px 30px 50px;

  @media screen and (max-width: 500px) {
    padding: 0 30px 30px 30px;
  }
`;

const Item = styled.li`
  list-style: none;
  padding: 12px 4px;
  border-bottom: 1px solid hsla(40, 60%, 50%, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 16px;

  &:hover {
    background: hsla(40, 60%, 50%, 0.1);
  }
`;

const PlaceIcon = styled.div`
  width: 24px;
  font-size: 24px;
  color: hsl(40, 60%, 50%);
  flex: 0;
`;

const Information = styled.div`
  flex: 1;
`;

const Location = styled.div`
  font-size: 15px;
  margin-bottom: 4px;
`;

const Details = styled.div`
  font-size: 12px;
  color: #999;
`;

const Loading = styled.div`
  @keyframes ball-scale {
    0% {
      transform: scale(0.0);
    }
    100% {
      transform: scale(1.0);
      opacity: 0;
    }
  }

  width: 60px;
  height: 60px;
  margin: auto;
  border-radius: 50%;
  background: hsla(40, 60%, 50%, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: ball-scale 1s 0s ease-in-out infinite;
`;

const toSortPlaces = (places: FoursquareOriginalPlace[]) => {
  return places.toSorted((a, b) => (a.distance ?? 0) - (b.distance ?? 0));
};

interface ModalProps {
  displays: boolean;
  setFsqPlace: (place: FoursquarePlace) => void;
  setDisplays: (value: boolean) => void;
}

const Modal = ({ displays, setFsqPlace, setDisplays }: ModalProps) => {
  const [places, setPlaces] = useState<FoursquareOriginalPlace[]>();
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [query, setQuery] = useState<string>("");

  const decide = useCallback(
    (place: FoursquareOriginalPlace) => {
      setFsqPlace({
        fsqId: place.fsq_id,
        name: place.name,
        latitude: place.geocodes?.latitude,
        longitude: place.geocodes?.longitude,
        formattedAddress: place.location.formatted_address,
      });
      setDisplays(false);
    },
    [setFsqPlace, setDisplays],
  );

  const search = useCallback(async () => {
    if (!latitude || !longitude) {
      return;
    }
    const result = await fetchPlaces(
      latitude.toString(),
      longitude.toString(),
      query,
    );
    if (!result.success) {
      alert(`スポットの取得に失敗しました: ${result.value}`);
      return;
    }
    setPlaces(toSortPlaces(result.value));
  }, [latitude, longitude, query]);

  useEffect(() => {
    (async () => {
      // 位置情報を取得
      const positionResult = await getCurrentPosition();
      if (positionResult.success) {
        setLatitude(positionResult.value.latitude);
        setLongitude(positionResult.value.longitude);
      } else {
        alert(`位置情報の取得に失敗しました: ${positionResult.value}`);
      }
    })();
  }, []);

  useEffect(() => {
    if (displays && !places) {
      search();
    }
  }, [displays, places, search]);

  return (
    <Wrapper displays={displays}>
      <ModalHeader
        latitude={latitude}
        longitude={longitude}
        query={query}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        setQuery={setQuery}
        setDisplays={setDisplays}
        search={search}
      />
      {places ? (
        <List>
          {places.map((place) => (
            <Item onClick={() => decide(place)}>
              <PlaceIcon>
                <MdPlace />
              </PlaceIcon>
              <Information>
                <Location>{place.name}</Location>
                <Details>
                  {place.distance ?? "?"} m ／{" "}
                  {place.location.formatted_address}
                </Details>
              </Information>
            </Item>
          ))}
        </List>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export default Modal;
