/// <reference types="logic-pro-types" />

// i think sendAfterBeats needs this
var NeedsTimingInfo = true;

var PluginParameters: PluginParameters = [
  {
    name: "Chance",
    type: "lin",
    minValue: 1,
    maxValue: 100,
    numberOfSteps: 100,
    defaultValue: 33,
  },

  {
    name: "Beat",
    type: "lin",
    minValue: 0,
    maxValue: 1,
    numberOfSteps: 8,
    defaultValue: 0.5,
  },
];

function HandleMIDI(e) {
  e.send();
  if (e instanceof NoteOn) {
    if (Math.random() * 100 > GetParameter("Chance")) {
      return;
    }
    e.sendAfterBeats(GetParameter("Beat"));
  }
}
