import {
  useEffect,
  useMemo,
  useState
} from './react.js';

function Component ({
  countProp,
  btn
}) {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    const handler = () => {
      setCount(current => current + 1);
    };
  
    btn.addEventListener('click', handler);
    return () => btn.removeEventListener('click', handler);
  }, [ btn ]);

  const doubled = useMemo(() => {
    return countProp * 2
  }, [ countProp ])

  return `
    Count: ${count}
    Count Prop: ${countProp}
    Count Prop double: ${doubled}
  `
}

export default Component;