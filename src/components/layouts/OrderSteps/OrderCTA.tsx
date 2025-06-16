import Link from "next/link";

import { ExternalLink, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const OrderCTA = () => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-lg">
      <h3 className="mb-4 text-2xl font-bold text-gray-900">
        Siap Untuk Memesan?
      </h3>
      <p className="mx-auto mb-6 max-w-2xl text-gray-600">
        Hubungi kami sekarang untuk mulai memesan cemilan lezat atau jika Anda
        memiliki pertanyaan tentang produk kami.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link
            href="https://wa.me/6285738224566?text=Halo,%20saya%20tertarik%20untuk%20memesan%20cemilan%20dari%20CemilanKita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-5" />
            Hubungi WhatsApp
          </Link>
        </Button>

        <Button variant="outline" size="lg" asChild>
          <Link
            href="https://shopee.co.id/cemilankita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="size-5" />
            Lihat di Shopee
          </Link>
        </Button>
      </div>
      {/* Contact Info */}
      <div className="mt-6 border-t border-gray-200 pt-6">
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Customer Service:</span> Senin -
          Minggu, 08:00 - 22:00 WIB
        </p>
      </div>
    </div>
  );
};
export default OrderCTA;
