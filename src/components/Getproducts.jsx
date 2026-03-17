import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const Getproducts = () => {
  // 1.Inititlize hooks to help you manage the state of your application
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState ("");

  // below we specify the image base url
  const img_url = "https://hope.alwaysdata.net/static/images/"

  // 2.Create a function to help you fetch the products from your API
  const fetchProducts = async() =>{

    // come up with a try and catch block
    try{
      // 4.Update the loading hook
      setLoading(true)

      // 5.Interract with your endpoint for fetching your products
      const response = await axios.get("https://hope.alwaysdata.net/api/get_products")

      // 6.Update the products hook with the response given from the API
      setProducts(response.data);

      // set the loading hook back to default
      setLoading(false)
    }
    catch(error){
      // If there is an error;
      // set the loading hook back to default
      setLoading(false);

      // Update the error hook with a message
      setError(error.message)
    }
  }

  // we shall use the use effect hook. This hook enables us to automatically re-render new features incase of any changes.
  useEffect(() => {
    fetchProducts()
  }, [])

  // console.log(products)

  return (
    <div className='row'>
      <h3 className="text-primary">Available products</h3>

        {loading && <Loader/> }
        <h4 className="text-danger">{error}</h4>


        {/* map the products fetched from the API to the UI */}
        {products.map((product) => (
          <div key={product.id} className="col-md-3 justify-content-ceter mb-3">
            <div className="card shadow">
              
              <img 
              src={img_url + product.product_photo}
              className="product_img mt-3" 
              alt="product_name" />

              <div className="card-body">
                <h5 className="text-primary">{product.product_name}</h5>

                <p className="text-dark">{product.product_description.slice(0, 100)}...</p>

                <h4 className="text-warning">Ksh {product.product_cost}</h4>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Getproducts;