import React from 'react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-white text-center py-2 text-sm tracking-wide border-b border-gray-100 hidden md:block">
      <p>
        nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!
      </p>
    </div>
  );
};

export default AnnouncementBar;