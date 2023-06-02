import { useDeleteProductsMutation } from 'redux/productsAPI';
import { Btn, Img, Item } from './Products.styled';

export const ProductItem = ({ id, title, description, image, price }) => {
  const [deleteProduct, { isLoading: isDeleting }] =
    useDeleteProductsMutation();

  return (
    <Item>
      <Img src={image} alt={title} />
      <h5>{title}</h5>
      <p>{price} $</p>
      <p>Description: {description.slice(0, 100) + '...'}</p>
      <p>ID - {id}</p>
      <Btn onClick={() => deleteProduct(id)} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Btn>
    </Item>
  );
};
