'use client';

import HeaderLayout from '@/components/Header-layout/HeaderLayout';
import { StoreState } from '@/store/models';
import { fetchProductsAction } from '@/store/products/products.slice';
import { useEffect, useMemo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { TransformComponent, TransformWrapper, useControls } from 'react-zoom-pan-pinch';

export default function DetailsPage({ params }: { params: { id: number } }) {
  const { products } = useSelector(
    (state: StoreState) => ({
      products: state.products.products,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [fetchProductsAction]);

  const product = useMemo(() => {
    let prod = products.find(product => product.id === Number(params.id));
    return prod;
  }, [params.id, products]);

  return (
    <HeaderLayout pageName={'Details'}>
      <div className="flex-col lg:flex-row w-full gap-7 h-full p-10 flex align-middle justify-center">
        <div className="w-full overflow-hidden">
          <p className="text-center text-4xl mb-7">ZOOM HERE:</p>

          <TransformWrapper doubleClick={{ mode: 'toggle', step: 1 }} centerOnInit>
            <TransformComponent
              contentProps={{
                id: 'image-transform-component',
              }}
              wrapperStyle={{ height: '100%', overflow: 'hidden', width: '100%', cursor: 'zoom-in' }}>
              <img className="w-full h-full" src={product?.img} />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="w-full text-center flex-col flex align-center justify-start">
          <p className="text-4xl mb-7">{product?.name}</p>
          {product?.description}
        </div>
      </div>
    </HeaderLayout>
  );
}
