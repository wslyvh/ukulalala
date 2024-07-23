"use client";

import { useState } from "react";
import { getColor, getChordName, getRomanNumeral } from "@/utils/music";
import { MajorScales } from "@/data/keys";
import progressions from "@/data/progressions.json";
import { useRouter } from "next/navigation";

interface Props {
  scale: any;
  progression: any;
  text?: string;
  className?: string;
}

export function Progression(props: Props) {
  const router = useRouter();
  const [scale, setScale] = useState(props.scale);
  const [progression, setProgression] = useState(props.progression);

  function selectScale(key?: string) {
    const scale =
      MajorScales.find((i: any) => i.key === key) ||
      MajorScales[Math.floor(Math.random() * MajorScales.length)];
    setScale(scale);
    router.push(
      `/progressions/${scale.key}/${progression.progression.join("-")}`
    );
  }

  function randomScale() {
    const scale = MajorScales[Math.floor(Math.random() * MajorScales.length)];
    setScale(scale);
    router.push(
      `/progressions/${scale.key}/${progression.progression.join("-")}`
    );
  }

  function randomProgression() {
    const progression =
      progressions[Math.floor(Math.random() * progressions.length)];
    setProgression(progression);
    router.push(
      `/progressions/${scale.key}/${progression.progression.join("-")}`
    );
  }

  return (
    <div>
      <h3 className="text-2xl text-center mb-2">{progression.name}</h3>
      <h4 className='text-center'>in {scale.key} {scale.suffix} scale</h4>
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {progression.progression.map((i: any, index: number) => {
          const chord = scale.scale[i - 1];
          return (
            <div key={index} className="text-center mt-8 ">
              <uke-chord
                key={index}
                frets={chord.positions[0].frets}
                fingers={chord.positions[0].fingers}
                length={5}
                size={1.5}
              />
              <div
                className={`flex flex-col gap-2 items-center text-sm border-t-4 ${getColor(
                  i
                )}`}
              >
                <div className="text-2xl">{getChordName(chord)}</div>
                <div className="badge">{getRomanNumeral(i)}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <h5 className="text-xl text-center">Progression</h5>
          <button className="btn btn-link" onClick={randomProgression}>
            random
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {progression.progression.map((i: any, index: number) => {
            return (
              <div key={`progression_${index}`} className="badge">
                {getRomanNumeral(i)}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <h5 className="text-xl text-center">Key</h5>
          <button className="btn btn-link" onClick={randomScale}>
            random
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {MajorScales.map((i: any) => {
            return (
              <button
                key={`key_${i.key}`}
                className={`btn btn-sm btn-circle ${
                  scale.key === i.key ? "btn-active" : ""
                }`}
                onClick={() => selectScale(i.key)}
              >
                {i.key}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
