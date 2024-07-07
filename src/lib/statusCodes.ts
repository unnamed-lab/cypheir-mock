/*
Informational responses (100 – 199):
100 Continue: Indicates that the client should continue the request or ignore the response if the request is already finished.
101 Switching Protocols: Sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.
102 Processing (WebDAV): Indicates that the server has received and is processing the request, but no response is available yet.
103 Early Hints: Primarily used with the Link header to allow preloading resources while the server prepares a response.


Successful responses (200 – 299):
200 OK: The request succeeded. The meaning of “success” depends on the HTTP method used (e.g., GET, HEAD, PUT, POST, TRACE).
201 Created: Indicates that a new resource was created as a result of the request (typically after POST requests).
202 Accepted: The request has been received but not yet acted upon. Intended for cases where another process or server handles the request.
203 Non-Authoritative Information: Metadata returned is not exactly the same as from the origin server (used for mirrors or backups).


Redirection messages (300 – 399):
Examples include 301 Moved Permanently, 302 Found, and 307 Temporary Redirect.


Client error responses (400 – 499):
Examples include 400 Bad Request, 401 Unauthorized, 403 Forbidden, and 404 Not Found.


Server error responses (500 – 599):
Examples include 500 Internal Server Error, 502 Bad Gateway, and 503 Service Unavailable.
*/

import { IComboArray } from "@/interface/utils";

const statusCodes: Array<IComboArray> = [
    { label: "Continue", value: "100" },
    { label: "Switching Protocols", value: "101" },
    { label: "OK", value: "200" },
    { label: "Created", value: "201" },
    { label: "Accepted", value: "202" },
    { label: "Non-Authoritative Information", value: "203" },
    { label: "No Content", value: "204" },
    { label: "Reset Content", value: "205" },
    { label: "Partial Content", value: "206" },
    { label: "Multi-Status (WebDAV)", value: "207" },
    { label: "Already Reported (WebDAV)", value: "208" },
    { label: "IM Used (HTTP Delta encoding)", value: "226" },
    { label: "Multiple Choices", value: "300" },
    { label: "Moved Permanently", value: "301" },
    { label: "Found (Moved Temporarily)", value: "302" },
    { label: "See Other", value: "303" },
    { label: "Not Modified", value: "304" },
    { label: "Use Proxy", value: "305" },
    { label: "Temporary Redirect", value: "307" },
    { label: "Permanent Redirect", value: "308" },
    { label: "Bad Request", value: "400" },
    { label: "Unauthorized", value: "401" },
    { label: "Payment Required", value: "402" },
    { label: "Forbidden", value: "403" },
    { label: "Not Found", value: "404" },
    { label: "Method Not Allowed", value: "405" },
    { label: "Not Acceptable", value: "406" },
    { label: "Proxy Authentication Required", value: "407" },
    { label: "Request Timeout", value: "408" },
    { label: "Conflict", value: "409" },
    { label: "Gone", value: "410" },
    { label: "Length Required", value: "411" },
    { label: "Precondition Failed", value: "412" },
    { label: "Payload Too Large", value: "413" },
    { label: "URI Too Long", value: "414" },
    { label: "Unsupported Media Type", value: "415" },
    { label: "Range Not Satisfiable", value: "416" },
    { label: "Expectation Failed", value: "417" },
    { label: "I'm a teapot", value: "418" },
    { label: "Misdirected Request", value: "421" },
    { label: "Unprocessable Entity (WebDAV)", value: "422" },
    { label: "Locked (WebDAV)", value: "423" },
    { label: "Failed Dependency (WebDAV)", value: "424" },
    { label: "Too Early", value: "425" },
    { label: "Upgrade Required", value: "426" },
    { label: "Precondition Required", value: "428" },
    { label: "Too Many Requests", value: "429" },
    { label: "Request Header Fields Too Large", value: "431" },
    { label: "Unavailable For Legal Reasons", value: "451" },
    { label: "Internal Server Error", value: "500" },
    { label: "Not Implemented", value: "501" },
    { label: "Bad Gateway", value: "502" },
    { label: "Service Unavailable", value: "503" },
    { label: "Gateway Timeout", value: "504" },
    { label: "HTTP Version Not Supported", value: "505" },
    { label: "Variant Also Negotiates", value: "506" },
    { label: "Insufficient Storage (WebDAV)", value: "507" },
    { label: "Loop Detected (WebDAV)", value: "508" },
    { label: "Not Extended", value: "510" },
    { label: "Network Authentication Required", value: "511" },
];

export default statusCodes;
