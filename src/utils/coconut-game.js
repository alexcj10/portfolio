/**
 * Coconut Shuffle Guessing Game
 * Mechanics: Show prize -> Cover -> Shuffle -> Guess -> Reveal
 */

export function initCoconutGame() {
  const container = document.getElementById('coconut-game');
  const playBtn = document.getElementById('play-coconut');
  const slots = document.querySelectorAll('.coconut-slot');
  const shells = document.querySelectorAll('.coconut-shell');
  if (!container || !playBtn) return;

  let isPlaying = false;
  let prizeIndex = 0;
  let currentPositions = [0, 1, 2];

  // Automated Intro: Show objects -> Dim -> Show Button
  const introTimeout = setTimeout(() => {
    const bridge = container.querySelector('.arcade-bridge-panel');
    if (bridge) bridge.classList.add('ready-stage');
  }, 1200);

  async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function shuffle() {
    isPlaying = true;
    playBtn.disabled = true;

    // 1. Move stage to top so it's above the blur overlay
    const bridge = container.querySelector('.arcade-bridge-panel');
    bridge.classList.remove('ready-stage');
    bridge.classList.add('playing-stage');
    
    // 2. Cover slots
    shells.forEach(shell => shell.classList.add('covering'));
    await wait(700);

    // 2. Hide play button during shuffle
    playBtn.style.opacity = '0';
    playBtn.style.pointerEvents = 'none';

    // 3. Shuffle logic
    const shuffleSteps = 6;

    for (let i = 0; i < shuffleSteps; i++) {
      // Pick two random unique indices to swap
      let idx1 = Math.floor(Math.random() * 3);
      let idx2 = (idx1 + Math.floor(Math.random() * 2) + 1) % 3;

      // Visual Swap
      const slot1 = slots[currentPositions[idx1]];
      const slot2 = slots[currentPositions[idx2]];

      // Calculate positions relative to each other
      const rect1 = slot1.getBoundingClientRect();
      const rect2 = slot2.getBoundingClientRect();
      const deltaX = rect2.left - rect1.left;

      // Apply movement
      slot1.style.transform = `translateX(${deltaX}px)`;
      slot2.style.transform = `translateX(${-deltaX}px)`;

      await wait(600);

      // Finalize the swap in the DOM/State
      slot1.style.transition = 'none';
      slot2.style.transition = 'none';
      slot1.style.transform = '';
      slot2.style.transform = '';

      // Swap order in the currentPositions array
      const tempSlot = currentPositions[idx1];
      currentPositions[idx1] = currentPositions[idx2];
      currentPositions[idx2] = tempSlot;

      // Swap in DOM to keep logical order for guessing
      const parent = slot1.parentNode;
      const placeholder = document.createElement('div');
      parent.insertBefore(placeholder, slot1);
      parent.insertBefore(slot1, slot2);
      parent.insertBefore(slot2, placeholder);
      parent.removeChild(placeholder);

      await wait(50);
      slot1.style.transition = '';
      slot2.style.transition = '';
    }

    // Enable clicking on shells
    shells.forEach((shell, index) => {
      shell.onclick = () => handleGuess(index);
    });
  }

  function handleGuess(clickedIndex) {
    const clickedSlot = shells[clickedIndex].parentElement;
    const hasPrize = clickedSlot.querySelector('.game-object').classList.contains('prize');

    // Reveal all shells
    shells.forEach((shell, idx) => {
      shell.onclick = null; // Disable further clicks

      // The animation "opens" and "falls"
      shell.classList.add('open-fall');
    });

    if (hasPrize) {
      clickedSlot.classList.add('winner-glow');
    }

    // Reset game after delay
    setTimeout(() => {
      resetGame();
    }, 3000);
  }

  function resetGame() {
    shells.forEach(shell => {
      shell.classList.remove('covering', 'open-fall');
      shell.onclick = null;
    });
    slots.forEach(slot => slot.classList.remove('winner-glow'));
    const bridge = container.querySelector('.arcade-bridge-panel');
    bridge.classList.remove('playing-stage');
    
    // Restore Ready state (Dim + Button) after a moment of clarity
    setTimeout(() => {
      if (!isPlaying) bridge.classList.add('ready-stage');
    }, 1000);

    playBtn.disabled = false;
    playBtn.style.opacity = '1';
    playBtn.style.pointerEvents = 'auto';
    isPlaying = false;
  }

  playBtn.addEventListener('click', shuffle);

  // Return cleanup
  return () => {
    clearTimeout(introTimeout);
    playBtn.removeEventListener('click', shuffle);
  };
}
