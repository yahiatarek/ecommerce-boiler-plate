'use client';

import CardComponent from '@/components/Card';
import HeaderLayout from '@/components/Header-layout/HeaderLayout';
import { StoreState } from '@/store/models';
import { fetchCategoriesAction, fetchProductsAction } from '@/store/products/products.slice';
import { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

export default function ProductsPage() {
  const { categories, products } = useSelector(
    (state: StoreState) => ({
      categories: state.products.categories,
      products: state.products.products,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAction());
    dispatch(fetchProductsAction());
  }, [fetchCategoriesAction, fetchProductsAction]);

  return (
    <HeaderLayout pageName={'Products'}>
      <>
        {categories?.length === 0
          ? 'no categories to display'
          : categories?.map((category, index) => (
              <div className=" p-4 flex align-center justify-start w-full flex-col" key={index}>
                <p className="mb-4 text-xl font-extrabold">{category.name}</p>
                <div className="flex flex-wrap gap-4">
                  {products?.map((product, pIndex) => <CardComponent pageName="products" key={pIndex} product={product}></CardComponent>)}
                </div>
              </div>
            ))}
      </>
    </HeaderLayout>
  );
}
