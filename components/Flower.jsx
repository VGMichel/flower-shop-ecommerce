'use client';

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from 'react-icons/cg'

const Flower = ({flower}) => {
    const bestSellersFlowerCat =  flower.categories.find(
        (flower)=> flower.name === 'Best Sellers'
    );
    // console.log(bestSellersFlowerCat);
  return <div className="group">Flower</div>;
}

export default Flower;