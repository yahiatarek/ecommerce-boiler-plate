import { CartProduct, Product } from '@/store/models/products.model';
import { addToCartAction, removeFromCartAction } from '@/store/products/products.slice';
import { Card } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const CardComponent = ({ product, pageName }: { product: Product | CartProduct; pageName: 'cart' | 'products' }) => {
  const dispatch = useDispatch();

  const renderAddRemoveButton = useMemo(() => {
    return (
      <button
        onClick={e => {
          e?.stopPropagation();
          pageName === 'cart' ? dispatch(removeFromCartAction(product)) : dispatch(addToCartAction(product));
        }}
        className="cursor-pointer rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
        {pageName === 'cart' ? 'Remove from cart' : 'Add to cart'}
      </button>
    );
  }, [pageName]);

  const router = useRouter();

  return (
    <Card
      onClick={e => {
        e?.stopPropagation();
        router.push(`/details/${product.id}`);
      }}
      className="max-w-xs cursor-pointer"
      imgAlt={product.name as string}
      imgSrc={product.img}>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          <>{`${product.price} $`}</>
        </span>
        {pageName === 'cart' && (
          <div className="flex align-middle justify-center -translate-x-7 absolute w-10 h-5 -translate-y-80 bg-red-600 rounded-full text-cyan-50">
            {(product as CartProduct)?.productRecurrence}
          </div>
        )}
        {renderAddRemoveButton}
      </div>
    </Card>
  );
};

export default CardComponent;
