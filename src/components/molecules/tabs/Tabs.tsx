'use client'
import clx from 'classnames';
import { useEffect, useState } from 'react';
import styles from './Tabs.module.scss';

type TabProps = {
    options: { id: string; text: string; }[];
    defaultId: string;
    onSelectTabId: (tabId:string) => void;
};

const Tabs = (props: TabProps) => {
    const [selectedTabId, setSelectedTabId] = useState('');

    const handleTabClick = (tabId: string) => {
        setSelectedTabId(tabId);
        props.onSelectTabId(tabId);
    };

    useEffect(() => {
        setSelectedTabId(props.defaultId);
    },[])

    return (
        <div className={styles.container}>
            {props.options.map((option, i) => (
                <div
                    key={option.id}
                    className={clx(styles.tab, {
                        [styles.active]: selectedTabId === option.id,
                    })}
                    onClick={() => handleTabClick(option.id)}
                >
                    {option.text}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
