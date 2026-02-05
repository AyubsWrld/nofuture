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
          <>
            <footer className="footer-responsive">
              {footer?.menu && header.shop.primaryDomain?.url && (
                <FooterMenu
                  menu={footer.menu}
                  primaryDomainUrl={header.shop.primaryDomain.url}
                  publicStoreDomain={publicStoreDomain}
                />
              )}
            </footer>
            <style>{footerStyles}</style>
          </>
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
      <div className="footer-content-responsive">
        {/* Brand Section */}
        <div className="brand-section-responsive">
          <h2 className="brand-title-responsive">
            Nofuture
          </h2>
          <p className="brand-description-responsive">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s.
          </p>
        </div>

        {/* About Section */}
        <nav className="nav-section-responsive">
          <h3 className="nav-title-responsive">
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
                className="nav-link-responsive"
              >
                {item.title}
              </a>
            ) : (
              <NavLink
                end
                key={item.id}
                to={url}
                prefetch="intent"
                className="nav-link-responsive"
              >
                {item.title}
              </NavLink>
            );
          })}
        </nav>

        {/* Sections */}
        <nav className="nav-section-responsive">
          <h3 className="nav-title-responsive">
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
                className="nav-link-responsive"
              >
                {item.title}
              </a>
            ) : (
              <NavLink
                end
                key={item.id}
                to={url}
                prefetch="intent"
                className="nav-link-responsive"
              >
                {item.title}
              </NavLink>
            );
          })}
        </nav>

        {/* Social & QR Card */}
        <Card className="social-card-responsive">
          <CardContent className="card-content-responsive">
            <Button className="social-button-responsive">
              <div className="icon-wrapper-responsive">
                <img className="icon-responsive" alt="Twitter x" src="/twitter-x.svg" />
              </div>
              <span className="button-text-responsive">
                Follow Nofuture on X
              </span>
            </Button>

            <div className="qr-container-responsive">
              <div className="qr-text-responsive">
                Music Album <br />
                QR Code
              </div>
              <img
                className="qr-code-responsive"
                alt="Qr code"
                src="/qr-code.svg"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Copyright Section */}
      <div className="copyright-responsive">
        <p className="copyright-text-responsive">
          Copyrights 2024
        </p>
        <div className="divider-responsive" />
        <p className="copyright-text-responsive">
          Nofuture
        </p>
      </div>
    </>
  );
}

