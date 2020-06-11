import { Component } from '../Component';
import Logger from '../Logger';
import { Language } from '../Language';
import { UIButton } from '../ui/UIButton';
import Util from '../Util';

const { chrome } = window as any;

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

    constructor() {
        super();
    }

    /**
     * Start recording.
     *
     * @memberof Record
     */
    startRecording(): void {
        this.recording = true;
        // TODO
        Logger.info('start recording');
    }

    /**
     * Stop recording.
     * 
     * @memberof Record
     */
    stopRecording(download: boolean): void {
        this.recording = false;
        // TODO
        Logger.info('stop recording', download);
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
            Language.get('allow-windowed-mode.button-label.windowed'),
            this.id
        );
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
                Language.get('allow-windowed-mode.button-label.fullscreen')
            );
        } else {
            this.button.setIcon(icon);
            this.button.setTitle(
                Language.get('allow-windowed-mode.button-label.windowed')
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
                                self.startRecording();
                            } else {
                                self.stopRecording(true);
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
