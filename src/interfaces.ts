interface I_GeneralLink {
    name: string,
    link: string
}

type Currency = { code: "USD", symbol: "$" } | { code: "UAH", symbol: "₴" };

interface I_Price {
    currency: Currency;
    amount: number;
}

export {
    I_GeneralLink,
    I_Price
};