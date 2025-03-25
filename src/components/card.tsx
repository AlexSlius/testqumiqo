import Image from "next/image"
import style from "../assets/styles/modules/components/card.module.scss"
import { IconSprite } from "./Icon"

export const Card = ({
    dataCard,
    handleOpenDetal = () => { }
}: {
    dataCard: any;
    handleOpenDetal?: Function;
}) => {
    return (
        <div className={style.card}>
            <div className={style.card_top}>
                <div className={style.card_top_left}>
                    <div className={style.card_avatar} style={{ backgroundImage: "url(/images/selfie.png)" }}></div>
                    <div className={style.card_detal}>
                        <div className={style.card_detal_name}>{dataCard.author.name}</div>
                        <p className={style.card_detal_nick}>@{dataCard.author.email}</p>
                    </div>
                </div>
                <div className={style.card_top_right}>
                    <IconSprite id="icon-smile" />
                </div>
            </div>
            <div className={style.card_image} title={dataCard.title} onClick={() => handleOpenDetal(dataCard)}>
                <Image
                    src={`https://api.qumiqo.sontam.xyz/${dataCard.preview.thumbnail.filename}`}
                    width={323}
                    height={270}
                    alt=""
                />
            </div>
        </div>
    )
}