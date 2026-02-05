import {useState} from 'react';
import {redirect, data} from 'react-router';
import type {Route} from './+types/preview';

const PREVIEW_PASSWORD = 'preview123';

function RenderCard() {
  return(
    <div classname='preview-content-container'>
    <div className="preview-card">
      {/* Logo */}
      <div className="preview-logo-container">
        <div className="preview-logo-wrapper">
          <div className="preview-logo-circle">
            <img
              src="/skull-logo.png"
              alt="Logo"
              className="preview-logo"
            />
          </div>
        </div>
      </div>
      <h1 className="preview-heading">
        We aren't open yet
      </h1>
      <p className="preview-description">
        If you were given a pasrm -rf .react-router build node_modules/.vitesword to preview the website with please enter it below.
      </p>
      <form method="post" className="preview-form">
        <div className="preview-form-group">
          <label htmlFor="password" className="preview-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Nofuture12"
            className="preview-input"
          />
        </div>
        <button type="submit" className="preview-submit">
          Enter
        </button>
      </form>
      <div className="preview-divider">Or</div>
      <button type="button" className="preview-notify">
        Notify Me
      </button>
    </div>
    <div className="preview-card">
      {/* Logo */}
      <div className="preview-logo-container">
        <div className="preview-logo-wrapper">
          <div className="preview-logo-circle">
            <img
              src="/skull-logo.png"
              alt="Logo"
              className="preview-logo"
            />
          </div>
        </div>
      </div>
      <h1 className="preview-heading">
        We aren't open yet
      </h1>
      <p className="preview-description">
        If you were given a password to preview the website with please enter it below.
      </p>
      <form method="post" className="preview-form">
        <div className="preview-form-group">
          <label htmlFor="password" className="preview-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Nofuture123"
            className="preview-input"
          />
        </div>
        <button type="submit" className="preview-submit">
          Enter
        </button>
      </form>
      <div className="preview-divider">Or</div>
      <button type="button" className="preview-notify">
        Notify Me
      </button>
    </div>
    </div>
  )
}

function PreviewArea() {
  return(
    <div className="preview-content-container">
      <div className="preview-content-video">
        <div className="preview-content-placeholder">
        </div>
      </div>
    </div>
  )
}

export async function action({request}: Route.ActionArgs) {
  const formData = await request.formData();
  const password = formData.get('password');
  
  if (password === PREVIEW_PASSWORD) {
    return redirect('/', {
      headers: {
        'Set-Cookie': `preview_access=true; Path=/; HttpOnly; Max-Age=86400; SameSite=Lax`,
      },
    });
  }
  
  return data({error: 'Incorrect password'}, {status: 401});
}

export default function PreviewPage() {
  const [password, setPassword] = useState('');
  
  return (
    <html lang="en" className="preview-page">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>
        <div className="preview-container">
          <RenderCard/>
          <RenderCard/>
          <PreviewArea/>
        </div>
      </body>
    </html>
  );
}
