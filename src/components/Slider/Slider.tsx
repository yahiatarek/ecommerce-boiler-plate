import { Carousel } from 'flowbite-react';

import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['carousel'] = {
  item: {
    base: 'h-full lg:h-auto',
    wrapper: {
      off: 'flex align-center justify-center',
      on: 'w-full flex-shrink-0 transform cursor-grab snap-center',
    },
  },
};

export const Slider = ({ images }: { images: { name: string; src: string }[] }) => {
  return (
    <div className="carousel-container h-full flex justify-center w-11/12">
      <Carousel theme={customTheme} className="flex relative carousel w-11/12">
        {images?.map((image, index) => (
          <>
            <img fetchPriority="high" className="image h-full" key={index} src={image.src} />
            <div className="image-overlay">
              <p className="image-title">{image.name}</p>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};
