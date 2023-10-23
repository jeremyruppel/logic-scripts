/// <reference types="logic-pro-types" />
const PluginParameters: PluginParameters = [
  {
    name: "# of claps",
    type: "lin",
    minValue: 1,
    maxValue: 7,
    numberOfSteps: 6,
    defaultValue: 3,
  },
  {
    name: "Min delay",
    type: "lin",
    minValue: 0,
    maxValue: 100,
    numberOfSteps: 100,
    defaultValue: 0,
  },

  {
    name: "Max delay",
    type: "lin",
    minValue: 0,
    maxValue: 500,
    numberOfSteps: 100,
    defaultValue: 100,
  },
];

/**
 * Sends a flurry of notes after a note at varying pitches and delays.
 * Useful for making claps sound realistic and random
 */
function HandleMIDI(e: NoteOn | NoteOff) {
  // send the original note
  e.send();

  // let's do some clapping
  if (e instanceof NoteOn) {
    for (let i = 1; i < GetParameter("# of claps"); i++) {
      const clap = new NoteOn();
      clap.pitch = e.pitch + i * 4; // scale claps 4 semitones apart
      clap.velocity = rand(70, 100);
      clap.sendAfterMilliseconds(50);
    }
  }
}

function delay() {
  return rand(GetParameter("Min delay"), GetParameter("Max delay"));
}

function rand(from: number, to: number) {
  if (from > to) {
    throw new Error("Invalid range");
  }
  return from + Math.floor(Math.random() * (to - from));
}
