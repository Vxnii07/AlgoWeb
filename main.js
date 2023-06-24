const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    // { path: '#blob3' },
    // { path: '#blob4' },
    { repeat: 999, duration: 3000, yoyo: true }
  ).start();