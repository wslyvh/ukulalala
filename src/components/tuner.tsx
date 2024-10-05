"use client";

import { useState, useEffect } from "react";
import * as Tone from "tone";

type TuningMethod = "gCEA" | "GCEA" | "DGBE";

const tuningNotes: Record<TuningMethod, string[]> = {
  gCEA: ["G4", "C4", "E4", "A4"],
  GCEA: ["G3", "C4", "E4", "A4"],
  DGBE: ["D3", "G3", "B3", "E4"],
};

export default function Tuner() {
  const [tuningMethod, setTuningMethod] = useState<TuningMethod>("gCEA");
  const [synth, setSynth] = useState<Tone.PluckSynth | null>(null);

  useEffect(() => {
    const pluckSynth = new Tone.PluckSynth({
      attackNoise: 4,
      dampening: 2000,
      resonance: 0.99,
    });

    const reverb = new Tone.Reverb({
      decay: 3,
      wet: 0.2,
    });

    const eq = new Tone.EQ3({
      low: 8,
      mid: 4,
      high: 0,
      lowFrequency: 100,
      highFrequency: 2000,
    });

    const delay = new Tone.FeedbackDelay({
      delayTime: "32n",
    });

    pluckSynth.chain(eq, reverb, Tone.Destination);
    setSynth(pluckSynth);

    return () => {
      pluckSynth.dispose();
      reverb.dispose();
      eq.dispose();
      delay.dispose();
    };
  }, []);

  const playNote = (note: string) => {
    if (synth) {
      Tone.start();
      synth.triggerAttackRelease(note, "2n", undefined, 0.1);
    }
  };

  return (
    <div className="bg-base-300 rounded-lg w-96 max-w-md mx-auto p-6">
      <h2 className="text-2xl text-center mb-2">Ukulele Tuner</h2>
      <h3 className="text-center">
        Click each note to tune the string to each tone.
      </h3>

      <div className="flex flex-col items-center justify-center my-8">
        <select
          value={tuningMethod}
          onChange={(e) => setTuningMethod(e.target.value as TuningMethod)}
          className="select select-bordered select-xs w-full"
        >
          <option value="gCEA">Standard Ukulele (gCEA)</option>
          <option value="GCEA">Low G (GCEA)</option>
          <option value="DGBE">Baritone (DGBE)</option>
        </select>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {tuningNotes[tuningMethod].map((note, index) => (
          <button
            key={index}
            onClick={() => playNote(note)}
            className="btn btn-accent"
          >
            {note}
          </button>
        ))}
      </div>

      <div className="text-center text-sm tabular-nums mt-8">
        Tune the strings from top to bottom.
      </div>
    </div>
  );
}
