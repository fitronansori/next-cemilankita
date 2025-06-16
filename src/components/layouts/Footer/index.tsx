import Link from "next/link";

import { footer_data } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="from-primary/5 via-secondary/5 to-accent/5 border-border border-t bg-gradient-to-br">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                <footer_data.company_info.logo_icon
                  className="text-primary-foreground h-5 w-5"
                  fill="currentColor"
                />
              </div>
              <h3 className="text-card-foreground text-xl font-bold">
                {footer_data.company_info.name}
              </h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              {footer_data.company_info.description}
            </p>
            <div className="flex space-x-4">
              {footer_data.social_media.map((social, index) => {
                const Icon = social.icon;
                const colorClasses = [
                  "bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary",
                  "bg-secondary/10 border-secondary/20 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary",
                  "bg-accent/10 border-accent/20 hover:bg-accent hover:text-accent-foreground hover:border-accent",
                ];

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 ${colorClasses[index]}`}
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-card-foreground text-xl font-bold">
              Menu Cepat
            </h4>
            <ul className="space-y-2">
              {footer_data.quick_links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-base leading-relaxed transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-card-foreground text-xl font-bold">
              Produk Unggulan
            </h4>
            <ul className="space-y-2">
              {footer_data.featured_products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-muted-foreground hover:text-primary text-base leading-relaxed transition-colors duration-300"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-card-foreground text-xl font-bold">
              Hubungi Kami
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div
                  className={`h-12 w-12 ${footer_data.contact_info.phone.color} flex items-center justify-center rounded-2xl transition-transform duration-300 hover:scale-110`}
                >
                  <footer_data.contact_info.phone.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">
                    {footer_data.contact_info.phone.label}
                  </p>
                  <p className="text-card-foreground font-semibold">
                    {footer_data.contact_info.phone.value}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className={`h-12 w-12 ${footer_data.contact_info.email.color} flex items-center justify-center rounded-2xl transition-transform duration-300 hover:scale-110`}
                >
                  <footer_data.contact_info.email.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">
                    {footer_data.contact_info.email.label}
                  </p>
                  <p className="text-card-foreground font-semibold">
                    {footer_data.contact_info.email.value}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className={`h-12 w-12 ${footer_data.contact_info.address.color} flex items-center justify-center rounded-2xl transition-transform duration-300 hover:scale-110`}
                >
                  <footer_data.contact_info.address.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">
                    {footer_data.contact_info.address.label}
                  </p>
                  <p className="text-card-foreground font-semibold">
                    {footer_data.contact_info.address.street}
                  </p>
                  <p className="text-card-foreground font-semibold">
                    {footer_data.contact_info.address.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-border mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-muted-foreground text-base">
              <p>
                &copy; 2025 {footer_data.company_info.name}. Seluruh hak cipta
                dilindungi.
              </p>
            </div>
            <div className="flex space-x-6 text-base">
              {footer_data.bottom_links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
