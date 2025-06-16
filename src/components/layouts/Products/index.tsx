import Link from "next/link";

import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";

import { products_data } from "@/constants/data";

import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container space-y-8">
        <SectionTitle
          title="Produk"
          highlight="Unggulan"
          description="Pilihan cemilan terbaik dengan cita rasa autentik Indonesia yang dibuat dengan bahan berkualitas tinggi"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products_data.map((item) => (
            <ProductCard key={item.id} product_data={item} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link
              href="https://shopee.co.id/cemilankita"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat Semua Produk
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
