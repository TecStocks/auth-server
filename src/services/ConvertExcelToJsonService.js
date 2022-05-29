const xlsx = require('xlsx');
const fs = require('fs');

function generateJSONFromExcel(
    excelFilePath,
    sheetName,
    boolDataProps,
    jsonFilePath
)  {
    let newData = [];
    const wb = xlsx.readFile(excelFilePath, { dateNF: "dd/mm/yyyy" });
    const ws = wb.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(ws, { raw: false });
    newData = data.map((d) => {
        boolDataProps.forEach((val) => {
            if (d[val] === "TRUE") d[val] = true;
            if (d[val] === "FALSE") d[val] = false;
        });
            return d;
    });
fs.writeFileSync(jsonFilePath, JSON.stringify(newData, null, 2));
}

generateJSONFromExcel('./Exemplo_logins.xlsx', 'query', [], './loginsjson.json');
