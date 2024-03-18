import { useState, useEffect } from 'react';

const useLocoScroll = (): LocomotiveScroll | null => {
  const [locoScroll, setLocoScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    const initLocomotiveScroll = async(): Promise<void> => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll();
      setLocoScroll(scroll);
    };

    initLocomotiveScroll();

    return () => {
      locoScroll?.destroy();
    };
  }, []);

  return locoScroll;
};

export default useLocoScroll;
