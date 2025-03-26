import style from "../assets/styles/modules/components/pagin.module.scss";

export const Pagin = () => {
    return (
        <div className={style.pagin}>
            <button>1</button>
            <button className={style.active}>2</button>
            <button>3</button>
            <button>4</button>
        </div>
    )
}