const x = c.getContext('2d'), s = 20, N = 15;
let k = [{ x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }], f = { x: 5, y: 5 }, d = { x: 1, y: 0 }, g = 0, z = 0;
const pF = () => { f = { x: Math.floor(Math.random() * (N - 2)) + 1, y: Math.floor(Math.random() * (N - 2)) + 1 }; };
pF();
document.onkeydown = e => {
    if (e.key == 'ArrowUp' && d.y == 0) d = { x: 0, y: -1 };
    if (e.key == 'ArrowDown' && d.y == 0) d = { x: 0, y: 1 };
    if (e.key == 'ArrowLeft' && d.x == 0) d = { x: -1, y: 0 };
    if (e.key == 'ArrowRight' && d.x == 0) d = { x: 1, y: 0 };
};
setInterval(() => {
    if (!z) return;
    let h = { x: k[0].x + d.x, y: k[0].y + d.y };
    if (h.x < 0 || h.x >= N || h.y < 0 || h.y >= N || k.some(p => p.x == h.x && p.y == h.y)) {
        k = [{ x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }]; d = { x: 1, y: 0 }; g = 0; z = 0; b.style.display = 'block'; pF(); return;
    }
    k.unshift(h);
    if (h.x == f.x && h.y == f.y) { g++; pF(); }
    else k.pop();
    x.clearRect(0, 0, 300, 300);
    x.fillStyle = 'red'; x.fillRect(f.x * s, f.y * s, s - 2, s - 2);
    x.fillStyle = 'lime'; k.forEach(p => x.fillRect(p.x * s, p.y * s, s - 2, s - 2));
    x.fillStyle = '#fff'; x.fillText(g, 10, 20);
}, 100);