import { useEffect } from "react";

import { getScrollbarWidth } from "../helpers/scrollebarWidth";

export const useLockBodyScroll = ({
    isOpen = false,
}: {
    isOpen: boolean,
}) => {
    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = getScrollbarWidth();

            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }, [isOpen]);
}