const footerStyles = `
  .footer-responsive {
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    background-color: transparent;
    border-radius: 32px;
    overflow: hidden;
    align-items: flex-start;
    width: 100%;
    margin-top: auto;
  }

  @media (min-width: 768px) {
    .footer-responsive {
      padding: 60px 40px;
    }
  }

  @media (min-width: 1024px) {
    .footer-responsive {
      padding: 80px;
    }
  }

  .footer-content-responsive {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 32px;
    gap: 32px;
  }

  @media (min-width: 768px) {
    .footer-content-responsive {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 24px;
    }
  }

  @media (min-width: 1024px) {
    .footer-content-responsive {
      flex-wrap: nowrap;
      gap: 20px;
    }
  }

  .brand-section-responsive {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 8px;
  }

  @media (min-width: 768px) {
    .brand-section-responsive {
      width: calc(50% - 12px);
      max-width: 350px;
    }
  }

  @media (min-width: 1024px) {
    .brand-section-responsive {
      width: 280px;
      max-width: none;
    }
  }

  .brand-title-responsive {
    width: fit-content;
    margin: 0;
    font-family: Inter Tight, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.4;
    white-space: nowrap;
    color: white;
    letter-spacing: 0;
  }

  @media (min-width: 768px) {
    .brand-title-responsive {
      font-size: 22px;
    }
  }

  @media (min-width: 1024px) {
    .brand-title-responsive {
      font-size: 24px;
    }
  }

  .brand-description-responsive {
    margin: 0;
    font-family: Inter Tight, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    color: #999999;
    letter-spacing: 0;
  }

  @media (min-width: 768px) {
    .brand-description-responsive {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    .brand-description-responsive {
      font-size: 18px;
      line-height: 1.4;
    }
  }

  .nav-section-responsive {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .nav-section-responsive {
      width: calc(50% - 12px);
    }
  }

  @media (min-width: 1024px) {
    .nav-section-responsive {
      width: auto;
      min-width: 120px;
    }
  }

  .nav-title-responsive {
    width: fit-content;
    margin: 0;
    font-family: Inter Tight, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.4;
    color: white;
    letter-spacing: 0;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    .nav-title-responsive {
      font-size: 22px;
    }
  }

  @media (min-width: 1024px) {
    .nav-title-responsive {
      font-size: 24px;
    }
  }

  .nav-link-responsive {
    width: fit-content;
    font-family: Inter Tight, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    color: #999999;
    letter-spacing: 0;
    white-space: nowrap;
    text-decoration: none;
    transition: color 0.2s;
    min-width: fit-content;
  }

  @media (min-width: 768px) {
    .nav-link-responsive {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    .nav-link-responsive {
      font-size: 18px;
      line-height: 1.4;
    }
  }

  .nav-link-responsive:hover {
    color: white;
  }

  .social-card-responsive {
    width: 100%;
    height: auto;
    min-height: 280px;
    background-color: #131313;
    border-radius: 24px;
    border: 0;
  }

  @media (min-width: 768px) {
    .social-card-responsive {
      width: 100%;
      min-height: 300px;
    }
  }

  @media (min-width: 1024px) {
    .social-card-responsive {
      width: 281px;
      height: 334px;
      min-height: 334px;
    }
  }

  .card-content-responsive {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
    height: 100%;
  }

  .social-button-responsive {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 32px;
    border: none;
    cursor: pointer;
  }

  .icon-wrapper-responsive {
    width: 36px;
    height: 36px;
    background-color: #141414;
    border-radius: 18px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  @media (min-width: 768px) {
    .icon-wrapper-responsive {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
  }

  .icon-responsive {
    width: 10px;
    height: 10px;
  }

  @media (min-width: 768px) {
    .icon-responsive {
      width: 12px;
      height: 12px;
    }
  }

  .button-text-responsive {
    font-family: Inter Tight, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.4;
    color: black;
    letter-spacing: 0;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    .button-text-responsive {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    .button-text-responsive {
      font-size: 18px;
    }
  }

  .qr-container-responsive {
    position: relative;
    flex: 1;
    width: 100%;
    background-color: #1e1e1e;
    border-radius: 32px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 180px;
  }

  @media (min-width: 768px) {
    .qr-container-responsive {
      min-height: 200px;
    }
  }

  .qr-text-responsive {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 16px;
    width: 143px;
    font-family: Inter Tight, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: white;
    letter-spacing: 0;
    line-height: 1.4;
  }

  @media (min-width: 768px) {
    .qr-text-responsive {
      font-size: 18px;
      bottom: 20px;
    }
  }

  .qr-code-responsive {
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 90px;
  }

  @media (min-width: 768px) {
    .qr-code-responsive {
      width: 110px;
      height: 110px;
      top: 31px;
    }
  }

  @media (min-width: 1024px) {
    .qr-code-responsive {
      left: 75px;
      transform: none;
    }
  }

  .copyright-responsive {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    .copyright-responsive {
      gap: 11px;
    }
  }

  .copyright-text-responsive {
    width: fit-content;
    margin: 0;
    font-family: Inter Tight, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.4;
    color: #999999;
    letter-spacing: 0;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    .copyright-text-responsive {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    .copyright-text-responsive {
      font-size: 18px;
    }
  }

  .divider-responsive {
    width: 4px;
    height: 4px;
    background-color: #d9d9d9;
    border-radius: 2px;
  }
`;

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
