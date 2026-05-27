const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/search", async (req, res) => {
    const keyword = req.query.keyword;
    const response = await fetch(
        `https://search.roblox.com/catalog/json?Keyword=${encodeURIComponent(keyword)}&Category=Models&SortType=Relevance`
    );
    const data = await response.json();
    res.json(data);
});

app.listen(3000);
