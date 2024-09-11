"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function Metronome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(90);
  const [volume, setVolume] = useState(0.5);
  const [time, setTime] = useState(0);
  const [timeSignature, setTimeSignature] = useState(4);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioContext = useRef<AudioContext | null>(null);
  const beatCountRef = useRef(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioBuffers = useRef<{ [key: string]: AudioBuffer }>({});

  useEffect(() => {
    audioContext.current = new (window.AudioContext ||
      (window as any).webkitAudioContext)();

    // Load audio samples
    const sampleUrls = {
      hi: "/sounds/hi.wav",
      lo: "/sounds/lo.wav",
    };

    const loadSample = async (name: string, url: string) => {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.current!.decodeAudioData(
        arrayBuffer
      );
      audioBuffers.current[name] = audioBuffer;
    };

    Promise.all(
      Object.entries(sampleUrls).map(([name, url]) => loadSample(name, url))
    )
      .then(() => setIsLoaded(true))
      .catch((error) => console.error("Error loading audio samples:", error));

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

  const togglePlay = useCallback(() => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" && event.target === document.body) {
        event.preventDefault();
        togglePlay();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePlay]);

  const stopTimer = () => {
    beatCountRef.current = 1;
    setIsPlaying(false);
    setTime(0);
  };

  const playClick = () => {
    if (!audioContext.current || !isLoaded) return;

    const source = audioContext.current.createBufferSource();
    const gainNode = audioContext.current.createGain();

    source.buffer =
      audioBuffers.current[beatCountRef.current === 1 ? "hi" : "lo"];
    source.connect(gainNode);
    gainNode.connect(audioContext.current.destination);

    gainNode.gain.setValueAtTime(volume, audioContext.current.currentTime);

    source.start();
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
          <option value={2}>2/4</option>
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
            <>
              <div
                className="absolute animate-ping inline-flex size-24 rounded-full bg-accent opacity-80"
                style={{
                  animation: `ping ${Number(
                    (60 / bpm).toFixed(1)
                  )}s cubic-bezier(0, 0, 0.2, 1) infinite`,
                }}
              ></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12 z-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            </>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-12 z-10"
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

      <div className="text-center text-sm tabular-nums my-4">
        {formatTime(time)}
      </div>

      <div>
        <button className="btn btn-neutral btn-sm w-full" onClick={stopTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}
