import React from 'react';
import iconEdit from '../../img/icon-edit.svg';
import iconDelete from '../../img/icon-delete.svg';
import styles from './Home.module.css';
import { useFirestore } from '../../hooks/useFirestore';

export default function DiaryList({ diaries }) {
    //     createdTime
    // : 
    // _Timestamp {seconds: 1753410732, nanoseconds: 77000000}
    // text
    // : 
    // "나의 첫번째 일기입니다!!!"
    // title
    // : 
    // "나의 첫번째 일기"
    // uid
    // : 
    // "57lFi0ITXWgJoCiaN22Up7nLRBd2"



    function timeFormatting(seconds) {
        const currentDate = new Date(seconds * 1000);
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'][currentDate.getDay()];

        const fullDate = `${year}.${month}.${day}.${dayOfWeek}`;

        return fullDate;
    }

    const { deleteDocument } = useFirestore('diary');


    return (
        diaries.map((item) => {
            return < li key={item.createdTime.seconds}>
                <article className={styles["diary-article"]}>
                    <h3 className={styles["article-title"]}>{item.title}</h3>
                    <time className={styles["article-time"]} dateTime={timeFormatting(item.createdTime.seconds).replaceAll('.', '-').slice(0, -4)}> {timeFormatting(item.createdTime.seconds)}
                    </time>
                    <p className={styles["article-content"]}>{item.text}</p>
                    <div className={styles["button-group"]}>
                        <button type="button">
                            <img src={iconEdit} alt="수정" />
                        </button>
                        <span></span>
                        <button type="button" onClick={() => deleteDocument(item.id)}>
                            <img src={iconDelete} alt="삭제" />
                        </button>
                    </div>
                </article>
            </li >
        })


    )
}
