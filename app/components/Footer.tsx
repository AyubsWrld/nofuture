import { Suspense } from 'react';
import { Await, NavLink } from 'react-router';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import type { FooterQuery, HeaderQuery } from 'storefrontapi.generated';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="flex flex-col p-20 bg-transparent rounded-[32px] overflow-hidden items-start self-stretch w-full">
            {footer?.menu && header.shop.primaryDomain?.url && (
              <FooterMenu
                menu={footer.menu}
                primaryDomainUrl={header.shop.primaryDomain.url}
                publicStoreDomain={publicStoreDomain}
              />
            )}
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

function FooterMenu({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: string;
  publicStoreDomain: string;
}) {
  return (
    <>
      <div className="flex justify-between items-start self-stretch w-full mb-8">
        {/* Brand Section */}
        <div className="flex flex-col w-[280px] items-start gap-2">
          <h2 className="w-fit mt-[-1.00px] font-medium text-2xl leading-[33.6px] whitespace-nowrap [font-family:'Inter_Tight',Helvetica] text-white tracking-[0]">
            Nofuture
          </h2>
          <p className="font-medium text-[#999999] self-stretch [font-family:'Inter_Tight',Helvetica] text-lg tracking-[0] leading-[25.2px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s.
          </p>
        </div>

        {/* About Section */}
        <nav className="inline-flex flex-col items-start gap-2">
          <h3 className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            About
          </h3>
          {(menu?.items || FALLBACK_FOOTER_MENU.items).slice(0, 2).map((item) => {
            if (!item.url) return null;
            const url =
              item.url.includes('myshopify.com') ||
              item.url.includes(publicStoreDomain) ||
              item.url.includes(primaryDomainUrl)
                ? new URL(item.url).pathname
                : item.url;
            const isExternal = !url.startsWith('/');
            return isExternal ? (
              <a
                href={url}
                key={item.id}
                rel="noopener noreferrer"
                target="_blank"
                className="w-fit [font-family:'Inter_Tight',Helvetica] font-medium text-[#fff] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap hover:text-white transition-colors"
              >
                {item.title}
              </a>
            ) : (
              <NavLink
                end
                key={item.id}
                to={url}
                prefetch="intent"
                className={({ isActive }) =>
                  `w-fit [font-family:'Inter_Tight',Helvetica] font-medium text-lg tracking-[0] leading-[25.2px] whitespace-nowrap transition-colors ${
                    isActive ? 'text-white font-bold' : 'text-[#999999] hover:text-white'
                  }`
                }
              >
                {item.title}
              </NavLink>
            );
          })}
        </nav>

        {/* Sections */}
        <nav className="inline-flex flex-col items-start gap-2">
          <h3 className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            Sections
          </h3>
          {(menu?.items || FALLBACK_FOOTER_MENU.items).slice(2, 5).map((item) => {
            if (!item.url) return null;
            const url =
              item.url.includes('myshopify.com') ||
              item.url.includes(publicStoreDomain) ||
              item.url.includes(primaryDomainUrl)
                ? new URL(item.url).pathname
                : item.url;
            const isExternal = !url.startsWith('/');
            return isExternal ? (
              <a
                href={url}
                key={item.id}
                rel="noopener noreferrer"
                target="_blank"
                className="w-fit [font-family:'Inter_Tight',Helvetica] font-medium text-[#fff] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap hover:text-white transition-colors"
              >
                {item.title}
              </a>
            ) : (
              <NavLink
                end
                key={item.id}
                to={url}
                prefetch="intent"
                className={({ isActive }) =>
                  `w-fit [font-family:'Inter_Tight',Helvetica] font-medium text-lg tracking-[0] leading-[25.2px] whitespace-nowrap transition-colors ${
                    isActive ? 'text-white font-bold' : 'text-[#fff] hover:text-white'
                  }`
                }
              >
                {item.title}
              </NavLink>
            );
          })}
        </nav>

        {/* Social & QR Card */}
        <Card className="w-[281px] h-[334px] bg-[#131313] rounded-3xl border-0">
          <CardContent className="flex flex-col items-start gap-2.5 p-2.5 h-full">
            <Button
              className="flex items-center gap-2.5 p-3 self-stretch w-full h-auto bg-white rounded-[32px] hover:bg-gray-100"
            >
              <div className="w-10 h-10 bg-[#141414] rounded-[20px] overflow-hidden flex items-center justify-center flex-shrink-0">
                <img className="w-3 h-3" alt="Twitter x" src="../../public/twitter-x.svg" />
              </div>
              <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-black text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
                Follow Nofuture on X
              </span>
            </Button>

            <div className="relative flex-1 self-stretch w-full bg-[#1e1e1e] rounded-[32px] overflow-hidden flex items-center justify-center">
              <div className="absolute left-[calc(50.00%_-_72px)] bottom-5 w-[143px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[25.2px]">
                Music Album <br />
                QR Code
              </div>
              <img
                className="absolute top-[31px] left-[75px] w-[110px] h-[110px]"
                alt="Qr code"
                src="../../public/qr-code.svg"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Copyright Section */}
      <div className="inline-flex items-center gap-[11px]">
        <p className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
          Copyrights 2024
        </p>
        <div className="w-1 h-1 bg-[#d9d9d9] rounded-sm" />
        <p className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
          Nofuture
        </p>
      </div>
    </>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Contact Us',
      type: 'SHOP_POLICY',
      url: '/contact',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Blog',
      type: 'SHOP_POLICY',
      url: '/blog',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Outerwear',
      type: 'SHOP_POLICY',
      url: '/collections/outerwear',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Accessories',
      type: 'SHOP_POLICY',
      url: '/collections/accessories',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633191992',
      resourceId: 'gid://shopify/ShopPolicy/23358111801',
      tags: [],
      title: 'Denim',
      type: 'SHOP_POLICY',
      url: '/collections/denim',
      items: [],
    },
  ],
};

export default Footer;
