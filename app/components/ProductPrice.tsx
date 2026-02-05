// import {Money} from '@shopify/hydrogen';
// import type {MoneyV2} from '@shopify/hydrogen/storefront-api-types';
//
// export function ProductPrice({
//   price,
//   compareAtPrice,
// }: {
//   price?: MoneyV2;
//   compareAtPrice?: MoneyV2 | null;
// }) {
//   return (
//     <div className="product-price">
//       {compareAtPrice ? (
//         <div className="product-price-on-sale">
//           {price ? <Money data={price} /> : null}
//           <s>
//             <Money data={compareAtPrice} />
//           </s>
//         </div>
//       ) : price ? (
//         <Money data={price} />
//       ) : (
//         <span>&nbsp;</span>
//       )}
//     </div>
//   );
// }
import {Money} from '@shopify/hydrogen';
import type {MoneyV2} from '@shopify/hydrogen/storefront-api-types';

export function ProductPrice({
  price,
  compareAtPrice,
}: {
  price?: MoneyV2;
  compareAtPrice?: MoneyV2 | null;
}) {
  return (
    <div className="flex items-center gap-4">
      {price && (
        <span className="text-white text-2xl lg:text-[32px] font-medium tracking-wide">
          <Money data={price} />
        </span>
      )}
      {compareAtPrice && (
        <span className="text-[#D3D3D3] text-lg lg:text-2xl line-through tracking-wide">
          <Money data={compareAtPrice} />
        </span>
      )}
    </div>
  );
}
