"use client";

import React, { useState, useEffect, Fragment } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./card"

import style from "../assets/styles/modules/components/cards.module.scss"
import { ModalDetal } from "./modal/detal";

const fetchPosts = async (page: number) => {
    const res = await fetch(
        `https://api.qumiqo.sontam.xyz/api/posts?_limit=16&type=newest&page=${page}`, {
        headers: { "Content-Type": "application/json" },
    }
    );

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    return res.json();
};

export const Cards = ({
    dataPost = []
}: {
    dataPost: any // didn't waste time describing the type
}) => {
    const [page, setPage] = useState<number>(1);
    const [dataModal, setDataModal] = useState<{
        show: boolean;
        data: any;
    }>({
        show: false,
        data: null
    });

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["posts", 1],
        queryFn: () => fetchPosts(page),
        enabled: false,
        initialData: dataPost,
    });

    const hCloseModal = () => {
        setDataModal({
            show: false,
            data: null,
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            if ((scrollHeight - scrollTop - clientHeight < 20) && !isLoading) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (page > 1) {
            refetch()
        }
    }, [page]);

    return (
        <Fragment>
            <div className={style.cards}>
                {
                    data.map((item: any, index: number) => (
                        <Card
                            key={index}
                            dataCard={item}
                            handleOpenDetal={(data: any) => {
                                setDataModal({
                                    show: true,
                                    data,
                                })
                            }}
                        />
                    ))
                }
            </div>

            <ModalDetal
                showStatus={dataModal.show}
                dataModal={dataModal.data}
                hClose={hCloseModal}
            />
        </Fragment>
    )
}