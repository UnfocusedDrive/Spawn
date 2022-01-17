import Spawn from '../src/index';

const mountEl = document.body;
Spawn({
  parentEl: mountEl,
  children: [
    'Your Spawn is ready.'
  ]
});