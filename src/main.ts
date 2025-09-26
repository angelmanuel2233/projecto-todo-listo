export function increment(count: number): number {
  return count + 1;
}

export function decrement(count: number): number {
  return count - 1;
}

export function reset(count: number): number {
  return 0;
}

export function getCountFromStorage(): number {
  if (typeof localStorage !== 'undefined') {
    return parseInt(localStorage.getItem('count') || '0');
  }
  return 0;
}

export function saveCountToStorage(count: number): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('count', count.toString());
  }
}

if (typeof document !== 'undefined') {
  interface CounterState {
    count: number;
  }

  let state: CounterState = {
    count: getCountFromStorage()
  };

  const updateDisplay = () => {
    const countElement = document.getElementById('count');
    if (countElement) {
      countElement.textContent = state.count.toString();
    }
    saveCountToStorage(state.count);
  };

  document.getElementById('increment')?.addEventListener('click', () => {
    state.count = increment(state.count);
    updateDisplay();
  });

  document.getElementById('decrement')?.addEventListener('click', () => {
    state.count = decrement(state.count);
    updateDisplay();
  });

  document.getElementById('reset')?.addEventListener('click', () => {
    state.count = reset(state.count);
    updateDisplay();
  });

  updateDisplay();
}
