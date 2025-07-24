import React from 'react';
import DiaryForm from './DiaryForm';
import DiaryList from './DiaryList';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles["diary-main"]}>
                <h2 className={styles.heart}>2023.02.27의 비밀일기</h2>
                <DiaryForm />
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul>
                    <DiaryList />
                </ul>
            </section>
        </div>
    )
}
