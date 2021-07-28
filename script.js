const clocks = document.querySelectorAll('.clock')
const hrsClock = document.getElementById('hrs')
const minsClock = document.getElementById('mins')
const secClock = document.getElementById('sec')

updateTime();
generateTicks();
setInterval(updateTime, 1000);
// updateTime();

function generateTicks() {
    clocks.forEach(clock => {
        for (i = 0; i < 60; i++) {
            const tick = document.createElement('div')
            tick.classList.add('tick')
            tick.style.transform = `translate(-50%, 0%) rotate(${i * 6}deg)`;
            clock.appendChild(tick);
        }
    })
}

function updateTime() {
    const time = new Date()
    const timeH = time.getHours();
    const timeM = time.getMinutes();
    const timeS = time.getSeconds();
    console.log('timeH, timeM, timeS :>> ', timeH, timeM, timeS);

    hrsClock.querySelector('.numbers').innerHTML = String(timeH).padStart(2, '0');
    let ticks = hrsClock.querySelectorAll('.tick')
    ticks.forEach((tick, index) => {
        if (index <= timeH / 24 * 60) {
            tick.classList.add('active');
        } else {
            tick.classList.remove('active');
        }
    })

    minsClock.querySelector('.numbers').innerHTML = String(timeM).padStart(2, '0');
    ticks = minsClock.querySelectorAll('.tick')
    ticks.forEach((tick, index) => {
        if (index <= timeM) {
            tick.classList.add('active');
        } else {
            tick.classList.remove('active');
        }
    })

    secClock.querySelector('.numbers').innerHTML = String(timeS).padStart(2, '0');
    ticks = secClock.querySelectorAll('.tick')
    ticks.forEach((tick, index) => {
        if (index <= timeS) {
            tick.classList.add('active');
        } else {
            tick.classList.remove('active');
        }
    })
}

