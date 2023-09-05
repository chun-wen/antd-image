import React, { useState } from 'react';
import { Image } from 'antd';

const images = [
  'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
  'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
];

const CustomImage = () => {
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

export default CustomImage;
