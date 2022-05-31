import { useEffect, useRef } from "react";

const UseRefSample: React.FC = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current === null) return;
    const size = ref.current.getBoundingClientRect();
    console.log(size);
  });

  return (
    <div>
      <div ref={ref} style={{ width: 100, height: 100 }}>aa</div>
    </div>
  );
};

export default UseRefSample;
