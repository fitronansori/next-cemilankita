import Image from "next/image";
import Link from "next/link";

import { ShoppingCart, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProductCardProps = {
  product_data: {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    description: string;
  };
};

const ProductCard = ({ product_data }: ProductCardProps) => {
  return (
    <Card className="gap-4 pt-0">
      <CardHeader className="relative overflow-hidden p-0">
        <div className="">
          <Image
            src={product_data.image || "https://fitronansori.github.io/next-cemilankita/produk.png"}
            alt={product_data.name}
            width={400}
            height={400}
            className="size-full object-cover"
          />

          <div className="bg-background/80 absolute top-3 right-3 flex items-center gap-1 rounded-full px-2 py-1 backdrop-blur-sm">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{product_data.rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 px-4">
        <CardTitle className="text-lg">{product_data.name}</CardTitle>

        <CardDescription>{product_data.description}</CardDescription>
      </CardContent>

      <CardFooter className="justify-between px-4">
        <span className="text-primary text-lg font-bold">
          {product_data.price}
        </span>

        <Button size="sm" asChild>
          <Link
            href={`https://wa.me/6285738224566?text=Halo, saya tertarik dengan ${product_data.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingCart className="h-4 w-4" />
            Pesan
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
