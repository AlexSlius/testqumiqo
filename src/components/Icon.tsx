export const IconSprite = ({
    id = "",
    classNames = null,
}: {
    id: string;
    classNames?: string[] | null;
}) => {
    return (
        <svg className={classNames ? classNames.join(" ") : ""}>
            <use xlinkHref={`/icons/sprite1.svg#${id}`}></use>
        </svg>
    );
};
