

const XLSX = require("xlsx");


function plugins(on, config) {

    on('task', {

        CsvToJson(data) {

            const lines = data.split("\n");
            const headers = lines[0].split(",");

            var result = [];
            for (var i = 1; i < lines.length; i++) {

                var row = {};
                var line = lines[i].split(",");

                for (var j = 0; j < headers.length; j++)
                    row[headers[j].trim()] = line[j].trim();

                result.push(row);
            }

            return result;
        },


        XLSX_readFile(file, opts) {
            return XLSX.readFile(file, opts);
        },
    });

    return config;
}

module.exports = { plugins };
