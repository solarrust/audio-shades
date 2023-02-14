export function spCode() {
  return `
    let audio = input();
    let pointerDown = input();
    
    let size = input(12, 10, 50.0);
    setMaxIterations(5);
    let s = getSpace();
    let r = getRayDirection();
    
    let n1 = noise(r * 4 +vec3(0, audio, vec3(0, audio, audio))*.2 );
    let n = noise(s + vec3(0, 0, audio+time*.5) + n1);
    
    color(normal * .1 + vec3(1, 0, 0));
    displace(mouse.x * 2, mouse.y * 2, 0);
    boxFrame(vec3(2), abs(n) * .1 + .04 );
    mixGeo(pointerDown);
    sphere(n * .5 + .8);  
  `;
}
