import { useState } from "react";
import { formatNaira } from "@/lib/format";
import { ProductCard } from "./product-card";
import { X, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

export type MockProduct = {
  id: string;
  title: string;
  price_naira: number;
  signed_image_urls: string[];
  is_trending?: boolean;
  description?: string;
  variants?: { name: string; options: string[] }[];
};

const MOCK_DATA: MockProduct[] = [
  {
    id: "mock-1",
    title: "Premium Wireless Headphones",
    price_naira: 45000,
    signed_image_urls: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"],
    is_trending: true,
    description: "High quality wireless headphones with active noise cancellation.",
    variants: [
      { name: "Color", options: ["Black", "Silver"] }
    ]
  },
  {
    id: "mock-2",
    title: "Minimalist Smartwatch",
    price_naira: 25000,
    signed_image_urls: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"],
    description: "Sleek smartwatch to track your fitness and notifications.",
    variants: [
      { name: "Color", options: ["Black", "Rose Gold", "Silver"] },
      { name: "Size", options: ["40mm", "44mm"] }
    ]
  },
  {
    id: "mock-3",
    title: "Running Sneakers",
    price_naira: 35000,
    signed_image_urls: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"],
    is_trending: true,
    description: "Lightweight running sneakers for everyday comfort.",
    variants: [
      { name: "Size", options: ["40", "42", "44"] },
      { name: "Color", options: ["Red", "Black/White"] }
    ]
  }
];

export function ProductCatalog({ products = MOCK_DATA }: { products?: MockProduct[] }) {
  const [selectedProduct, setSelectedProduct] = useState<MockProduct | null>(null);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  const handleSelectProduct = (product: MockProduct) => {
    setSelectedProduct(product);
    // Pre-select first options
    const initialVars: Record<string, string> = {};
    if (product.variants) {
      product.variants.forEach(v => {
        if (v.options.length > 0) {
          initialVars[v.name] = v.options[0];
        }
      });
    }
    setSelectedVariants(initialVars);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    
    // Check if all variants are selected
    if (selectedProduct.variants) {
      const missing = selectedProduct.variants.find(v => !selectedVariants[v.name]);
      if (missing) {
        toast.error(`Please select a ${missing.name}`);
        return;
      }
    }

    toast.success(`Added ${selectedProduct.title} to cart!`);
    setSelectedProduct(null);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-neon/60 hover:shadow-neon"
            onClick={() => handleSelectProduct(product)}
          >
            <div className="relative aspect-square overflow-hidden bg-surface">
              {product.signed_image_urls?.[0] ? (
                <img
                  src={product.signed_image_urls[0]}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="grid h-full w-full place-items-center text-muted-foreground">No image</div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1 p-3">
              <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
                {product.title}
              </h3>
              <div className="mt-auto font-display text-lg font-black text-neon">
                {formatNaira(product.price_naira)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <h2 className="font-display text-xl font-bold line-clamp-1">{selectedProduct.title}</h2>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="rounded-full p-2 hover:bg-surface"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="max-h-[70vh] overflow-y-auto p-4">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-surface mb-4">
                {selectedProduct.signed_image_urls?.[0] && (
                  <img 
                    src={selectedProduct.signed_image_urls[0]} 
                    alt="" 
                    className="h-full w-full object-cover" 
                  />
                )}
              </div>

              <div className="mb-4 font-display text-2xl font-black text-neon">
                {formatNaira(selectedProduct.price_naira)}
              </div>

              {selectedProduct.description && (
                <p className="mb-6 text-sm text-muted-foreground">
                  {selectedProduct.description}
                </p>
              )}

              {selectedProduct.variants && selectedProduct.variants.length > 0 && (
                <div className="mb-6 space-y-4">
                  {selectedProduct.variants.map((variant) => (
                    <div key={variant.name}>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {variant.name}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {variant.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => setSelectedVariants({ ...selectedVariants, [variant.name]: opt })}
                            className={`rounded-md border px-4 py-2 text-sm transition-colors ${
                              selectedVariants[variant.name] === opt
                                ? "border-neon bg-neon/10 font-bold text-neon"
                                : "border-border bg-surface hover:border-muted-foreground"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={handleAddToCart}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-neon px-4 py-3 font-bold text-neon-foreground shadow-neon transition hover:opacity-90"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
