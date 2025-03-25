import { MouseEventHandler } from "react";
import { ModalLayout } from "../layout"

import style from "../../../assets/styles/modules/modal/detal.module.scss";

export const ModalDetal = ({
    showStatus = false,
    dataModal = null,
    hClose = () => { },
}: {
    showStatus?: boolean;
    dataModal?: any;
    hClose?: MouseEventHandler<HTMLDivElement>;
}) => {
    return (
        <ModalLayout
            show={showStatus}
            hClose={hClose}
        >
            <div className={style.detal}>
                <div className={style.detal_top}></div>
                <div className={style.detal_main}></div>
                <div className={style.detal_bot}></div>
            </div>
        </ModalLayout>
    )
}