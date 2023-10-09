import {EchoSoundCue} from "$lib/ts/models";

export async function load() {
    return {
        soundCues: JSON.stringify([
            new EchoSoundCue({
                identifier: "hallo",
                file_name: "hallo.mp4",
                volume: 1,
                speed: 1,
            }),
            new EchoSoundCue({
                identifier: "hallo2",
                file_name: "hallo2.mp4",
                volume: 1,
                speed: 1,
            }),
        ]),
    };
}