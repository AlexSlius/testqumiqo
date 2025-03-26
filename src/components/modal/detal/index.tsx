import { MouseEventHandler, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { ModalLayout } from "../layout";
import style from "../../../assets/styles/modules/modal/detal.module.scss";
import { IconSprite } from "@/components/Icon";
import { Pagin } from "@/components/pagin";

export const ModalDetal = ({
    showStatus = false,
    dataModal = null,
    hClose = () => { },
}: {
    showStatus?: boolean;
    dataModal?: any;
    hClose?: MouseEventHandler<HTMLDivElement>;
}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    useEffect(() => {
        if (!showStatus) {
            setThumbsSwiper(null);
        }
    }, [showStatus]);

    return (
        <ModalLayout show={showStatus} hClose={hClose}>
            <div className={style.detal}>
                <div className={style.detal_top}>
                    <div className={style.top_left}>
                        <div className={style.title}>
                            {dataModal?.title || "Urban Oasis: Modern Design Meets Green Rooftop"}
                        </div>
                        <div className={style.dop_info}>
                            <ul className={style.dop_items}>
                                <li>21 JAN</li>
                                <li>INDUSTRIAL</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.top_right}>
                        <a href="#" className={style.circle_icon}>
                            <IconSprite id="share" />
                        </a>
                        <div className={style.circle_icon}>
                            <IconSprite id="info" />
                        </div>
                    </div>
                </div>

                <div className={style.detal_main}>
                    <Swiper
                        spaceBetween={0}
                        pagination={false}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                    >
                        {[1, 2, 3, 4].map((num) => (
                            <SwiperSlide key={num} className={style.swiper_img_full}>
                                <div>
                                    <img src={`/images/image${num}.png`} alt={`Slide ${num}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className={style.detal_bot}>
                        <div className={style.bot_swiperr}>
                            <Swiper
                                onSwiper={(swiper) => {
                                    if (!swiper.destroyed) setThumbsSwiper(swiper);
                                }}
                                spaceBetween={0}
                                slidesPerView={'auto'}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                            >
                                {[1, 2, 3, 4].map((num) => (
                                    <SwiperSlide key={num} className={style.swip_min}>
                                        <div>
                                            <img src={`/images/image${num}.png`} alt={`Thumb ${num}`} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className={style.bot_pagin}>
                            <Pagin />
                        </div>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
};
