export interface BlockProps {
    image: string;
    title: string;
    desc: string;
    message?: string;
    backLink?: boolean;
}

export type MetadataProps = {
    params: { id: string };
};

export type GlobalErrorProp = {
    error: Error & { digest?: string };
    reset: () => void;
};

export interface IconProps {
    width?: number;
    height?: number;
    className?: string;
    pathFill?: string;
}
