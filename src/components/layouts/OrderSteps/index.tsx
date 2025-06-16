import { ArrowRight } from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";

import { order_steps_data } from "@/constants/data";

import OrderCTA from "./OrderCTA";
import OrderStepCard from "./OrderStepCard";

const OrderSteps = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container space-y-8">
        {/* Section Header */}
        <div className="text-center">
          <SectionTitle
            title="Cara Pemesanan"
            highlight="Mudah & Praktis"
            description="Pesan cemilan favorit Anda hanya dalam 3 langkah sederhana. Proses yang cepat, aman, dan terpercaya untuk kepuasan Anda."
          />
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {order_steps_data.map((step, index) => (
            <div key={step.step} className="relative">
              <OrderStepCard
                step_number={step.step}
                icon={step.icon}
                title={step.title}
                description={step.description}
                color={step.color}
              />

              {/* Arrow Connector */}
              {index < order_steps_data.length - 1 && (
                <div className="absolute top-1/2 -right-4 z-20 hidden -translate-y-1/2 transform md:block">
                  <ArrowRight className="text-primary h-8 w-8 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <OrderCTA />
      </div>
    </section>
  );
};

export default OrderSteps;
