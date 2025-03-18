import React from 'react'
import styles from '../../Styles/CalendarPage/CalendarPageStyles.module.css'

function CalendarPage() {
    return (
        <div className={styles.calendarPageTab}>
            <div className={styles.heading}>
                <div className={styles.title}>
                    <span className={styles.letters}>C</span>
                    <span className={styles.letters}>a</span>
                    <span className={styles.letters}>l</span>
                    <span className={styles.letters}>e</span>
                    <span className={styles.letters}>n</span>
                    <span className={styles.letters}>d</span>
                    <span className={styles.letters}>a</span>
                    <span className={styles.letters}>r</span>
                </div>
          <div className={styles.tabOptions}>
            <a href={"/selection"}>
              <button className={styles.TabButtons}>◫</button>
            </a>
          </div>
        </div>
        </div>
    )
}

export default CalendarPage
