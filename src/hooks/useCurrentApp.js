import { useState } from 'react';

const useCurrentApp = () => {
  const [currentApp, setCurrentApp] = useState('menu');

  return { currentApp, setCurrentApp };
};

export { useCurrentApp };