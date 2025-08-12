import { useEffect, useState } from "react";

export default function useScrollUp() {

    const [isUp, setIsUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setIsUp(false);

            } else {
                // scrolling up
                setIsUp(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);

    }, [lastScrollY]);


    return isUp;
}