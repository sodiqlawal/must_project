import React, { useCallback, useEffect } from 'react';

const useClickOutside = (ref: React.MutableRefObject<any>, onClose: () => void) => {
    const escapeListener = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        },
        [onClose],
    );

    const clickListener = useCallback(
        (e: MouseEvent) => {
            if (!ref.current) return;

            if (!(ref.current! as any).contains(e.target)) {
                onClose();
            }
        },
        [ref, onClose],
    );

    useEffect(() => {
        document.addEventListener('click', clickListener);
        document.addEventListener('keyup', escapeListener);

        return () => {
            document.removeEventListener('click', clickListener);
            document.removeEventListener('keyup', escapeListener);
        };
    }, [escapeListener, clickListener]);
};

export default useClickOutside;
