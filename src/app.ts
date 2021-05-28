require("dotenv").config();

import { writeDataToFile } from "./utils/writeDataToFile";
import { makeRequest } from "./utils/makeRequest";

const main = async () => {
    const data = await makeRequest(process.env.CHANNEL_ID);
    await writeDataToFile("data/subs.txt", `total subs: ${data.subscribers}`);
    await writeDataToFile("data/views.txt", `total views: ${data.views}`);
    await writeDataToFile("data/videos.txt", `total videos: ${data.videos}`);
    console.log("\n");
};

main();
setInterval(main, 60 * 1000);
