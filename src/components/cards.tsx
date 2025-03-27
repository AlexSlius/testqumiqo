"use client";

import React, { useState, useEffect, Fragment, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./card";
import style from "../assets/styles/modules/components/cards.module.scss";
import { ModalDetal } from "./modal/detal";

const fetchPosts = async (page: number) => {
    try {
        const res = await fetch(`https://api.qumiqo.sontam.xyz/api/posts?_limit=16&type=newest&page=${page}`);

        if (!res.ok) {
            throw new Error("Network response was not ok");
        }

        return res.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return { data: [], meta: { page: 1, totalPages: 1 } };
    }
};

export const Cards = ({ dataPost }: { dataPost: any }) => {
    const [posts, setPosts] = useState<{ data: any[]; meta: { page: number; totalPages: number } }>({
        data: [],
        meta: { page: 1, totalPages: 1 },
    });
    const [page, setPage] = useState<number>(1);
    const [dataModal, setDataModal] = useState<{ show: boolean; data: any }>({
        show: false,
        data: null,
    });
    const isFetching = useRef<boolean>(false);

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["posts", page],
        queryFn: () => fetchPosts(page),
        enabled: false,
        initialData: dataPost,
    });

    const hCloseModal = () => {
        setDataModal({ show: false, data: null });
    };

    useEffect(() => {
        const handleScroll = () => {
            const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
            if (scrollHeight - scrollTop - clientHeight < 100 && !isFetching.current && page < posts.meta.totalPages) {
                isFetching.current = true;
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFetching, page, posts.meta.totalPages]);

    useEffect(() => {
        if (page > 1) {
            refetch().then(() => isFetching.current = false);
        }
    }, [page]);

    useEffect(() => {
        if (data) {
            setPosts((prev) => ({
                data: [...prev.data, ...data.data],
                meta: data.meta,
            }));
        }
    }, [data]);

    return (
        <Fragment>
            <div className={style.cards}>
                {posts.data.map((item, index) => (
                    <Card
                        key={index}
                        dataCard={item}
                        handleOpenDetal={(data: any) => setDataModal({ show: true, data })}
                    />
                ))}
            </div>

            {isLoading && <p>Loading...</p>}

            <ModalDetal showStatus={dataModal.show} dataModal={dataModal.data} hClose={hCloseModal} />
        </Fragment>
    );
};
