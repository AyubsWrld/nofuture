import {useLoaderData} from 'react-router';
import type {Route} from './+types/pages.$handle';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';

export const meta: Route.MetaFunction = ({data}) => {
  return [{title: `Hydrogen | ${data?.page.title ?? ''}`}];
};

export async function loader(args: Route.LoaderArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context, request, params}: Route.LoaderArgs) {
  if (!params.handle) {
    throw new Error('Missing page handle');
  }

  const [{page}] = await Promise.all([
    context.storefront.query(PAGE_QUERY, {
      variables: {
        handle: params.handle,
      },
    }),
  ]);

  if (!page) {
    throw new Response('Not Found', {status: 404});
  }

  redirectIfHandleIsLocalized(request, {handle: params.handle, data: page});

  return {
    page,
  };
}

function loadDeferredData({context}: Route.LoaderArgs) {
  return {};
}

export default function Page() {
  const {page} = useLoaderData<typeof loader>();
  
  // Check if this is the contact us page
  const isContactPage = page.handle === 'contact-us-1' || page.title.toLowerCase().includes('contact');

  if (isContactPage) {
    return <ContactUsPage page={page} />;
  }

  // Default page layout for other pages
  return (
    <div className="page">
      <header>
        <h1>{page.title}</h1>
      </header>
      <main dangerouslySetInnerHTML={{__html: page.body}} />
    </div>
  );
}

