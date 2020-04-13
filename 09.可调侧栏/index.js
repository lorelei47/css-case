var startX, startWith;
startWith = localStorage.getItem('left_width') || getLeftDivWidth();
document.querySelector('.left').style.width = startWith + 'px';
document.querySelector('.separator').addEventListener('mousedown', (e) => {
    startX = e.clientX;
    startWith = getLeftDivWidth();
    document.documentElement.addEventListener('mousemove', onDrap);
    document.documentElement.addEventListener('mouseup', stopDrap);
})

function onDrap(e) {
    let newWidth = startWith + e.clientX - startX;
    document.querySelector('.left').style.width = newWidth + 'px';
}

function stopDrap(e) {
    localStorage.setItem('left_width', getLeftDivWidth());
    document.documentElement.removeEventListener('mousemove', onDrap);
    document.documentElement.removeEventListener('mouseup', stopDrap);
}

function getLeftDivWidth() {
    return parseInt(window.getComputedStyle(document.querySelector('.left')).width, 10);
}