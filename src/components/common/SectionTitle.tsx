import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
};

const SectionTitle = ({
  title,
  highlight,
  description,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
        {title}
        {highlight && <span className="text-primary"> {highlight}</span>}
      </h2>

      {description && (
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
