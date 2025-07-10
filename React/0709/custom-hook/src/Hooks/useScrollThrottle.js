import { useEffect, useState } from "react";

export function useScrollThrottle() {

    const [isBottom, setIsBottom] = useState();

    useEffect(() => {

        function throttle(callback, delay) {
            let timer = null;

            return () => {
                if (timer === null) {
                    timer = setTimeout(() => {
                        callback();
                        timer = null;
                    }, delay);
                }
            }
        }

        const handleScroll = () => {
            setIsBottom(window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight);
        }

        const throttleHandeler = throttle(handleScroll, 100);

        window.addEventListener('scroll', throttleHandeler);

        // window.addEventListener('scroll', () => {

        //     setIsBottom(window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight);

        // });


        return () => {
            window.removeEventListener('scroll', throttleHandeler);
        }
    }, []);

    return isBottom;

}