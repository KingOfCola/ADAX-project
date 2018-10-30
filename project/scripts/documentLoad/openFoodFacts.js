$.when(
    $.get("https://world.openfoodfacts.org/stores.json")
).then(
    function (data) {
        var mainDiv =$("#mainBox");
        var table = createTableFromJSONArray(data.tags, ["id", "products", "url", "name"]);
        table.addClass("w3-table-all");
        mainDiv.append(table);
});