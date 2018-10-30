function createTableFromJSONArray(jsonArray, columns) {
    var table =$("<table></table>");
    jsonArray.map(function (jsonObject) {table.append(createRowFromJSON(jsonObject, columns));});
    return table;
}

function createRowFromJSON(jsonObject, columns) {
    var tr = $('<tr></tr>');
    columns.map(function (column) {tr.append(createCellFromJSON(jsonObject, column));});
    return tr;
}

function createCellFromJSON(jsonObject, column) {
    return $('<td></td>').text((column in jsonObject) ? jsonObject[column] : "");
}

