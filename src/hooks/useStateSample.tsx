import { useCallback, useState } from "react";

const UseStateSample: React.FC = () => {
  const [count, setCount] = useState<number | null>(0);
  const handleClick = useCallback(() => {
    setCount((count ?? 0) + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default UseStateSample;
