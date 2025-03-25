export const IconSprite = ({
    id = "",
    classNames = null,
}: {
    id: string;
    classNames?: string[] | null;
}) => {
    return (
        <svg className={classNames ? classNames.join(" ") : ""}>
            <use xlinkHref={`/icons/sprite.svg#${id}`}></use>
        </svg>
    );
};
