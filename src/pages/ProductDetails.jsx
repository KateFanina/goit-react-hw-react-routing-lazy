import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { getProductById } from '../fakeAPI';

function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';
  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          delectus ut dolorem at odit, non possimus ab laboriosam deleniti
          voluptate sunt officia repellendus f ugiat quia adipisci eius
          recusandae, maiores neque!
        </p>
      </div>
    </main>
  );
}
export default ProductDetails;
