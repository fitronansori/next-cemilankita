import { Star } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

type TestimonialCardProps = {
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
};

const TestimonialCard = ({
  name,
  location,
  rating,
  comment,
  avatar,
}: TestimonialCardProps) => {
  return (
    <Card className="gap-4">
      <CardHeader>
        <div className="flex items-center">
          <div className="bg-primary text-primary-foreground mr-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold">
            {avatar}
          </div>

          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-muted-foreground text-sm">{location}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < rating
                  ? "fill-current text-yellow-500"
                  : "text-gray-300"
              }`}
            />
          ))}

          <span className="ml-2 text-sm">({rating}/5)</span>
        </div>

        {/* Comment */}
        <p className="text-muted-foreground leading-relaxed italic">
          &ldquo;{comment}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
