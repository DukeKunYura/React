import shortid from "shortid";

const priceList = [{ "position": "Замена стекла", "price": 21000 },
{ "position": "Замена дисплея", "price": 25000 },
{ "position": "Замена аккумулятора", "price": 4000 },
{ "position": "Замена микрофона", "price": 2500 },
].map((item) => { item["id"] = shortid.generate(); return item })

export default priceList