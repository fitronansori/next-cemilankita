import SectionTitle from "@/components/common/SectionTitle";

import { testimonials_data } from "@/constants/data";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container space-y-8">
        {/* Section Title */}
        <SectionTitle
          title="Apa Kata"
          highlight="Pelanggan"
          description="Testimoni dari pelanggan yang puas dengan produk cemilan tradisional berkualitas dari CemilanKita"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials_data.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              comment={testimonial.comment}
              avatar={testimonial.avatar}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-primary mb-2 text-4xl font-bold">1000+</div>
            <p className="text-muted-foreground">Pelanggan Puas</p>
          </div>
          <div className="text-center">
            <div className="text-primary mb-2 text-4xl font-bold">4.8</div>
            <p className="text-muted-foreground">Rating Rata-rata</p>
          </div>
          <div className="text-center">
            <div className="text-primary mb-2 text-4xl font-bold">99%</div>
            <p className="text-muted-foreground">Tingkat Kepuasan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
