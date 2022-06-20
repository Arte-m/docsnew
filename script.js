const fun = document.querySelector('#fun');
let str = '';
const reference = 'hello';
document.addEventListener('keypress', (e) => {
    str += e.key
    console.log(str);
    if (reference.indexOf(str) !== 0) {
        str = "";
        return;
    }
    if (str === reference) {
        console.clear();
        fun.innerHTML += `<svg width="200" height="200" viewBox="-100 -100 200 200">      
        <g transform="translate(0 5)">
          <g>
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(72)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(-72)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(144)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(-144)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
        </g>
      </svg>`
    }
})