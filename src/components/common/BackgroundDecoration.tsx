const BackgroundDecoration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="border-primary/20 absolute top-10 left-10 h-16 w-16 rotate-45 animate-pulse border-2">
        <div className="border-primary/10 h-full w-full rotate-45 border"></div>
      </div>
      <div className="border-secondary/20 absolute right-20 bottom-20 h-20 w-20 rotate-12 animate-bounce border-2">
        <div className="border-secondary/10 h-full w-full rotate-12 border"></div>
      </div>

      <div className="absolute top-1/4 right-10 opacity-20">
        <div className="grid grid-cols-3 gap-1">
          <div className="bg-primary/30 h-3 w-3 animate-pulse rounded-sm"></div>
          <div className="bg-secondary/30 h-3 w-3 animate-pulse rounded-sm delay-100"></div>
          <div className="bg-accent/30 h-3 w-3 animate-pulse rounded-sm delay-200"></div>
          <div className="bg-accent/30 h-3 w-3 animate-pulse rounded-sm delay-75"></div>
          <div className="bg-primary/30 h-3 w-3 animate-pulse rounded-sm delay-150"></div>
          <div className="bg-secondary/30 h-3 w-3 animate-pulse rounded-sm delay-225"></div>
        </div>
      </div>

      <div className="bg-primary/10 absolute top-32 left-1/4 h-24 w-32 rotate-12 transform animate-pulse rounded-full"></div>
      <div className="bg-secondary/10 absolute right-1/4 bottom-32 h-36 w-28 -rotate-6 transform animate-bounce rounded-full"></div>

      <div className="border-primary/15 absolute top-1/3 left-16 h-12 w-12 animate-ping rounded-full border-4">
        <div className="bg-primary/20 m-auto mt-2 h-4 w-4 animate-pulse rounded-full"></div>
      </div>
      <div className="border-secondary/15 absolute right-16 bottom-1/3 h-16 w-16 animate-bounce rounded-full border-4">
        <div className="bg-secondary/20 m-auto mt-3 h-6 w-6 animate-pulse rounded-full"></div>
      </div>

      <div className="via-primary/15 absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-transparent to-transparent opacity-50"></div>
      <div className="via-secondary/15 absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-transparent to-transparent opacity-50"></div>

      <div className="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-br via-transparent"></div>

      <div className="from-primary/10 to-accent/10 absolute -top-40 -right-32 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br blur-3xl filter"></div>
      <div className="from-secondary/8 to-primary/8 absolute -bottom-40 -left-32 h-96 w-96 animate-bounce rounded-full bg-gradient-to-tr blur-3xl filter"></div>
    </div>
  );
};

export default BackgroundDecoration;
