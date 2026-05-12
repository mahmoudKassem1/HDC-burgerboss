import React from 'react';

function ContactUs() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '50px', maxWidth: '1200px', margin: '0 auto', gap: '50px' }}>
      
      {/* Left Side: Image and Info */}
      <div style={{ flex: 1 }}>
        
        {/* Simple, direct image tag. No logic. */}
        <img 
          src={require('../assets/images/burger.jpg')} 
          alt="Contact BurgerBoss" 
          style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px', marginBottom: '30px' }} 
        />
        
        <h3 style={{ color: '#e65c00', fontSize: '1.8rem', marginBottom: '15px' }}>Visit The Boss</h3>
        <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <strong>Headquarters:</strong> Alexandria, Egypt<br />
          <strong>Phone:</strong> +20 123 456 7890<br />
          <strong>Email:</strong> boss@burgerboss.com
        </p>
      </div>

      {/* Right Side: Static Form */}
      <div style={{ flex: 1, backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: '#e65c00', fontSize: '2.5rem', marginBottom: '20px' }}>Drop a Line</h2>
        
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Name</label>
            <input 
              type="text" 
              style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box' }} 
              placeholder="Enter your name" 
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Email</label>
            <input 
              type="email" 
              style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box' }} 
              placeholder="boss@example.com" 
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Message</label>
            <textarea 
              rows="5" 
              style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box', resize: 'vertical' }} 
              placeholder="What's on your mind?"
            ></textarea>
          </div>

          <button 
            type="button" 
            style={{ width: '100%', backgroundColor: '#0066ff', color: 'white', border: 'none', padding: '15px', fontSize: '1.1rem', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}

export default ContactUs;