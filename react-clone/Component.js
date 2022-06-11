import { useEffect, useMemo, useState } from "./react.js";

function Component ({
  propCount,
  element
}) {
  const [ count, setCount ] = useState(0);
  
  useEffect(() => {
    const handler = () => setCount(current => current + 1);
    element.addEventListener('click', handler);

    return () => element.removeEventListener('click', handler);
  }, [element]);

  const doubleProp = useMemo(() => {
    return propCount * 2
  }, [ propCount ]);

  return `
    Count: ${count}
    Prop Count: ${propCount}
    Prop Count Doble: ${doubleProp}
  `;
}

export default Component;