import {EchoSoundCue} from "$lib/ts/models";

// @ts-ignore
export async function load({ params }) {
    return {
        soundCue: JSON.stringify(new EchoSoundCue({
            identifier: "hallo",
            file_name: "hallo.mp4",
            volume: 1,
            speed: 1,
        }))
    };
}