import { Transition } from "react-transition-group";
import React, { useRef } from "react";

import { IconSprite } from "../Icon"
import { MouseEventHandler } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScrollWidth";

import style from "../../assets/styles/modules/modal/layout.module.scss";

const duration = 300;

const defaultStyle = {
    transition: `${duration}ms`,
    opacity: 0,
    transform: "scale(0.99)",
};

const transitionStyles = {
    entering: { opacity: 1, transform: "scale(1)" },
    entered: { opacity: 1, transform: "scale(1)" },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

interface InterfaceProps {
    children: React.ReactNode;
    hClose?: MouseEventHandler<HTMLDivElement>;
    show: boolean;
    className?: string;
    classLayoutWrap?: string;
    isCloseBtn?: boolean;
}

export const ModalLayout = ({
    children,
    hClose = () => { },
    show = false,
    className,
    classLayoutWrap = '',
    isCloseBtn = true,
}: InterfaceProps) => {
    const nodeRef = useRef(null);
    useLockBodyScroll({ isOpen: show });

    return (
        <Transition
            unmountOnExit
            nodeRef={nodeRef}
            in={!!show}
            timeout={duration}
        >
            {(state) => (
                <div
                    className={style.modal_l}
                    ref={nodeRef}
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[
                        state as
                        | "entering"
                        | "entered"
                        | "exiting"
                        | "exited"
                        ],
                    }}
                >
                    <div className={`${style.modal_wrap} ${classLayoutWrap}`}>
                        <div
                            className={style.modal_opas}
                            onClick={hClose}
                        ></div>
                        <div className={`${style.modal_window} ${className}`}>
                            {
                                !!isCloseBtn && (
                                    <div className={style.modal_close} onClick={hClose}>
                                        <IconSprite id="i_cloce_modal" />
                                    </div>
                                )
                            }
                            <div className={style.main}>{children}</div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
};
