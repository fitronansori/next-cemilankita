import Link from "next/link";

import { ExternalLink, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const ButtonCTA = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button size="lg" asChild>
        <Link
          href="https://wa.me/6285738224566"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          Pesan Melalui WA
        </Link>
      </Button>

      <Button variant="outline" size="lg" asChild>
        <Link
          href="https://shopee.co.id/cemilankita"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-5 w-5" />
          Lihat di Shopee
        </Link>
      </Button>
    </div>
  );
};
export default ButtonCTA;
