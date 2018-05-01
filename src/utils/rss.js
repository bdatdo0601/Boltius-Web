import Parser from "rss-parser";

const parser = new Parser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const getFeed = async () => {
    const feed = await parser.parseURL(`${CORS_PROXY}https://wit.edu/news/rss.xml`);
    return feed;
};

export default {
    getFeed,
};
