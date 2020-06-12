import { Component } from '../Component';
import Logger from '../Logger';
import { Language } from '../Language';
import { UIButton } from '../ui/UIButton';
import Util from '../Util';

const { chrome } = window as any;

let recordBlobs: Blob[];

/**
 * A button allowing the user to record the session locally.
 *
 * @export the Record type.
 * @class Record
 * @extends {Component}
 */
export class Record extends Component {
    /**
     * The component tag, used in language files.
     */
    tag: string = 'record';

    /**
     * The [[UIButton]] used to toggle windowed mode.
     */
    button: UIButton;

    /**
     * Whether recording mode is on or not.
     */
    recording: boolean = false;
    mediaRecorder: MediaRecorder;
    mediaRecorderOptions: MediaRecorderOptions;

    constructor() {
        super();
    }

    /**
     * Start recording.
     *
     * @memberof Record
     */
    startRecording(): void {
        const videoElements = document.getElementsByTagName('video');
        if (videoElements.length == 0) {
            return
        }
        const videoElement: any = videoElements[0];
        Logger.info(this.mediaRecorderOptions.mimeType);
        try {
            this.mediaRecorder = new MediaRecorder(videoElement.captureStream(), this.mediaRecorderOptions);
        } catch (e) {
            Logger.error('record: ', e);
            return;
        }
        this.mediaRecorder.ondataavailable = this.onMediaRecorderDataAvailable;
        this.mediaRecorder.start();
        this.recording = true;
    }

    onMediaRecorderDataAvailable(event: BlobEvent) {
        if (recordBlobs == null) {
            recordBlobs = [];
        }

        if (event.data && event.data.size > 0) {
            recordBlobs.push(event.data);
        }
    }

    /**
     * Stop recording.
     * 
     * @memberof Record
     */
    stopRecording(download: boolean): void {
        if (this.mediaRecorder.state == 'inactive') {
            this.mediaRecorder = null;
            recordBlobs = [];
            this.recording = false;
            return;
        }
        // 'stop' triggers 'ondataavailable'.
        this.mediaRecorder.stop();
        // required so 'ondataavailable' runs to completion as well as 'stop'.
        if (download) {
            setTimeout(() => {
                const blob = new Blob(recordBlobs, {type: 'video/webm'});
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'stadia.webm';
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                }, 100);
                this.mediaRecorder = null;
                recordBlobs = [];
                this.recording = false;
            }, 1000);
        } else {
            this.mediaRecorder = null;
            recordBlobs = [];
            this.recording = false;
        }
    }

    /**
     * Called on startup, initializes important variables.
     * 
     * @memberof Record
     */
    onStart(): void {
        Logger.component(
            Language.get('component.enabled', { name: this.name })
        );
        this.active = true;

        // TODO Change icons
        const icon = chrome.runtime.getURL('images/icons/windowed.svg');
        // TODO Setup label translations
        this.button = new UIButton(
            icon,
            Language.get('record.button-label.record'),
            this.id
        );

        this.mediaRecorderOptions = {mimeType: 'video/webm;codecs=vp9,opus'};
        if (!MediaRecorder.isTypeSupported(this.mediaRecorderOptions.mimeType)) {
            this.mediaRecorderOptions.mimeType = 'video/webm';
            if (!MediaRecorder.isTypeSupported(this.mediaRecorderOptions.mimeType)) {
                this.mediaRecorderOptions.mimeType = '';
            }
        }
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     * 
     * @memberof Record
     */
    onStop(): void {
        this.stopRecording(false);
        this.active = false;
    }

    /**
     * Update button labels and icons to fit current mode.
     * 
     * @memberof Record
     */
    updateButton(): void {
        // TODO Change icons
        const icon = chrome.runtime.getURL('images/icons/windowed.svg');
        const icon_exit = chrome.runtime.getURL(
            'images/icons/windowed_exit.svg'
        );

        if (this.recording) {
            this.button.setIcon(icon_exit);
            this.button.setTitle(
                Language.get('record.button-label.stop-recording')
            );
        } else {
            this.button.setIcon(icon);
            this.button.setTitle(
                Language.get('record.button-label.record')
            );
        }
    }

    // Whether events have been added already or not.
    eventsAdded: boolean = false;

    /**
     * Called once every second, updates component elements and variables
     * F
     * @memberof Record
     */
    onUpdate(): void {
        // If menu is open and a game is playing.
        if (Util.isMenuOpen() && Util.isInGame()) {

            // If the button doesn't already exist in the current renderer
            if (!this.exists()) {
                // Check for new renderers
                this.updateRenderer();

                const self = this;
                // Create the button instance
                this.button.create(() => {
                    // If events are already added, don't add them again
                    if (!this.eventsAdded) {
                        self.button.onPressed(() => {
                            if (self.recording) {
                                self.stopRecording(true);
                            } else {
                                self.startRecording();
                            }
                            self.updateButton();
                        });
                        this.eventsAdded = true;
                    }
                });
            }

            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
        else if(this.exists()) {
            this.button.destroy();
        }
    }
}
