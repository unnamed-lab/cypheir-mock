interface IBreadcrumb {
    title: string;
    url: string;
}

type TBreadcrumb = Array<IBreadcrumb>;

export const breadcrumbSplit = (url: string) => {
    const division = url.split("/");
    const breadcrumb = division.map((_, i, arr) =>
        !i ? "/" : arr.slice(0, i + 1).join("/")
    );
    return { list: division, breadcrumb };
};

export const breadcrumbTitle = (title: string) => {
    switch (title) {
        case "":
            return "dashboard";
        case "design":
            return "create mock";
        case "manage":
            return "manage mock";
        default:
            return "";
    }
};

export const breadcrumbProp = (url: string): TBreadcrumb => {
    const split = breadcrumbSplit(url);
    const output: TBreadcrumb = split.list.map((el, i) => {
        return { title: breadcrumbTitle(el), url: split.breadcrumb[i] };
    });
    return output;
};
