import React from 'react';

import Icon from '../../../public/asset/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <button
    type="button"
    className={`flex items-center justify-center ${bodyPart === item ? 'border-t-4 border-red-600' : ''} bg-white rounded-bl-lg w-72 h-72 cursor-pointer`}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" className="w-10 h-10" />
    <p className="text-lg font-bold text-black capitalize">{item}</p>
  </button>
);

export default BodyPart;
