const screen = document.getElementById('screen')
const toggleButton = document.getElementById('button')
const resetButton = document.getElementById('reset')
let timeInterval
let stopWatchOn = false
let seconds = 0

resetButton.addEventListener('click', () => {
    toggleButton.innerHTML = '▶'
    toggleButton.style.backgroundColor = 'steelblue'
    clearInterval(timeInterval)
    seconds = 0;
    screen.innerHTML = `00:00:00`
})

toggleButton.addEventListener('click', () => {
  stopWatchOn = !stopWatchOn
  toggleButton.innerHTML = stopWatchOn ? '=' : '▶'
  toggleButton.style.backgroundColor
    = stopWatchOn ? 'tomato' : 'steelblue'
  if (!stopWatchOn) {
    clearInterval(timeInterval)
    screen.innerHTML = `${mm}:${ss}:${cs}`
  } else {
    timeInterval = setInterval(() => {
      seconds++
      const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, '0')
      const ss = String(Math.floor(seconds / 100) % 60).padStart(2, '0')
      const cs = String(seconds % 100).padStart(2, '0')
      screen.innerHTML = `${mm}:${ss}:${cs}`
    }, 10);
  }
})