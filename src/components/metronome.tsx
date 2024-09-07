"use client";

import { useState, useEffect, useRef } from "react";

export function Metronome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(80);
  const [volume, setVolume] = useState(0.5);
  const [time, setTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioContext = useRef<AudioContext | null>(null);

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
    setIsPlaying(false);
    setTime(0);
  };

  const playClick = () => {
    if (!audioContext.current) return;
    const oscillator = audioContext.current.createOscillator();
    const gainNode = audioContext.current.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.current.destination);

    oscillator.frequency.setValueAtTime(880, audioContext.current.currentTime);
    gainNode.gain.setValueAtTime(volume, audioContext.current.currentTime);

    oscillator.start();
    oscillator.stop(audioContext.current.currentTime + 0.1);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = (60 / bpm) * 1000;
      const timer = setInterval(playClick, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, bpm, volume]);

  return (
    <div className="bg-base-300 rounded-lg w-80 max-w-md mx-auto p-6">
      <h2 className="text-2xl text-center mb-2">Metronome</h2>
      <h3 className="text-center">Practice timer</h3>

      <div className="flex flex-col items-center justify-center my-8">
        <div className="text-8xl tabular-nums text-center font-mono">{bpm}</div>
        <div className="text-center -mt-2">BPM</div>
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
          className="flex items-center justify-center btn btn-accent w-40 h-40 text-2xl text-white rounded-full transition-all duration-300 transform hover:scale-105"
          onClick={togglePlay}
        >
          {isPlaying ? <span>Pause</span> : <span>Start</span>}
        </button>
      </div>

      <div className="my-8">
        <button
          className="btn btn-neutral btn-sm w-full"
          onClick={stopTimer}
        >
          <span>Stop</span>
        </button>
      </div>
    </div>
  );
}
