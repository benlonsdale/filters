//Mocking back end data fetching
import { includes, intersection } from "lodash";

export const index = params => {
    return new Promise((resolve, reject) => {
        const results = data.filter(item => {
            let valid = true;
            Object.entries(params).forEach(([key, value]) => {
                switch (key) {
                    case "name": {
                        if (value.length > 0 && !includes(item[key], value)) {
                            valid = false;
                        }
                        break;
                    }
                    case "starRating":
                        if (value.length > 0 && !includes(value, item[key])) {
                            valid = false;
                        }
                        break;
                    case "facilities":
                        if (
                            intersection(item[key], value).length < value.length
                        ) {
                            valid = false;
                        }
                        break;
                    default:
                        break;
                }
            });
            return valid;
        });
        resolve(results);
    });
};

const data = [
    {
        id: 1,
        name: "hotelone",
        starRating: 5,
        facilities: ["car park", "pool"]
    },
    {
        id: 2,
        name: "hoteltwo",
        starRating: 3,
        facilities: ["car park", "gym"]
    },
    {
        id: 3,
        name: "hotelthree",
        starRating: 3,
        facilities: []
    }
];
