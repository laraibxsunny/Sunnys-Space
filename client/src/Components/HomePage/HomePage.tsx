import React from "react";
import styles from "../../Styles/HomePage/HomePageStyles.module.css";
//import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "../../Styles/gruvbox-dark.css";
import githubIcon from "../../Assets/githubIcon.png";
import taskBarIcon from "../../Assets/taskBarIcon.png";
import blownupIcon from "../../Assets/blownupIcon.png";
import taskBarIcon2 from "../../Assets/taskBarIcon2.png";
import questsIcon from "../../Assets/questIcon.webp";
import calendarIcon from "../../Assets/calendarIcon.png";
import drumkitIcon from "../../Assets/drumkitIcon.png";

const HomePage: React.FC = () => {
  let [toggle, setToggle] = React.useState<number>(0);

  function toggleTaskBar() {
    setToggle(toggle + 1);
    if (toggle === 2) {
      setToggle(0);
    }
  }

  return (
    <section className={styles.wholePage}>
      <div className={styles.homePageTab}>
        <div className={styles.heading}>
          <div className={styles.title}>
            <span className={styles.letters}>S</span>
            <span className={styles.letters}>u</span>
            <span className={styles.letters}>n</span>
            <span className={styles.letters}>n</span>
            <span className={styles.letters}>y</span>
            <span className={styles.letters}>'</span>
            <span className={styles.letters}>s</span>
            <span className={styles.break}>||</span>
            <span className={styles.letters}>S</span>
            <span className={styles.letters}>p</span>
            <span className={styles.letters}>a</span>
            <span className={styles.letters}>c</span>
            <span className={styles.letters}>e</span>
          </div>
          <div className={styles.tabOptions}>
            <a href={"/selection"}>
              <button className={styles.TabButtons}>◫</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.taskBar}>
        <div className={styles.taskBarOptions}>
          <a className={styles.taskBarOption} onClick={toggleTaskBar}>
            <img
              id={toggle <= 1 ? styles.taskBarIMG : styles.taskBarIMGOpen}
              src={
                toggle <= 0
                  ? taskBarIcon
                  : toggle <= 1
                    ? taskBarIcon2
                    : blownupIcon
              }
              alt="TaskBar Icon"
            />
          </a>
          <span hidden={toggle <= 1}>
            <a className={styles.taskBarOption} href={"/sunnys-quests"}>
              <img
                className={styles.taskBarIMGs}
                src={questsIcon}
                alt="Quests Icon"
              />
              <span className={styles.taskOptionText}>QUESTS</span>
            </a>
            <a
              className={styles.taskBarOption}
              href={"https://github.com/laraibxsunny"}
              target="_blank"
            >
              <img
                className={styles.taskBarIMGs}
                src={githubIcon}
                alt="Github Icon"
              />
              <span className={styles.taskOptionText}>GITHUB</span>
            </a>
            <a className={styles.taskBarOption} href={"/calendar"}>
              <img
                className={styles.taskBarIMGs}
                src={calendarIcon}
                alt="Calendar Icon"
              />
              <span className={styles.taskOptionText}>CALENDAR</span>
            </a>
            <a className={styles.taskBarOption} href={"/drumkit"}>
              <img
                className={styles.taskBarIMGs}
                src={drumkitIcon}
                alt="DrumKitIcon"
              />
              <span className={styles.taskOptionText}>DRUMKIT</span>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
