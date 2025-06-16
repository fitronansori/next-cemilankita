import BackgroundDecoration from "@/components/common/BackgroundDecoration";

import ButtonCTA from "./ButtonCTA";
import Features from "./Features";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-10 sm:py-0">
      <BackgroundDecoration />

      <div className="relative z-10 container space-y-8">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          {/* Main heading */}
          <h1 className="text-foreground text-4xl font-bold sm:text-6xl lg:text-7xl">
            Cemilan
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              {" "}
              Kita
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-xl leading-relaxed sm:text-2xl">
            Nikmati berbagai cemilan lezat dan berkualitas tinggi yang dipilih
            khusus untuk Anda. Rasakan pengalaman kuliner yang tak terlupakan
            dengan produk terbaik kami.
          </p>

          {/* CTA Buttons */}
          <ButtonCTA />

          {/* Feature highlights */}
          <Features />
        </div>
      </div>
    </section>
  );
};

export default Hero;
