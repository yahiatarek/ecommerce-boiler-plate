'use client';

import HeaderLayout from '@/components/Header-layout/HeaderLayout';
import { Slider } from '@/components/Slider/Slider';
import { StoreState } from '@/store/models';
import { fetchCategoriesAction, fetchProductsAction } from '@/store/products/products.slice';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const [bgImageSrc, setBgImageSrc] = useState('bg-img-0.webp');

  const { categories } = useSelector(
    (state: StoreState) => ({
      categories: state.products.categories,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [fetchCategoriesAction]);

  return (
    <HeaderLayout pageName={'Home'}>
      <section className="main-section">
        <Image
          fetchPriority="high"
          className="main-section__bg-image"
          fill
          src={`/bg-images/${bgImageSrc}`}
          alt="background"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="overlay"></div>
        <Slider
          images={categories?.map(category => {
            return { src: category.imgSrc, name: category.name };
          })}
        />
      </section>
    </HeaderLayout>
  );
};

export default HomePage;
