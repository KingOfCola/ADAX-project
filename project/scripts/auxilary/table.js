function createTableFromJSONArrayAll(jsonArray, options={nRows: 100}) {
    if (jsonArray.length === 0) {return $("<table></table>");}
    var columns = getKeys(jsonArray[0]);
    return createTableFromJSONArray(jsonArray, columns, options);
}

function createTableFromJSONArray(jsonArray, columns, options = {nRows: 100}) {
    var table =$("<table></table>");
    if (!("header" in options) || options.header) {table.append(createHeaderRowFromArray(columns));}
    var nRows = (options.nRows) ? Math.min(options.nRows, jsonArray.length) : jsonArray.length;
    var div = $("<div></div>").append($("<div></div>").text(nRows + " out of " + jsonArray.length + " collected."));
    jsonArray.map(function (jsonObject, i) {
        if (i < nRows) {
            table.append(createRowFromJSON(jsonObject, columns));
        }
    });
    div.append(table);
    return div;
}

function createHeaderRowFromArray(columns) {
    var tr = $('<tr></tr>');
    columns.map(function (column) {tr.append($("<th></th>").text(column));});
    return tr;
}

function createRowFromJSON(jsonObject, columns) {
    var tr = $('<tr></tr>');
    columns.map(function (column) {tr.append(createCellFromJSON(jsonObject, column));});
    return tr;
}

function createCellFromJSON(jsonObject, column) {
    return $('<td></td>').text((column in jsonObject) ? jsonObject[column] : "");
}

function getKeys(obj){
   var keys = [];
   for(var key in obj){
      keys.push(key);
   }
   return keys.sort();
}
