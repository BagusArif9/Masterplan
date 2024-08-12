import React from 'react';

const Maps: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/Done.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="3D View"
      />
    </div>
  );
};

export default Maps;
