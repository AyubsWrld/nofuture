import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import stockImage from '../assets/stockimage.png';
import {
  Card,
  CardContent,
} from '../components/ui/card.tsx';
import {Badge} from '../components/ui/badge';
import {Button} from '../components/ui/button';
import {Heart} from 'lucide-react';
import type {
  ProductItemFragment,
  CollectionItemFragment,
  RecommendedProductFragment,
} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';

export function ProductItem({
  product,
  loading,
}: {
  product:
    | CollectionItemFragment
    | ProductItemFragment
    | RecommendedProductFragment;
  loading?: 'eager' | 'lazy';
}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;
  
  return (
    <Link to={variantUrl} prefetch="intent">
      <Card
        className="
          flex flex-col 
          bg-[#141414] rounded-[8px] 
          border border-solid border-[#262626]
          cursor-pointer hover:bg-neutral-800 
          px-0 py-0
          transition-colors
          w-full
          aspect-square
          overflow-hidden
        "
      >
        <CardContent className="flex flex-col p-0 w-full h-full">
          {/* Image Container */}
          <div className="flex-1 w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
            <img
              alt={image?.altText || product.title}
              src={stockImage}
              className="w-full h-full object-contain mix-blend-screen"
            />
          </div>

          {/* TEXTUAL DETAILS */}
          <div className="flex items-end justify-between w-full px-4 py-3 gap-2 bg-[#141414]">
            {/* TITLE + PRICE */}
            <div className="flex flex-col items-start gap-0.5 flex-1 min-w-0">
              <h3 className="font-medium text-white text-sm leading-5 line-clamp-1">
                {product.title}
              </h3>
              <p className="font-medium text-[#909090] text-xs leading-4">
                <Money data={product.priceRange.minVariantPrice} />
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 p-0 hover:bg-neutral-700"
                onClick={(e) => e.preventDefault()}
              >
                <Heart className="w-4 h-4 text-white" />
              </Button>
              <Badge className="px-2 py-0.5 bg-[#2c2c2e] hover:bg-[#2c2c2e] rounded text-[9px] color-[#fff] leading-3 whitespace-nowrap">
                Clothes
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// IMPORTANT SWAP OUT THE IMAGE CONTAINER FOR THIS 
// {/* Image Container */}
// <Image
//   alt={image?.altText || product.title}
//   data={image || stockImage}
//   loading={loading}
//   className="w-full h-full object-cover"
// />
