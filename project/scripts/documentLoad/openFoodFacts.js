function getTable(listName) {
    $.when(
        $.get("https://world.openfoodfacts.org/" + listName + ".json")
    ).then(
        function (data) {
            var mainDiv =$("#mainBox");
            var tableDiv = createTableFromJSONArrayAll(data.tags);
            tableDiv.find("table").addClass("w3-table-all");
            mainDiv.empty();
            mainDiv.append(tableDiv);
    });
}

$(function () {
    var select = $("select[name='list-name']");
    select.change(function () {getTable(select.val());});
    getTable(select.val());}
);