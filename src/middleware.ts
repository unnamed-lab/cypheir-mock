//  Without a defined matcher, this one line applies next0auth to the entire project
export { default } from "next-auth/middleware";

//  Applies next-auth only to mathing routes - can be regex
export const config = { matcher: ["/dashboard"] };
