
'use client';
import Button from '@/components/atoms/button/Button';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Dropdown from '@/components/atoms/dropdown/Dropdown';
import { useRef, useState } from 'react';
import useClickOutside from '@/hooks/useClickOutside';
import { DIRECTION } from '@/constants';

const Settings = () => {
    const [selectedSetting, setSelectedSetting] = useState('');
    const settingsRef = useRef<HTMLDivElement | null>(null);
    const [isSettingDropdownVisible, setSettingDropdownVisible] = useState(false);

    const handleClose = () => {
        setSettingDropdownVisible(false);
    };

    const handleSettingsChange = (setting: string) => {
        setSelectedSetting(setting);
        handleClose();
    };

    const handleSettingDropdownToggle = () => {
        setSettingDropdownVisible(!isSettingDropdownVisible);
    };

    useClickOutside(settingsRef, () => handleClose());


    return (
        <div className={styles.settings_cover} ref={settingsRef}>
            <Button
                w='45px'
                h='45px'
                onClick={handleSettingDropdownToggle}
                isOutline
            >
                <Image
                    src='/assets/settings.webp'
                    alt='settings'
                    width={22}
                    height={22}
                />
            </Button>
            <Dropdown
                isVisible={isSettingDropdownVisible}
                direction={DIRECTION.RIGHT}
            >
                <ul className={styles.settings_content}>
                    {['내 정보', '로그아웃'].map((setting) => (
                        <li
                            key={setting}
                            onClick={() => handleSettingsChange(setting)}
                        >
                            {setting}
                        </li>
                    ))}
                </ul>
            </Dropdown>
        </div>
    )
}

export default Settings