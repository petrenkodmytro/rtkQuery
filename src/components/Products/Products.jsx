import { Loader } from 'components/Loader/Loader';
import {
  useDeleteProductsMutation,
  useGetProductsQuery,
} from 'redux/productsAPI';
import { Btn, Img, Item, List } from './Products.styled';

const Products = () => {
  const { isLoading, data: products, isError } = useGetProductsQuery();
  const [deleteProduct, delInfo] = useDeleteProductsMutation();
  console.log(products);

  return (
    <>
      {delInfo.isLoading && <h1>Deleting...</h1>}
      {isLoading && <Loader isLoading={isLoading} />}
      {products && (
        <List>
          {products.map(({ id, title, description, image, price }) => (
            <Item key={id}>
              <Img src={image} alt={title} />

              <h5>{title}</h5>
              <p>{price} $</p>
              <p>Description: {description.slice(0, 100) + '...'}</p>
              <p>ID - {id}</p>
              <Btn onClick={() => deleteProduct(id)}>Delete</Btn>
            </Item>
          ))}
        </List>
      )}

      {isError && <h2>error</h2>}
    </>
  );
};

export default Products;
