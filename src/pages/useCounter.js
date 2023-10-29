
import { useState } from "react";

export const useCounter = (initial = 0) => {

    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount((count) => count + 1);
    }

    const decrease = () => {
        setCount((count) => count - 1);
    }

    const restart = () => {
        setCount(0);
    }

    return { count, increase, decrease, restart };
}