function ContactUsPage({page}: {page: any}) {
  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-container">
          {/* Heading */}
          <h1 className="contact-heading">
            Get in touch with us.
            <br />
            We're here to assist
            <br />
            you.
          </h1>

          {/* Content Card */}
          <div className="content-card">
            {/* Social Media Icons Row */}
            <div className="social-row">
              {/* Facebook */}
              <a 
                href="https://facebook.com/nofutureproject" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon">
                  <svg
                    className="icon-svg"
                    viewBox="0 0 171 170"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M85.0715 169.164C132.055 169.164 170.143 131.296 170.143 84.5822C170.143 37.8688 132.055 0 85.0715 0C38.0878 0 0 37.8688 0 84.5822C0 131.296 38.0878 169.164 85.0715 169.164Z"
                      stroke="black"
                      strokeOpacity="0.7"
                      strokeWidth="6"
                    />
                    <path
                      d="M80.6485 109.59L80.5781 88.2857H71.4633V79.1548H80.5781V73.0682C80.5781 64.8527 85.6562 60.8936 92.9722 60.8936C96.4764 60.8936 99.4883 61.1558 100.366 61.2718V69.8575L95.292 69.8598C91.3133 69.8598 90.5434 71.7537 90.5434 74.5328V79.1548H101.846L98.8081 88.2857H90.5434V109.59H80.6485Z"
                      fill="black"
                      fillOpacity="0.7"
                    />
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/nofutureproject" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon">
                  <svg
                    className="icon-svg"
                    viewBox="0 0 171 170"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M85.0715 169.164C132.055 169.164 170.143 131.296 170.143 84.5822C170.143 37.8688 132.055 0 85.0715 0C38.0878 0 0 37.8688 0 84.5822C0 131.296 38.0878 169.164 85.0715 169.164Z"
                      stroke="black"
                      strokeOpacity="0.7"
                      strokeWidth="6"
                    />
                    <g opacity="0.7">
                      <path
                        d="M113.989 50.2529H57.1558C45.0222 50.2529 35.2392 40.4699 35.2392 28.3363V28.3363C35.2392 16.2026 45.0222 6.41968 57.1558 6.41968H113.989C126.123 6.41968 135.906 16.2026 135.906 28.3363V28.3363C135.906 40.4699 126.123 50.2529 113.989 50.2529Z"
                        transform="translate(20.083, 34.747)"
                        fill="white"
                        stroke="black"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M71.405 64.4608C71.7238 66.6108 71.3566 68.8065 70.3555 70.7357C69.3545 72.665 67.7706 74.2294 65.8292 75.2066C63.8877 76.1838 61.6876 76.5239 59.5417 76.1786C57.3959 75.8333 55.4135 74.8202 53.8766 73.2833C52.3397 71.7464 51.3266 69.7641 50.9813 67.6182C50.636 65.4723 50.9761 63.2722 51.9533 61.3308C52.9305 59.3893 54.4949 57.8055 56.4242 56.8044C58.3534 55.8034 60.5492 55.4361 62.6991 55.755C64.8922 56.0802 66.9225 57.1021 68.4902 58.6697C70.0579 60.2374 71.0798 62.2677 71.405 64.4608Z"
                        transform="translate(20.083, 34.747)"
                        fill="white"
                        stroke="black"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <ellipse
                        cx="95.359"
                        cy="46.282"
                        rx="3.876"
                        ry="3.875"
                        fill="black"
                      />
                    </g>
                  </svg>
                </div>
              </a>
            </div>

            {/* Contact Info Card */}
            <div className="info-card">
              <div className="info-layout">
                {/* Left Section */}
                <div className="info-left">
                  <div className="info-badge">
                    <span className="badge-text">Contact Info</span>
                  </div>
                  <h2 className="info-title">
                    We are always happy to assist you
                  </h2>
                </div>

                {/* Right Section - Email */}
                <div className="info-right">
                  <div className="email-section">
                    <div className="email-header">
                      <h3 className="email-title">Email Address</h3>
                      <div className="email-divider" />
                    </div>
                  </div>
                  <div className="email-link-wrapper">
                    <a
                      href="mailto:nofutureproject@gmail.com"
                      className="email-link"
                    >
                      nofutureproject@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-wrapper {
          min-height: 100vh;
          background-color: #0B0B0B;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 12px;
        }

        .contact-container {
          width: 100%;
          max-width: 880px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-heading {
          color: white;
          font-weight: 700;
          font-size: 1.75rem;
          line-height: 1.25;
          word-break: break-word;
        }

        .content-card {
          border-radius: 24px;
          background-color: rgba(255, 255, 255, 0.24);
          padding: 10px;
          backdrop-filter: blur(4px);
        }

        .social-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 10px;
        }

        .social-card {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          border-radius: 20px;
          border: 1px solid #E4E7EC;
          padding: 20px;
          min-height: 160px;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .social-card:hover {
          transform: scale(1.02);
        }

        .social-icon {
          position: relative;
          width: 100px;
          height: 100px;
        }

        .icon-svg {
          width: 100%;
          height: 100%;
        }

        .info-card {
          background-color: white;
          border-radius: 20px;
          border: 1px solid #E4E7EC;
          padding: 20px;
        }

        .info-layout {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
        }

        .info-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }

        .info-badge {
          display: inline-flex;
          padding: 12px 14px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 10px;
          border-top: 2px solid #333;
          background-color: #212121;
          box-shadow: 0 -3px 0 0 #1A1A1A inset, 0 0 0 1px #1A1A1A;
        }

        .badge-text {
          color: white;
          text-align: center;
          font-weight: 500;
          font-size: 0.75rem;
          line-height: 1.5;
        }

        .info-title {
          color: black;
          font-weight: 700;
          font-size: 1.25rem;
          line-height: 1.3;
          max-width: 100%;
        }

        .info-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          padding: 0;
          width: 100%;
        }

        .email-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }

        .email-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }

        .email-title {
          color: black;
          font-weight: 600;
          font-size: 1rem;
        }

        .email-divider {
          height: 3px;
          width: 100%;
          min-width: 100px;
          background-color: black;
        }

        .email-link-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }

        .email-link {
          color: black;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          word-break: break-all;
        }

        .email-link:hover {
          text-decoration: underline;
        }

        /* Responsive styles */
        @media (min-width: 480px) {
          .contact-heading {
            font-size: 2.25rem;
          }

          .social-card {
            padding: 24px;
            min-height: 180px;
          }

          .social-icon {
            width: 110px;
            height: 110px;
          }

          .info-title {
            font-size: 1.375rem;
          }

          .email-link {
            font-size: 1rem;
          }
        }

        @media (min-width: 640px) {
          .contact-wrapper {
            padding: 40px 24px;
          }

          .contact-container {
            gap: 32px;
          }

          .contact-heading {
            font-size: 2.75rem;
          }

          .social-row {
            flex-direction: row;
          }

          .social-card {
            padding: 28px;
            min-height: 220px;
          }

          .social-card:hover {
            transform: scale(1.05);
          }

          .social-icon {
            width: 130px;
            height: 130px;
          }

          .info-card {
            padding: 28px;
          }

          .info-left {
            gap: 20px;
          }

          .info-right {
            padding: 20px;
            gap: 24px;
          }

          .email-title {
            font-size: 1.125rem;
          }

          .email-link {
            font-size: 1.125rem;
          }

          .info-title {
            font-size: 1.625rem;
          }

          .badge-text {
            font-size: 0.875rem;
          }
        }

        @media (min-width: 768px) {
          .contact-wrapper {
            padding: 56px 48px;
          }

          .contact-container {
            gap: 48px;
          }

          .contact-heading {
            font-size: 3.5rem;
          }

          .social-card {
            padding: 36px;
            min-height: 240px;
          }

          .social-icon {
            width: 150px;
            height: 150px;
          }

          .info-card {
            padding: 36px;
          }

          .info-layout {
            flex-direction: row;
            gap: 32px;
          }

          .info-left {
            max-width: 350px;
          }

          .info-right {
            padding: 28px;
          }

          .email-title {
            font-size: 1.25rem;
          }

          .email-link {
            font-size: 1.25rem;
          }

          .info-title {
            font-size: 1.875rem;
            max-width: 309px;
          }
        }

        @media (min-width: 1024px) {
          .contact-wrapper {
            padding: 64px 96px;
          }

          .contact-container {
            gap: 56px;
          }

          .contact-heading {
            font-size: 4.25rem;
          }

          .social-card {
            padding: 40px;
            min-height: 255px;
          }

          .social-icon {
            width: 165px;
            height: 165px;
          }

          .info-card {
            padding: 40px;
          }

          .info-right {
            padding: 32px;
          }

          .email-title {
            font-size: 1.375rem;
          }

          .email-link {
            font-size: 1.375rem;
          }

          .info-title {
            font-size: 2rem;
          }
        }

        @media (min-width: 1280px) {
          .contact-wrapper {
            padding: 80px 256px;
          }

          .contact-container {
            gap: 64px;
          }

          .contact-heading {
            font-size: 90px;
            line-height: 100px;
          }

          .social-icon {
            width: 170px;
            height: 169px;
          }
        }
      `}</style>
    </>
  );
}

const PAGE_QUERY = `#graphql
  query Page(
    $language: LanguageCode,
    $country: CountryCode,
    $handle: String!
  )
  @inContext(language: $language, country: $country) {
    page(handle: $handle) {
      handle
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
` as const;
