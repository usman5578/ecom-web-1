
import { products } from '../../utils jh/mock'

const ProductListJh = () => {
    const productChecks=products.slice(0,3);
    console.log(productChecks);
    
  return (
    <div className='flex justify-evenly mt=16'>
{productChecks.map((items)=>(
  <div key={items.id}>{items.name} {items.price}  </div>
  
))}
    </div>
  )
}

export default ProductListJh