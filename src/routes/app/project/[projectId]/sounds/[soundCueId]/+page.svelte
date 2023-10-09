<script lang="ts">
    import WaveSurfer from "wavesurfer.js";
    import EnvelopePlugin from "wavesurfer.js/dist/plugins/envelope";
    import {onMount} from "svelte";
    import sampleSound from "$lib/assets/sunflower-street-drumloop-85bpm-163900.mp3";

    onMount(() => {
        const wavesurfer = WaveSurfer.create({
            container: "#sound-waves",
            url: sampleSound,
        });

        const envelope = wavesurfer.registerPlugin(EnvelopePlugin.create({
            volume: 0.8,
        }));
    });
</script>

<div class="w-full h-full bg-surface-800">
    <div id="sound-waves" class="w-full"/>
</div>