import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type OrderStepCardProps = {
  step_number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const OrderStepCard = ({
  step_number,
  icon: Icon,
  title,
  description,
  color,
}: OrderStepCardProps) => {
  return (
    <Card className="relative transform overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardContent className="relative p-8 text-center">
        {/* Step Number */}
        <div className="from-primary to-primary/80 absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg">
          <span className="text-2xl font-bold text-white">{step_number}</span>
        </div>

        {/* Icon */}
        <div
          className={`inline-flex h-20 w-20 items-center justify-center ${color} mb-6 rounded-full shadow-lg`}
        >
          <Icon className="h-10 w-10 text-white" />
        </div>

        {/* Content */}
        <h3 className="mb-4 text-xl font-bold text-gray-900">{title}</h3>
        <p className="leading-relaxed text-gray-600">{description}</p>

        {/* Decorative Line */}
        <div className="from-primary to-accent absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 transform rounded-full bg-gradient-to-r"></div>
      </CardContent>
    </Card>
  );
};

export default OrderStepCard;
