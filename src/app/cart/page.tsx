'use client';

import CardComponent from '@/components/Card';
import HeaderLayout from '@/components/Header-layout/HeaderLayout';
import { StoreState } from '@/store/models';
import { Card } from 'flowbite-react';
import { useMemo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

export default function CartPage() {
  const { cartProducts } = useSelector(
    (state: StoreState) => ({
      cartProducts: state.products.cart,
    }),
    shallowEqual
  );

  const total = useMemo(() => {
    let totalPrice = 0;
    cartProducts.forEach(product => {
      totalPrice = totalPrice + Number(product.price) * product.productRecurrence;
    });

    return totalPrice;
  }, [cartProducts]);

  return (
    <HeaderLayout pageName={'Cart'}>
      <>
        <div className=" p-4 flex align-center justify-start w-full flex-col">
          <p className="size-11 text-xl font-extrabold">Cart</p>
          <div className="flex align-center justify-between">
            <div className="flex flex-wrap gap-4">
              {cartProducts?.length === 0
                ? 'no cart products to display'
                : cartProducts?.map((product, index) => <CardComponent pageName="cart" key={index} product={product}></CardComponent>)}
            </div>
            <Card>
              <div className="min-w-80 flex items-center flex-col justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  <div className="mb-6">Total Price: {total.toFixed(2)} $</div>
                </span>
                <button className="cursor-pointer w-full rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300">
                  Checkout
                </button>
              </div>
            </Card>
          </div>
        </div>
      </>
    </HeaderLayout>
  );
}
