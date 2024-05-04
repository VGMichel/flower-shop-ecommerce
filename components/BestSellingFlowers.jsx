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

  return <section className="py-24">
    <div className="container mx-auto">
      <h2>Best Selling Bouquets</h2>
    </div>
  </section>

}

export default BestSellingFlowers