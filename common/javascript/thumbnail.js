(function() {
    'use strict';
    const container = document.getElementById('container');
    const thumbnail = container.children;
    const thumbnailnum = thumbnail.length

    for(let i = 0; i < thumbnailnum; i++) {
        var div = document.createElement('div');
        div.className = 'thumbnail is-empty';
        container.appendChild(div);
        console.log('added');
    }
})();