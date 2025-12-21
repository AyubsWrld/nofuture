import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    console.log('Email submitted:', email);
    // Add your newsletter submission logic here
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className='newsletter-overlay' onClick={handleClose}>
        <div className='newsletter-modal' onClick={(e) => e.stopPropagation()}>
          
          <div className='newsletter-container'>
            <div className='newsletter-content'>
                <div className='newsletter-text'>
                    <h1>Subscribe to our newsletter</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    
                    <div className='newsletter-form'>
                    <input 
                        type='email' 
                        placeholder='name@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='newsletter-input'
                    />
                    <button onClick={handleSubmit} className='newsletter-button'>
                        Sign up
                    </button>
                    </div>
                </div>
                <div className='newsletter-image'>
                    <img src="/logocolor.png" alt="Logo" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
