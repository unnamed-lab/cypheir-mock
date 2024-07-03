/*
UTF-8: Widely used and recommended, UTF-8 covers almost all characters and symbols worldwide. To specify UTF-8 in an HTML page, include this meta 

ASCII: The original character encoding standard, defining 128 characters including English letters, numbers, and special characters.

ANSI (Windows-1252): The Windows character set, identical to ASCII for the first 127 characters and extending to special characters.

ISO-8859-1: Default for HTML 4, supporting 256 character codes. It's identical to ASCII for the first 127 characters and doesn't use characters from 128 to 159.
*/

import { IComboArray } from "@/interface/utils";

const charset: Array<IComboArray> = [
    { value: "UTF-8", label: "UTF-8" },
    { value: "ISO-8859-1", label: "ISO-8859-1" },
    // { value: "ASCII", label: "ASCII" },
    // { value: "ANSI (Windows-1252)", label: "Windows-1252" },
];

export default charset;
