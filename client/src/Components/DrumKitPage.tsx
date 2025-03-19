import React, { useEffect } from 'react';
import styles from "../Styles/DrumKitPage/DrumKitPageStyles.module.css"; // ✅ Ensure this exists

function DrumKitPage() {
  useEffect(() => {
    function removeTransition(e: TransitionEvent) {
      if (e.propertyName !== "transform") return;
      (e.target as HTMLElement).classList.remove("playing");
    }

    function playSound(e: KeyboardEvent) {
      const audio = document.querySelector(
        `audio[data-key="${e.code}"]`
      ) as HTMLAudioElement | null;
      const key = document.querySelector(
        `div[data-key="${e.code}"]`
      ) as HTMLElement | null;
      if (!audio || !key) return;

      key.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
    }

    const keys = Array.from(document.querySelectorAll(".key")) as HTMLElement[];
    keys.forEach((key) =>
      key.addEventListener("transitionend", removeTransition as EventListener)
    );
    window.addEventListener("keydown", playSound);

    return () => {
      keys.forEach((key) =>
        key.removeEventListener("transitionend", removeTransition as EventListener)
      );
      window.removeEventListener("keydown", playSound);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Drum Kit</h1>
      
      <div className={styles.keys}>
        {[
          { key: "KeyA", label: "A", sound: "clap" },
          { key: "KeyS", label: "S", sound: "hihat" },
          { key: "KeyD", label: "D", sound: "kick" },
          { key: "KeyF", label: "F", sound: "openhat" },
          { key: "KeyG", label: "G", sound: "boom" },
          { key: "KeyH", label: "H", sound: "ride" },
          { key: "KeyJ", label: "J", sound: "snare" },
          { key: "KeyK", label: "K", sound: "tom" },
          { key: "KeyL", label: "L", sound: "tink" },
        ].map(({ key, label, sound }) => (
          <div key={key} data-key={key} className={styles.key}>
            <kbd>{label}</kbd>
            <span className={styles.sound}>{sound}</span>
          </div>
        ))}
      </div>

      {[
        { key: "KeyA", sound: "clap" },
        { key: "KeyS", sound: "hihat" },
        { key: "KeyD", sound: "kick" },
        { key: "KeyF", sound: "openhat" },
        { key: "KeyG", sound: "boom" },
        { key: "KeyH", sound: "ride" },
        { key: "KeyJ", sound: "snare" },
        { key: "KeyK", sound: "tom" },
        { key: "KeyL", sound: "tink" },
      ].map(({ key, sound }) => (
        <audio key={sound} data-key={key} src={`/sounds/${sound}.wav`}></audio>
      ))}
    </div>
  );
}

export default DrumKitPage;

