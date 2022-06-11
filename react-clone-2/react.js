let globalId = 0;
let globalParent = null;
const componentState = new Map();

function useState (initialValue) {
  const parent = globalParent;
  const id = globalId;
  globalId++;

  return (() => {
    const { cache } = componentState.get(parent);
    if (!cache[id]) {
      cache[id] = {
        value: typeof initialValue === 'function' ? initialValue() : initialValue
      };
    }
  
    const setState = state => {
      const { props, component } = componentState.get(parent);
      if (typeof state === 'function') {
        cache[id].value = state(cache[id].value);
      } else {
        cache[id].value = state;
      }
  
      render(component, props, parent);
    }

    return [ cache[id].value, setState ];
  })();
}

function useEffect (callback, dependencies) {
  const parent = globalParent;
  const id = globalId;
  globalId++;

  (() => {
    const { cache } = componentState.get(parent);
    if (!cache[id]) {
      cache[id] = {
        dependencies: undefined
      };
    }

    const someoneChanged = dependencies.some((dependency, i) => {
      return (
          cache[id].dependencies === undefined ||
          cache[id].dependencies[i] !== dependency
        );
    });

    if (someoneChanged) {
      if (cache[id].cleanup &&
          cache[id].cleanup === 'function') {
        cache[id].cleanup()
      }

      cache[id].cleanup = callback();
      cache[id].dependencies = dependencies;
    }
  })();
}

function useMemo (callback, dependencies) {
  const parent = globalParent;
  const id = globalId;
  globalId++;

  return (() => {
    const { cache } = componentState.get(parent);
    if (!cache[id]) {
      cache[id] = {
        dependencies: undefined
      };
    }

    const someoneChanged = dependencies.some((dependency, i) => {
      return (
          cache[id].dependencies === undefined ||
          cache[id].dependencies[i] !== dependency
        );
    });

    if (someoneChanged) {
      cache[id].value = callback();
      cache[id].dependencies = dependencies;
    }

    return cache[id].value
  })();
}

function render (component, props, element) {
  const state = componentState.get(element) || { cache: [] }
  componentState.set(element, { ...state, component, props });
  globalParent = element;
  globalId = 0;
  const res = component(props);
  element.textContent = res;
}

export {
  render,
  useState,
  useEffect,
  useMemo
}