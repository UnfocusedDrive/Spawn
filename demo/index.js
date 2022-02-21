import Spawn from '../src/index';

const mountEl = document.body;
Spawn({
  parentEl: mountEl,
  children: [
    Spawn({
      children: 'Your Spawn is ready.',
      style: {
        padding: 20,
        background: 'rgba(255, 0, 0, .5)',
      }
    })
  ],
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#222222',
    color: '#ffffff'
  }
});