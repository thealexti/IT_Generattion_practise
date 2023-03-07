import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import s from './ProgressBar.module.scss';

const theme = {
    bgCustom: '#37806B',
};

const ScrollProgressBar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percent = position / maxScroll;
        setScrollPosition(percent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={s.bar}>
            <ProgressBar now={scrollPosition * 100}  className={s.bar__scroll_progress} />
        </div>
    );
};

export default ScrollProgressBar;