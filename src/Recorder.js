let blobs;

const Recorder = function () {
    this.mediaRecorder;
    this.blobs;
    this.recording = false;

    this.onMediaRecorderDataAvailable = function (event) {
        console.log('onMediaRecorderDataAvailable', event);
        if (event.data && event.data.size > 0) {
            console.log('push: ', blobs.length);
            blobs.push(event.data);
            console.log('blobs: ', blobs.length);
        } else {
            console.log('no push: ', event);
        }
    }

    this.onMediaRecorderStop = function (event) {
        console.log('onMediaRecorderStop', event);
    }

    this.start = function () {
        console.log('start');
        blobs = [];
        mediaRecorderOptions = {mimeType: 'video/webm;codecs=vp9,opus'};
        if (!MediaRecorder.isTypeSupported(mediaRecorderOptions.mimeType)) {
            mediaRecorderOptions.mimeType = 'video/webm';
            if (!MediaRecorder.isTypeSupported(mediaRecorderOptions.mimeType)) {
                mediaRecorderOptions.mimeType = '';
            }
        }

        const videoElements = document.getElementsByTagName('video');
        if (videoElements.length == 0) {
            console.log('no video elements');
            return
        }
        const videoElement = videoElements[0];
        try {
            this.mediaRecorder = new MediaRecorder(videoElement.captureStream(), mediaRecorderOptions);
        } catch (e) {
            console.log('record: ', e);
            return;
        }
        this.mediaRecorder.ondataavailable = this.onMediaRecorderDataAvailable;
        this.mediaRecorder.onstop = this.onMediaRecorderStop;
        this.mediaRecorder.start();
        this.recording = true;
        console.log('recording');
    };

    this.stop = function (download) {
        console.log('stop');
        if (this.mediaRecorder.state == 'inactive') {
            this.mediaRecorder = null;
            this.recording = false;
            console.log('invactive');
            return;
        }
        // 'stop' triggers 'ondataavailable'.
        this.mediaRecorder.stop();
        // required so 'ondataavailable' runs to completion as well as 'stop'.
        setTimeout(() => {
            console.log('download', blobs);
            const blob = new Blob(blobs, {type: 'video/webm'});
            const url = window.URL.createObjectURL(blob);

            console.log('url: ', url);

            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'test.webm';
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 100);

            this.mediaRecorder = null;
            this.recording = false;
            console.log('download end');
            if (!download) {
                this.mediaRecorder = null;
                this.recording = false;
            }
        }, 1000);
    };

};

StadiaPlusRecorder = new Recorder();
