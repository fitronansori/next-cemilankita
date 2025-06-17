import {
  Award,
  Clock,
  CreditCard,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Package,
  Phone,
  Shield,
  ShoppingCart,
  Truck,
  Twitter,
  Users,
  Zap,
} from "lucide-react";

export const features_data = [
  {
    icon: Zap,
    title: "Pengiriman Cepat",
    description: "Dapatkan cemilan favorit Anda dalam hitungan hari",
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: Shield,
    title: "Kualitas Terjamin",
    description: "Semua produk melalui kontrol kualitas ketat",
    color: "bg-secondary",
    textColor: "text-secondary-foreground",
  },
  {
    icon: Heart,
    title: "Harga Terjangkau",
    description: "Nikmati cemilan berkualitas dengan harga bersahabat",
    color: "bg-accent",
    textColor: "text-accent-foreground",
  },
];

export const products_data = [
  {
    id: 1,
    name: "Keripik Singkong Original",
    price: "Rp 15.000",
    rating: 4.8,
    image: "/next-cemilankita/produk.png",
    description:
      "Keripik singkong renyah dengan rasa original yang gurih, dibuat dari singkong pilihan berkualitas tinggi dengan cita rasa tradisional.",
  },
  {
    id: 2,
    name: "Keripik Pisang Manis",
    price: "Rp 12.000",
    rating: 4.7,
    image: "/next-cemilankita/produk.png",
    description:
      "Keripik pisang manis yang crispy dan lezat, terbuat dari pisang Raja dengan gula kelapa asli yang memberikan rasa manis alami.",
  },
  {
    id: 3,
    name: "Kacang Tanah Bawang",
    price: "Rp 18.000",
    rating: 4.9,
    image: "/next-cemilankita/produk.png",
    description:
      "Kacang tanah gurih dengan bumbu bawang yang khas, menggunakan kacang premium yang dipanggang dengan bumbu rahasia keluarga.",
  },
  {
    id: 4,
    name: "Kerupuk Udang Premium",
    price: "Rp 25.000",
    rating: 4.6,
    image: "/next-cemilankita/produk.png",
    description:
      "Kerupuk udang premium dengan rasa udang yang autentik, dibuat dari udang segar pilihan dan tepung berkualitas tinggi.",
  },
  {
    id: 5,
    name: "Emping Melinjo",
    price: "Rp 20.000",
    rating: 4.5,
    image: "/next-cemilankita/produk.png",
    description:
      "Emping melinjo tradisional yang renyah dan lezat, dibuat dari biji melinjo pilihan dengan tekstur crispy yang unik.",
  },
  {
    id: 6,
    name: "Keripik Tempe Crispy",
    price: "Rp 16.000",
    rating: 4.8,
    image: "/next-cemilankita/produk.png",
    description:
      "Keripik tempe crispy dengan bumbu rahasia yang nikmat dan bergizi, terbuat dari tempe segar dengan rempah pilihan.",
  },
];

export const testimonials_data = [
  {
    id: 1,
    name: "Sarah Indah",
    location: "Jakarta",
    rating: 5,
    comment:
      "Keripik singkongnya enak banget! Kriuk dan garing, rasanya otentik sekali. Pasti akan beli lagi.",
    avatar: "SI",
  },
  {
    id: 2,
    name: "Budi Santoso",
    location: "Bandung",
    rating: 5,
    comment:
      "Pengiriman cepat, produk fresh dan berkualitas. Keripik pisangnya jadi favorit keluarga di rumah.",
    avatar: "BS",
  },
  {
    id: 3,
    name: "Dewi Lestari",
    location: "Surabaya",
    rating: 4,
    comment:
      "Rasanya autentik dan harga terjangkau. Packaging juga rapi. Recommended untuk yang suka cemilan tradisional.",
    avatar: "DL",
  },
  {
    id: 4,
    name: "Ahmad Ridwan",
    location: "Yogyakarta",
    rating: 5,
    comment:
      "Kualitas produk sangat baik, rasa tidak kalah dengan cemilan dari daerah asalnya. Pelayanan juga ramah.",
    avatar: "AR",
  },
  {
    id: 5,
    name: "Siti Nurhaliza",
    location: "Medan",
    rating: 5,
    comment:
      "Sudah langganan di sini. Produknya selalu fresh dan konsisten rasanya. Terima kasih CemilanKita!",
    avatar: "SN",
  },
  {
    id: 6,
    name: "Reza Pratama",
    location: "Makassar",
    rating: 4,
    comment:
      "Enak dan harga bersaing. Kerupuk udangnya benar-benar terasa udangnya. Akan order lagi next time.",
    avatar: "RP",
  },
];

export const advantages_data = [
  {
    icon: Truck,
    title: "Pengiriman Gratis",
    description:
      "Gratis ongkir untuk pembelian minimal Rp 50.000 ke seluruh Indonesia",
    color: "bg-primary",
  },
  {
    icon: Award,
    title: "Kualitas Premium",
    description:
      "Produk berkualitas tinggi dengan standar keamanan pangan terjamin",
    color: "bg-secondary",
  },
  {
    icon: Clock,
    title: "Proses Cepat",
    description:
      "Pesanan diproses dalam 24 jam dan siap dikirim ke alamat Anda",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Pelayanan 24/7",
    description:
      "Tim customer service siap membantu Anda kapan saja diperlukan",
    color: "bg-chart-2",
  },
];

export const order_steps_data = [
  {
    step: 1,
    icon: ShoppingCart,
    title: "Pilih Produk",
    description:
      "Pilih cemilan favorit Anda dari berbagai macam produk berkualitas yang tersedia",
    color: "bg-primary",
  },
  {
    step: 2,
    icon: CreditCard,
    title: "Lakukan Pembayaran",
    description:
      "Bayar dengan mudah melalui transfer bank, e-wallet, atau COD sesuai pilihan Anda",
    color: "bg-secondary",
  },
  {
    step: 3,
    icon: Package,
    title: "Terima Pesanan",
    description:
      "Pesanan akan dikemas dengan rapi dan dikirim langsung ke alamat Anda dalam 1-3 hari",
    color: "bg-accent",
  },
];

export const footer_data = {
  company_info: {
    name: "CemilanKita",
    description:
      "Menyediakan cemilan tradisional Indonesia berkualitas tinggi dengan cita rasa autentik yang telah diwariskan turun temurun.",
    logo_icon: Heart,
  },
  quick_links: [
    { name: "Beranda", href: "#home" },
    { name: "Produk", href: "#products" },
    { name: "Keunggulan", href: "#advantages" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Cara Pesan", href: "#order" },
  ],
  featured_products: [
    { name: "Keripik Singkong", href: "#" },
    { name: "Keripik Pisang", href: "#" },
    { name: "Kacang Tanah", href: "#" },
    { name: "Kerupuk Udang", href: "#" },
    { name: "Emping Melinjo", href: "#" },
  ],
  contact_info: {
    phone: {
      label: "Telepon",
      value: "+62 857-3822-4566",
      icon: Phone,
      color: "bg-primary",
    },
    email: {
      label: "Email",
      value: "info@cemilankita.com",
      icon: Mail,
      color: "bg-secondary",
    },
    address: {
      label: "Alamat",
      street: "Jl. Raya Cemilan No. 123",
      city: "Jakarta Selatan, 12345",
      icon: MapPin,
      color: "bg-accent",
    },
  },
  social_media: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
  ],
  bottom_links: [
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Syarat & Ketentuan", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};
