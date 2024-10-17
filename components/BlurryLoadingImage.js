import React, { useEffect, useState } from 'react';

const BlurryLoadingImage = ({
  preview,
  image,
  alt,
  imageStyleClass,
  divStyleClass,
  bgColor = 'transparent',
}) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);

  const fetchImage = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, []);

  return (
    <div className={divStyleClass} style={{ overflow: 'hidden' }}>
      <img
         width={600}
         height={350}
        style={{
          filter: `${loading ? 'blur(20px)' : ''}`,
          transition: '.5s filter linear',
          width: '100%',
          background: bgColor,
        }}
        src={currentImage}
        alt={alt}
        className={imageStyleClass}
      />
    </div>
  );
};

export default BlurryLoadingImage;