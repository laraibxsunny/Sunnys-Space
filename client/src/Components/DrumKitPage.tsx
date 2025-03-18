import React from 'react'
import styles from "../Styles/DrumKitPage/DrumKitPageStyles.module.css"

function DrumKitPage() {
  return (
    <body>

 

  <div className={styles.keys}>

    <div data-key="65" className={styles.key}>

      <kbd>A</kbd>

      <span className="sound">clap</span>

    </div>

    <div data-key="83" className={styles.key}>

      <kbd>S</kbd>

      <span className="sound">hihat</span>

    </div>

    <div data-key="68" className={styles.key}>

      <kbd>D</kbd>

      <span className="sound">kick</span>

    </div>

    <div data-key="70" className={styles.key}>

      <kbd>F</kbd>

      <span className="sound">openhat</span>

    </div>

    <div data-key="71" className={styles.key}>

      <kbd>G</kbd>

      <span className="sound">boom</span>

    </div>

    <div data-key="72" className={styles.key}>

      <kbd>H</kbd>

      <span className="sound">ride</span>

    </div>

    <div data-key="74" className={styles.key}>

      <kbd>J</kbd>

      <span className="sound">snare</span>

    </div>

    <div data-key="75" className={styles.key}>

      <kbd>K</kbd>

      <span className="sound">tom</span>

    </div>

    <div data-key="76" className={styles.key}>

      <kbd>L</kbd>

      <span className="sound">tink</span>

    </div>

  </div>

 

  <audio data-key="65" src="../../Sounds/clap.wav"></audio>

  <audio data-key="83" src="../../Sounds/hihat.wav"></audio>

  <audio data-key="68" src="../../Sounds/kick.wav"></audio>

  <audio data-key="70" src="../../Sounds/openhat.wav"></audio>

  <audio data-key="71" src="../../Sounds/boom.wav"></audio>

  <audio data-key="72" src="../../Sounds/ride.wav"></audio>

  <audio data-key="74" src="../../Sounds/snare.wav"></audio>

  <audio data-key="75" src="../../Sounds/tom.wav"></audio>

  <audio data-key="76" src="../../Sounds/tink.wav"></audio>

 

<script>

 

</script>

 

</body>
  )
}

export default DrumKitPage