import Spawn, { Respawn } from '@unfocused/spawn';
import RespawnTest from './respawn';

const mountEl = document.body;
Spawn({
  parentEl: mountEl,
  children: [
    Spawn({
      children: 'Your Spawn is ready.',
      style: {
        padding: 20,
        background: 'rgba(255, 0, 0, .5)',
        backgroundImage: 'repeating-linear-gradient(45deg,violet,indigo,#00f,green,#ff0,orange,red,#d04343,#3d773d,#d0ae0b,#3961ab,#a22ea2)',
        fontWeight: 'bold',
        backgroundSize: '314% 314%',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        fontSize: '36px',
        zIndex: 1
      }
    }),
    // Testing....
    new RespawnTest().el
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