
import {productData} from '../../Data/Ecommerce.json';
import "./not.css"
import { useCart } from 'react-use-cart';

const NotProduct = () => {

    const {addItem} = useCart()

  return (
    <div className='not-body'>
      {productData.map((item, index) => {
        return <>
          <div className="cards" key={index}>
          {/* Use item.image.img1 for the product image */}
          {/* <img src={require(`../${item.image.img1}`)} alt="Product Image" /> */}
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-price">${item.price.currentPrice}</p>
            <p>{item.retailerName}</p>
            <p>{item.desc}</p>
            <button onClick={() => addItem(item)}>Add to Cart</button>
          </div>
        </div>
        </>
      
})}
    </div>
  );
};

export default NotProduct;
