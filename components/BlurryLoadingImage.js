import React, { useEffect, useState } from 'react';

const BlurryLoadingImage = ({
  preview,
  image,
  alt,
  imageStyleClass,
  divStyleClass,
  bgColor = 'transparent',
}) => {
  const [currentImage, setCurrentImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        // Load preview image
        const previewModule = await import(`../assets/imgs/small/${preview}.png`);
        setCurrentImage(previewModule.default);

        // Load full image
  
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, []);
useEffect( ()=>{
  const loadImagesMain = async () => {

  const imageModule = await import(`../assets/imgs/${image}.png`);
  setCurrentImage(imageModule.default);
  setLoading(false);

}

  loadImagesMain()
},[image])
  if (!currentImage) return null;

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
        src={currentImage.src}
        alt={alt}
        className={imageStyleClass}
      />
    </div>
  );
};

export default BlurryLoadingImage;