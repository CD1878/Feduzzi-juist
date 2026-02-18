import React, { useState } from 'react';
import { X } from 'lucide-react';

const AnnouncementBar: React.FC = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="bg-white text-center py-2 px-4 text-sm tracking-wide border-b border-gray-100 hidden md:block relative">
            <p>
                nieuwe vestiging <strong>Feduzzi Laren</strong> - nu open!
            </p>
            <button
                onClick={() => setVisible(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
            >
                <X size={14} />
            </button>
        </div>
    );
};

export default AnnouncementBar;
