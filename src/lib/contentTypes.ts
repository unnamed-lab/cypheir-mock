/*
1. Application Types:
    - application/java-archive: Used for Java archives.
    - application/EDI-X12: For EDI data interchange.
    - application/javascript (obsolete): Used for JavaScript files.
    - application/octet-stream: Generic binary data.
    - application/xml: For XML data.

2. Text Types:
    - text/css: For CSS stylesheets.
    - text/csv: Used for comma-separated values.
    - text/html: Indicates an HTML document.
    - text/javascript: Used for JavaScript code.
    - text/plain: Represents plain text.
    - text/xml: For XML data.
    - application/json: Used for JSON data.
    - application/pdf: Represents PDF documents.
    - application/x-www-form-urlencoded: Commonly used for form submissions.
    - application/zip: For ZIP archives.
    - application/vnd.ms-excel: Indicates Microsoft Excel files.
    - application/vnd.openxmlformats-officedocument.wordprocessingml.

*/

import { IComboArray } from "@/interface/utils";

const contentTypes: Array<IComboArray> = [
    { value: "application/json", label: "JSON" },
    { value: "application/pdf", label: "PDF" },
    { value: "application/xml", label: "XML" },
    { value: "application/x-www-form-urlencoded", label: "Form Data" },
    { value: "application/java-archive", label: "Java Archive" },
    { value: "text/css", label: "CSS Stylesheet" },
    { value: "text/csv", label: "Comma-Separated Values" },
    { value: "text/html", label: "HTML Document" },
    { value: "text/plain", label: "Plain Text" },
    { value: "text/xml", label: "XML" },
    // { value: "text/javascript", label: "JavaScript Code" },
    // { value: "application/vnd.ms-excel", label: "Microsoft Excel" },
    // { value: "application/EDI-X12", label: "EDI Data Interchange" },
    // { value: "application/javascript", label: "JavaScript" },
    // { value: "application/octet-stream", label: "Generic Binary Data" },
    // { value: "application/zip", label: "ZIP Archive" },
    // {
    //     value: "application/vnd.openxmlformats-officedo/cument.wordprocessingml.document",
    //     label: "Microsoft Word (Office Open XML)",
    // },
];

export default contentTypes;
