import { Card, CardContent } from "@/components/ui/card";

import { features_data } from "@/constants/data";

const Features = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {features_data.map((item, index) => {
        return (
          <Card
            key={index}
            className="bg-card/50 border-border backdrop-blur-sm"
          >
            <CardContent className="p-6 text-center">
              <div
                className={`${item.color} mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg`}
              >
                <item.icon className={`${item.textColor} h-6 w-6`} />
              </div>
              <h3 className="text-card-foreground mb-2 text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Features;
