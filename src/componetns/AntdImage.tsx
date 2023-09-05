import React, { useState } from 'react';
import { Image, ImageProps } from 'antd';

interface Props extends ImageProps {
  images: string[];
}

const AntdImage = ({ images, ...props }: Props) => {
  const [previewCurrent, setPreviewCurrent] = useState(0);
  const renderImages = images.map((item) => (
    <Image width={200} src={item} alt={item} key={item} />
  ));

  const imageCountClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
  ) => {
    e.stopPropagation();
    setPreviewCurrent(index);
  };
  const thumbnailsContent = images.map((item, index) => (
    <button key={item} onClick={(e) => imageCountClick(e, index)}>
      <Image width={20} height={20} src={item} alt={item} preview={false} />
    </button>
  ));

  return (
    <>
      <Image.PreviewGroup
        preview={{
          current: previewCurrent,
          countRender: () => thumbnailsContent,
          onChange: (current, total) => {
            setPreviewCurrent(current);
          },
        }}
      >
        {renderImages}
      </Image.PreviewGroup>
    </>
  );
};

export default AntdImage;
