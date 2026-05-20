export async function initVanta(el) {
  const THREE = await import('three');
  const vantaEffect = window.VANTA.GLOBE({
    el,
    THREE,
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    color: 0xfde047,
    color2: 0xfacc15,
    backgroundColor: 0x030d22,
    size: 1.2,
    maxDistance: 1,
    points: 0,
  });
  if (vantaEffect?.camera) {
    vantaEffect.camera.position.set(0, 15, 170);
    const _onUpdate = vantaEffect.onUpdate.bind(vantaEffect);
    vantaEffect.onUpdate = function() {
      const r = _onUpdate.call(this);
      this.camera.lookAt(0, 15, 0);
      if (this.linesMesh2 && this.linesMesh3) {
        this.linesMesh2.rotation.copy(this.linesMesh3.rotation);
      }
      return r;
    };
  }
  if (vantaEffect?.cont2) {
    vantaEffect.cont2.rotation.x = -40 * (Math.PI / 180);
  }
  if (vantaEffect?.linesMesh2) {
    vantaEffect.linesMesh2.scale.setScalar(1.6);
  }
  if (vantaEffect?.linesMesh3) {
    vantaEffect.linesMesh3.scale.setScalar(1.6);
  }
  return vantaEffect;
}
