import { client } from "@/app/lib/sanity"
import Link from 'next/link';
import BestSellingCarousel from "./BestSellingCarousel";


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
      <h2 className="text-center">Best Selling Bouquets</h2>
      <p className="text-center mb-[30px]">Your Trusted Flower Shop, Where Every Petal Tells a Story</p>
      <BestSellingCarousel flowers={flowers} />
      <Link href="/our-flowers">
        <button className="btn btn-accent mx-auto">See all bouquets</button>
      </Link>
    </div>
  </section>

}

export default BestSellingFlowers