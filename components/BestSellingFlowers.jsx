import { client } from "@/app/lib/sanity"


// Get Data
const getData = async ()=> {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Best Sellers']._id, categories)]{
    _id,
      name,
      description,
      images,
      price,
      price_id,
      "slug": slug.current,
      "categories": categories[]-> {
      name
      }
  }`

  const data = await client.fetch(query);
  return data;
}


const BestSellingFlowers = async () => {
  const flowers = await getData();
  console.log(flowers)

  return <div>Best Selling Flowers</div>

}

export default BestSellingFlowers