import fs from "fs";

export const writeDataToFile = async (file: any, string: string) => {
    return new Promise(function (resolve, reject) {
        fs.writeFile(file, string, "utf8", function (err) {
            if (err) reject(err);
            else resolve(string);
            console.log(`Updated ${file} with "${string}"`);
        });
    });
};
