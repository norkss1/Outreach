import { useState, useEffect } from 'react';

const useElapsedTime = (startTime: Date) => {
    const [elapsedTime, setElapsedTime] = useState('');

    useEffect(() => {
        const interval = setTimeout(() => {
            const currentTime = new Date();
            const diffTime = currentTime.valueOf() - startTime.valueOf();
            const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            setElapsedTime(`${days}d`);
        }, 100);

        return () => clearTimeout(interval);
    }, [startTime]);

    return elapsedTime;
};

export default useElapsedTime;
