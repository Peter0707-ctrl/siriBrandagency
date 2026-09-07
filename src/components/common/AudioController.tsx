import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioController: React.FC = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize Web Audio synthesizer on user click
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
  };

  const playClickSound = (freq = 600, duration = 0.04) => {
    if (!isSoundOn || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Ignore audio context errors
    }
  };

  const toggleSound = () => {
    initAudio();
    setIsSoundOn((prev) => {
      const nextState = !prev;
      if (nextState) {
        setTimeout(() => playClickSound(880, 0.08), 50);
      }
      return nextState;
    });
  };

  useEffect(() => {
    if (!isSoundOn) return;

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.closest('button') || target.closest('a') || target.closest('.clickable'))) {
        playClickSound(750, 0.05);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [isSoundOn]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleSound}
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 text-xs font-mono uppercase tracking-wider backdrop-blur-md shadow-lg ${
          isSoundOn
            ? 'bg-blue-600/30 border-blue-400 text-blue-300 shadow-blue-500/20'
            : 'bg-slate-900/80 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-500'
        }`}
        title={isSoundOn ? 'Mute sound effects' : 'Enable cinematic sound effects'}
      >
        {isSoundOn ? (
          <>
            <Volume2 className="w-3.5 h-3.5 animate-pulse text-blue-400" />
            <span className="hidden sm:inline">Audio ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Sound</span>
          </>
        )}
      </button>
    </div>
  );
};
