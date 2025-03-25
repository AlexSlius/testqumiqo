import React, { ReactNode } from "react";

import style from "../assets/styles/modules/layout/main-layout.module.scss";

interface InterfaceBasePro {
    children: ReactNode;
}
export const LayoutMain = ({
    children,
}: InterfaceBasePro) => {
    return (
        <div className={style.grid_layout}>
            <header className={style.header}>Header</header>
            <div className={style.wr}>
                <div className={style.left_contet}>
                    <main className={style.main}>{children}</main>
                    <footer className={style.footer}>Footer</footer>
                </div>
                <aside className={style.aside}>aside</aside>
            </div>
        </div>
    )
}