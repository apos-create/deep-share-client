import { useEffect, useState } from "react";

export default function useScrollUp(delay = 150) {

    const [scrollUp, setScrollUp] = useState(true);
    let timeoutId;

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const onScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const currentScrollY = window.scrollY;
                setScrollUp(currentScrollY < lastScrollY);
                lastScrollY = currentScrollY;
            }, delay);
        };
 
        window.addEventListener("scroll", onScroll)
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("scroll", onscroll);
        }

    }, [delay])


    return scrollUp;
}