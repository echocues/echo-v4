export class EchoSoundCue {
    identifier: string;
    source: string;
    displayName: string;
    volume: number;
    speed: number;

    constructor(json: any) {
        // temporary to work with legacy api
        this.identifier = json.identifier;
        this.source = json.file_name;
        this.displayName = this.source;
        this.volume = json.volume;
        this.speed = json.speed;
    }
}

export class EchoProject {
    title: string;
    description: string;
    project_id: number;
    scenes: EchoScene[];
    sound_cues: EchoSoundCue[];

    public constructor(json: any) {
        this.title = json.title;
        this.description = json.description;
        this.project_id = json.id;
        this.scenes = [];
        this.sound_cues = [];
        // this.scenes = json.scenes.map(sceneJson => new EchoScene(sceneJson));
        // this.sound_cues = json.sound_cues.map(scJson => new EchoSoundCue(scJson));
    }
}

export class EchoEvent {
    cues: string[];
    notes: string[];
    time: EchoTime;

    constructor(json: any) {
        this.cues = json.cues;
        this.notes = json.notes;
        this.time = new EchoTime(json.time);
    }
}

export class EchoScene {
    name: string;
    events: EchoEvent[]

    constructor(json: any) {
        this.name = json.name;
        this.events = json.events.map((eventJson: any) => new EchoEvent(eventJson));
    }
}

export class EchoTime {
    hours: number;
    minutes: number;
    seconds: number

    constructor(json: any) {
        this.hours = json.hours;
        this.minutes = json.minutes;
        this.seconds = json.seconds;
    }
}