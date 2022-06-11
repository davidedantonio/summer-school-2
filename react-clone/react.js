let globalParent = null;
let globalId = 0;
const componentState = new Map();

function useState (initialState) {
  const id = globalId;
  const parent = globalParent;
  globalId++;

  return (() => {
    const { cache } = componentState.get(parent);
    if (!cache[id]) {
      cache[id] = {
        value: 
          typeof initialState === 'function' ? initialState() : initialState
      }
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
    
    return [ cache[id].value , setState ];
  })();
}

function useEffect (callback, dependencies) {
  const id = globalId;
  const parent = globalParent;
  globalId ++;

  (() => {
    const { cache } = componentState.get(parent);
    if (!cache[id]) {
      cache[id] = { dependencies: undefined }
    }

    const depChanged = dependencies.some((dependency, id) => {
      return (
        cache[id].dependencies === undefined ||
        cache[id].dependencies[i] !== dependency
      )
    })

    if (depChanged) {
      if (cache[id].cleanup)
        cache[id].cleanup();
      
      cache[id].cleanup = callback();
      cache[id].dependencies = dependencies;
    }
  })()
}

function useMemo (callback, dependencies) {
  const id = globalId;
  const parent = globalParent;
  globalId ++;

  return (() => {
    const { cache } = componentState.get(parent);
    if (!cache[id]) {
      cache[id] = { dependencies: undefined }
    }

    const depChanged = 
      !dependencies ||
      dependencies.some((dependency, id) => {
        return (
          cache[id].dependencies === undefined ||
          cache[id].dependencies[i] !== dependency
        )
      })

    if (depChanged) {
      cache[id].value = callback();
      cache[id].dependencies = dependencies;
    }
    
    return cache[id].value
  })()
}

function render (component, props, element) {
  const state = componentState.get(element) || { cache: [] }
  componentState.set(element, { ...state, component, props });
  globalParent = element;
  globalId = 0
  const result = component(props);
  element.textContent = result;
}

export {
  render,
  useState,
  useEffect,
  useMemo
}