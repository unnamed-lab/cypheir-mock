import * as male from "./male.name.json";
import * as female from "./female.name.json";
import * as country from "./country.code.json";

const maleData = male.data,
    femaleData = female.data,
    countryCodes = country.data;

export { maleData as male };
export { femaleData as female };
export { countryCodes };
