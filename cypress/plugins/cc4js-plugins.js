

function plugins(on, config) {

    on('task', {

        csvToJson(data) {

            var lines = data.split("\n");
            var result = [];
            var headers = lines[0].split(",");
            for (var i = 1; i < lines.length; i++) {

                var obj = {};
                var line = lines[i].split(",");

                for (var j = 0; j < headers.length; j++)
                    obj[headers[j].trim()] = line[j].trim();

                result.push(obj);
            }

            return result;
        },
    });

    return config;
}

module.exports = { plugins };
