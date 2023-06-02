import { Loader } from 'components/Loader/Loader';
import { useGetProductsQuery } from 'redux/productsAPI';
import { List } from './Products.styled';
import { ProductItem } from './ProductItem';

const Products = () => {
  const { isLoading, data: products, isError } = useGetProductsQuery();

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}

      {products && (
        <List>
          {products.map(product => (
            <ProductItem key={product.id} {...product} />
          ))}
        </List>
      )}

      {isError && <h2>error</h2>}
    </>
  );
};

export default Products;
