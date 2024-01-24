import { CSSProperties, styled } from "@linaria/react";
import { useCallback, useRef } from "react";
import { v4 as uuidV4 } from "uuid";

import { DndContext, DragOverEvent, UniqueIdentifier } from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { MdAdd } from "react-icons/md";
import { Button } from "../../_lib/styles";
import {
  Photo,
  convertImageToWebp,
  getImageUrl,
  tempImagePrefix,
} from "../../_lib/utils";

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Thumbnail = styled.div`
  height: 100px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  flex: 0 0 100px;
  background-color: rgba(40, 60%, 50%, 0.05);
  background-position: center;
  background-size: cover;

  &:hover {
    opacity: 0.8;
  }
`;

const AddButton = styled(Button)`
  height: 100px;
  color: hsl(40, 60%, 50%);
  font-size: 24px;
  flex: 0 0 100px;
  border: 1px solid hsl(40, 60%, 50%);
  box-sizing: border-box;
  background: transparent;

  &:hover {
    background: hsla(40, 60%, 50%, 0.1);
  }
`;

interface DraggableThumbnailProps {
  id: string;
  photo: Photo;
}

const DraggableThumbnail = ({ id, photo }: DraggableThumbnailProps) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: photo.src,
  });
  const styles: CSSProperties = {};
  if (photo.src !== "" && photo.src.startsWith(tempImagePrefix)) {
    styles.backgroundImage = `url(${getImageUrl(id, photo.src)})`;
  }
  if (transform) {
    styles.transform = `translate3d(${transform.x}px, ${transform.y}px, 0)`;
  }
  return (
    <Thumbnail style={styles} {...listeners} {...attributes} ref={setNodeRef} />
  );
};

interface PhotoUploaderProps {
  id: string;
  photos: Photo[];
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
}

const PhotoUploader = ({ id, photos, setPhotos }: PhotoUploaderProps) => {
  const photoSrcs = photos.map((photo) => photo.src);

  const inputRef = useRef<HTMLInputElement>(null);

  const reorder = (
    prev: Photo[],
    active: UniqueIdentifier,
    over: UniqueIdentifier,
  ) => {
    const activeIndex = prev.findIndex(
      (photo) => photo.src === active.toString(),
    );
    const overIndex = prev.findIndex((photo) => photo.src === over.toString());
    if (activeIndex === -1 || overIndex === -1) {
      return prev;
    }
    const newArray = [...prev];
    newArray.splice(activeIndex, 1);
    newArray.splice(overIndex, 0, prev[activeIndex]);
    return newArray;
  };

  // ドラッグで画像の順序を並び替え
  const onDragOver = (e: DragOverEvent) => {
    const { over, active } = e;
    if (over && active && over.id !== active.id) {
      setPhotos((prev) => reorder(prev, active.id, over.id));
    }
  };

  const onChangeImage = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.files) {
        return;
      }
      const files = [...e.currentTarget.files];

      // 識別用に仮の ID を付与
      const tempSrcs = files.map(() => `${tempImagePrefix}${uuidV4()}`);
      const addedPhotos = files.map((_, index) => ({
        src: tempSrcs[index],
        alt: "",
      }));
      setPhotos((previous) => [...previous, ...addedPhotos]);

      // 画像を WebP に変換
      const converted = await Promise.all(
        files.map((file) => convertImageToWebp(file)),
      );

      // 変換後の画像に差し替え
      setPhotos((previous) => {
        const newPhotos = [...previous];
        for (let i = 0; i < converted.length; i++) {
          const result = converted[i];
          if (result.success) {
            const index = newPhotos.findIndex(
              (photo) => photo.src === tempSrcs[i],
            );
            if (index > -1) {
              newPhotos[index].src = result.value;
            }
          }
        }
        return newPhotos;
      });
    },
    [setPhotos],
  );

  return (
    <>
      <DndContext onDragOver={onDragOver}>
        <SortableContext items={photoSrcs}>
          <ThumbnailWrapper>
            {photos.map((photo) => (
              <DraggableThumbnail id={id} photo={photo} key={photo.src} />
            ))}
            <AddButton onClick={() => inputRef.current?.click()}>
              <MdAdd />
            </AddButton>
          </ThumbnailWrapper>
        </SortableContext>
      </DndContext>
      <input
        ref={inputRef}
        type="file"
        id="image"
        multiple
        accept="image/*"
        onChange={onChangeImage}
        style={{ display: "none" }}
      />
    </>
  );
};

export default PhotoUploader;
