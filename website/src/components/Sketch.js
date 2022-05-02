import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Sketch = ({ sketch }) => {
  const ref = useRef();

  useEffect(() => {
    const s = new p5(sketch, ref.current);
    return () => s.remove();
  }, [sketch]);

  return <div ref={ref} />;
};

export default P5Sketch;
