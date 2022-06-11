import { useEffect, useMemo, useState } from "react";

export function Component ({
  propCount,
  element
}) {
  const [ count, setCount ] = useState(0);
  const countDoubled = useMemo(() => {
    return propCount * 2;
  }, [propCount]);

  useEffect(() => {
    const handler = () => setCount(prevCount => prevCount + 1);
    element.addEventListener('click', handler);

    return () => element.removeEventListener('click', handler);
  }, [ element ]);



  return `
    Count: ${count}
    Prop Count: ${propCount}
    Prop Count Double: ${countDoubled}
  `;
}