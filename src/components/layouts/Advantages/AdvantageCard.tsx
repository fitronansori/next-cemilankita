import { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AdvantageCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
};

const AdvantageCard = ({
  icon: Icon,
  title,
  description,
  color,
}: AdvantageCardProps) => {
  return (
    <Card className="group gap-4 border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardHeader>
        <div
          className={`h-16 w-16 ${color} flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-card-foreground group-hover:text-primary mb-3 text-xl font-bold transition-colors duration-300">
          {title}
        </CardTitle>

        <CardDescription className="muted-foreground text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default AdvantageCard;
