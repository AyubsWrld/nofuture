import {
  type ReactNode,
  useEffect,
  useState,
} from 'react';
import { X } from 'lucide-react';

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
    setIsVisible(false);
  };
  
  const handleClose = () => {
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <>
      <style>{`
        .newsletter-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .newsletter-modal {
          position: relative;
          max-width: 900px;
          width: 100%;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .newsletter-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: #9d9d9d;
            font-size: 12px;
            cursor: pointer;
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease, color 0.2s ease;
            z-index: 10000;
            line-height: 1;
            /* margin: 8px; */
            background-color: rgba(255,255,255,0.2);
            border-radius: 999px;
        }
        
        .newsletter-close:hover {
          transform: scale(1.1);
          color: #cccccc;
        }
        
        .newsletter-container {
          background-color: #080808;
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          border-color: #262626;
          border-width: 1px;
          border-style: solid;
        }
        
        .newsletter-content {
          display: flex;
          align-items: center;
        }
        
        .newsletter-text {
          flex: 1;
          max-width: 500px;
          margin: 32px 32px; 
        }
        
        .newsletter-text h1 {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 16px 0;
          line-height: 1.2;
        }
        
        .newsletter-text p {
          font-size: 14px;
          color: #999999;
          margin: 0 0 48px 0;
          line-height: 1.4;
        }
        
        .newsletter-form {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .newsletter-input {
          flex: 1;
          padding: 10px 10px;
          background-color: transparent;
          border: 1px solid #333333;
          border-radius: 8px;
          color: #ffffff;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s ease;
        }
        
        .newsletter-input::placeholder {
          color: #666666;
        }
        
        .newsletter-input:focus {
          border-color: #555555;
        }
        
        .newsletter-button {
          padding: 14px 22px;
          background-color: #ffffff;
          color: #000000;
          border: none;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
          white-space: nowrap;
        }
        
        .newsletter-button:hover {
          background-color: #f0f0f0;
        }
        
        .newsletter-button:active {
          transform: translateY(0);
        }
        
        .newsletter-image {
          flex: 0 0 auto;
          width: 400px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .newsletter-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.8;
        }
        
        @media (max-width: 1024px) {
          .newsletter-image {
            width: 300px;
            height: 250px;
          }
        }
        
        @media (max-width: 768px) {
          .newsletter-close {
            top: 15px;
            right: 15px;
            font-size: 20px;
          }
          
          .newsletter-content {
            flex-direction: column;
          }
          
          .newsletter-text {
            max-width: 100%;
          }
          
          .newsletter-text h1 {
            font-size: 36px;
          }
          
          .newsletter-form {
            flex-direction: column;
            width: 100%;
          }
          
          .newsletter-input,
          .newsletter-button {
            width: 100%;
          }
          
          .newsletter-image {
            width: 250px;
            height: 200px;
          }
        }
        
        @media (max-width: 480px) {
          .newsletter-overlay {
            padding: 15px;
          }
          
          .newsletter-close {
            top: 12px;
            right: 12px;
            font-size: 18px;
          }
          
          .newsletter-container {
            padding: 30px 20px;
          }
          
          .newsletter-text h1 {
            font-size: 28px;
          }
          
          .newsletter-text p {
            font-size: 14px;
          }
        }
      `}</style>
      
      <div className='newsletter-overlay' onClick={handleClose}>
        <div className='newsletter-modal' onClick={(e) => e.stopPropagation()}>
          <div className='newsletter-container'>
            <button 
              onClick={handleClose} 
              className='newsletter-close'
              aria-label='Close newsletter'
            >
              <X size={24} />
            </button>
            
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
