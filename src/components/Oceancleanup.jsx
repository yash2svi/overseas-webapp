import React, { useState } from 'react';

const bg = 'https://sdgs.un.org/sites/default/files/webform/ocean_commitments/10937/220500_TheOceanCleanup_System002_Trip8_Deployed-7.jpg';

const OceanCleanupTracker = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [plasticType, setPlasticType] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log('Location:', location);
    console.log('Plastic Type:', plasticType);
    handleClose();
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <header style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}>
        <div style={{ padding: '1rem' }}>
          <h1 style={{ color: 'white' }}>Ocean Cleanup Tracker</h1>
        </div>
      </header>
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}>
        <div style={{
          maxWidth: '500px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '1rem',
        }}>
          <img
            src="https://github.com/MaksimEkin/umd_data_challange_2020/raw/master/stats/stat_1.png"
            alt="Ocean Cleanup"
            style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }}
          />
          <div>
            <h2 style={{ marginBottom: '0.5rem' }}>Help Clean the Oceans</h2>
            <p>Report plastic pollution in your area and contribute to ocean conservation efforts.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button style={{ marginRight: '0.5rem' }} onClick={handleOpen}>Report Plastic</button>
            </div>
          </div>
        </div>
      </main>
      {open && (
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
            <h2>Report Plastic Pollution</h2>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{ marginBottom: '0.5rem', width: '100%', padding: '0.5rem' }}
            />
            <input
              type="text"
              placeholder="Plastic Type"
              value={plasticType}
              onChange={(e) => setPlasticType(e.target.value)}
              style={{ marginBottom: '0.5rem', width: '100%', padding: '0.5rem' }}
            />
            <div style={{ textAlign: 'right' }}>
              <button style={{ marginRight: '0.5rem' }} onClick={handleClose}>Cancel</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OceanCleanupTracker;
