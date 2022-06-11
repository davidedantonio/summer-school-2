import { useMemo, useEffect, useState } from "react";

export default function Component ({
  propCount,
  element
}) {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    const handler = () => setCount(currentCount => currentCount + 1);
    element.addEventListener('click', handler);

    return () => element.removeEventListener('click', handler);
  }, [ element ]);

  const propCountDouble = useMemo(() => {
    return propCount * 2
  }, [ propCount ]);

  return `
    Count: ${count}
    Prop Count: ${propCount}
    Prop Count Double: ${propCountDouble}
  `;
}