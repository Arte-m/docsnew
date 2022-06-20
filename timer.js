function setTimer(e) {
    e = e.replace(/ /g, ':').split(':');

    var l = {
            'января': 1,
            'февраля': 2,
            'марта': 3,
            'апреля': 4,
            'мая': 5,
            'июня': 6,
            'июля': 7,
            'августа': 8,
            'сентября': 9,
            'октября': 10,
            'ноября': 11,
            'декабря': 12
        },
        d = new Date(),
        z = d.getTimezoneOffset(),
        ts = d.getTime() + (z * 60000) + (180 * 60 * 1000),
        te = (new Date(d.getFullYear(), l[e[1]] - 1, e[0], e[2], e[3])).getTime();

    var t = te > ts ? parseInt((te - ts) / 1000) : 0,
        d = 0,
        h = 0,
        m = 0;

    if (!t) return false;

    if (t >= 86400) {
        d = parseInt(t / 86400);
        t = t - (d * 86400);
    }

    if (t >= 3600) {
        h = parseInt(t / 3600);
        t = t - (h * 3600);
    }

    if (t >= 60) {
        m = parseInt(t / 60);
        t = t - (m * 60);
    }

    // document.getElementById('timer-day').innerHTML = d;
    // document.getElementById('timer-hour').innerHTML = h;
    // document.getElementById('timer-minute').innerHTML = m;
    // document.getElementById('timer-second').innerHTML = t;
    document.getElementById('timer-all').innerHTML = `${d}:${h}:${m}:${t}`
}

// 6 мая 22:00
setInterval(setTimer, 1000, '16 июня 20:00');