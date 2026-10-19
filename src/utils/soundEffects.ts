/**
 * Synthétiseur audio Web Audio API autonome (sans fichiers externes requis)
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;

  constructor() {
    // AudioContext will be initialized on first user interaction
  }

  public toggleSound(enabled?: boolean): boolean {
    if (typeof enabled === 'boolean') {
      this.soundEnabled = enabled;
    } else {
      this.soundEnabled = !this.soundEnabled;
    }
    return this.soundEnabled;
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public playClick() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Ignore audio errors silently
    }
  }

  public playStepTransition() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(540, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch {
      // Ignore audio errors
    }
  }

  public playEnding(type: 'light' | 'fragile' | 'dark') {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      if (type === 'light') {
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, t + i * 0.12);
          gain.gain.setValueAtTime(0.05, t + i * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.12 + 0.4);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t + i * 0.12);
          osc.stop(t + i * 0.12 + 0.4);
        });
      } else if (type === 'dark') {
        [220, 207, 196, 174.6].forEach((freq, i) => {
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, t + i * 0.18);
          gain.gain.setValueAtTime(0.03, t + i * 0.18);
          gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.18 + 0.5);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t + i * 0.18);
          osc.stop(t + i * 0.18 + 0.5);
        });
      }
    } catch {
      // Ignore audio errors
    }
  }
}

export const sound = new SoundManager();
