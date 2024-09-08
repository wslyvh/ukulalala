"use client";

import { useState, useEffect, useRef } from "react";

export function Metronome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(80);
  const [volume, setVolume] = useState(0.5);
  const [time, setTime] = useState(0);
  const [timeSignature, setTimeSignature] = useState(4);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioContext = useRef<AudioContext | null>(null);
  const beatCountRef = useRef(1);

  useEffect(() => {
    audioContext.current = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    return () => {
      if (audioContext.current) {
        audioContext.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .join(":");
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const stopTimer = () => {
    beatCountRef.current = 1
    setIsPlaying(false);
    setTime(0);
  };

  const playClick = () => {
    if (!audioContext.current) return;
    const oscillator = audioContext.current.createOscillator();
    const gainNode = audioContext.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.current.destination);

    const frequency = beatCountRef.current === 1 ? 1000 : 800;
    oscillator.frequency.setValueAtTime(frequency, audioContext.current.currentTime);
    gainNode.gain.setValueAtTime(volume, audioContext.current.currentTime);

    oscillator.start();
    oscillator.stop(audioContext.current.currentTime + 0.1);

    beatCountRef.current = (beatCountRef.current % timeSignature) + 1;
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = (60 / bpm) * 1000;
      const timer = setInterval(playClick, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, bpm, volume, timeSignature]);

  return (
    <div className="bg-base-300 rounded-lg w-96 max-w-md mx-auto p-6">
      <h2 className="text-2xl text-center mb-2">Metronome</h2>
      <h3 className="text-center">Practice timer</h3>

      <div className="flex flex-col items-center justify-center my-8">
        <div className="text-8xl tabular-nums text-center font-mono">{bpm}</div>
        <div className="text-center -mt-2">BPM</div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="time-signature"
          className="block text-sm font-medium mb-2"
        >
          Time Signature
        </label>
        <select
          id="time-signature"
          value={timeSignature}
          onChange={(e) => setTimeSignature(Number(e.target.value))}
          className="select select-bordered select-xs w-full"
        >
          <option value={3}>3/4</option>
          <option value={4}>4/4</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="bpm-slider" className="block text-sm font-medium mb-2">
          Tempo (BPM)
        </label>
        <input
          id="bpm-slider"
          type="range"
          min={40}
          max={200}
          step={1}
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
          className="range range-xs"
        />
      </div>
      <div className="mb-8">
        <label
          htmlFor="volume-slider"
          className="block text-sm font-medium mb-2"
        >
          Volume
        </label>
        <div className="items-center">
          <input
            id="volume-slider"
            type="range"
            min={0}
            max={1}
            step={0.25}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="range range-xs"
          />
          <div className="flex w-full justify-between px-2 text-xs">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="flex items-center justify-center btn btn-accent size-32 text-2xl text-white rounded-full transition-all duration-300 transform hover:scale-105"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="my-8">
        <button className="btn btn-neutral btn-sm w-full" onClick={stopTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}
