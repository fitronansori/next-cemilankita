import SectionTitle from "@/components/common/SectionTitle";

import { advantages_data } from "@/constants/data";

import AdvantageCard from "./AdvantageCard";

const Advantages = () => {
  return (
    <section className="from-primary/5 via-secondary/5 to-accent/5 bg-gradient-to-br py-10 md:py-14">
      <div className="container space-y-8">
        <SectionTitle
          title="Mengapa Memilih"
          highlight="CemilanKita?"
          description="Keunggulan yang membuat kami berbeda dari yang lain"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages_data.map((item, index) => (
            <AdvantageCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
