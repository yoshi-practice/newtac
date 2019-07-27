(function() {
    'use strict';

    const iconUploadTrigger = document.getElementById('icon-upload_trigger');
    const iconUploadInput = document.getElementById('icon-upload_input');

    iconUploadTrigger.onclick = () => {
        iconUploadInput.click();
    }
})();