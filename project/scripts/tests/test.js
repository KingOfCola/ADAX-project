/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var DataFrame = dfjs.DataFrame;
var Row = dfjs.Row;

function showCols(df, dfCols, name=null) {
    var div = $("#mainBox");
    if (name !== null) {div.append($("<div></div>").append($("<p></p>")).text(name));}
    var select = dropDown(df, dfCols);
    var container = $("<div></div>").addClass("w3-row");
    container.append($("<div></div>").append(select).addClass("w3-cell"));
    var displayDiv = $("<div></div>").text(select.val()).addClass("w3-cell");
    select.on({change: function (e) {
            displayDiv.text($(this).val());
    }});
    container.append(displayDiv);
    div.append(container);
}

function show(df, name=null) {
    var div = $("#mainBox");
    if (name !== null) {div.append($("<div></div>").append($("<p></p>")).text(name));}
    div.append($("<div></div>").append($("<p></p>")).html("Taille: <b>(" + df.dim() + ")</b>"));
    div.append($("<div></div>")
        .addClass("w3-table-all")
        .append(toTable(df, 4, 10)));
}

function toTable(df, nRows=null, nCols=null) {
    var table = $("<table></table>");
    var tr = $("<tr></tr>").addClass("w3-red");
    var columns = df.listColumns();
    nCols = (nCols === null) ? columns.length : Math.min(columns.length, nCols);
    for (var i = 0; i < nCols; i ++) {
        tr.append($("<th></th>").text(columns[i]));
    }
    table.append(tr);
    var dfArr = df.toArray();
    nRows = (nRows === null) ? dfArr.length : Math.min(nRows, dfArr.length);
    for (var i = 0; i < nRows; i ++) {
        table.append(rowToTableRow(dfArr, i, nCols));
    }
    return table;
}

function rowToTableRow(arr, i, nCols) {
    var tr = $("<tr></tr>");
    for (var j = 0; j < nCols; j++) {
        tr.append($("<td></td>").text(arr[i][j]));
    }
    return tr;
}

function dropDown(dfTar, dfColNames) {
    var select = $("<select></select>");
    var columnNames = dfTar.listColumns();
    var dfCols = new DataFrame({column: columnNames});
    dfCols = dfCols
        .join(dfColNames.rename("Nom de la variable", "column"), "column", "left")
        .groupBy("column")
        .map(function (row, i) {
            return new Row({column: row.get("column"), description: row.get("Libellé de la variable")});
        })
        .map(function (row, i) {
            select.append(
                $("<option></option>")
                    .attr("value", row.get("column"))
                    .text(row.get("description"))
                
            );
        });
    return select;
}


$.when(
    DataFrame.fromText('../data/Table_repas.csv', ";"),
    DataFrame.fromText('../data/Table_menage_1.csv', ";"),
    DataFrame.fromText('../data/Table_indnut.csv', ";"),
    DataFrame.fromText('../data/Table_indiv_ca.csv', ";"),
    DataFrame.fromText('../data/Table_indiv.csv', ";"),
    DataFrame.fromText('../data/Table_conso.csv', ";"),    
    DataFrame.fromText('../data/Table_carnet_ca_1.csv', ";"),    
    DataFrame.fromText('../data/Table_capi_ca.csv', ";"),    
    DataFrame.fromText('../data/Nomenclature_3.csv', ";"), 
    DataFrame.fromText('../data/Data_names_all.csv', ";")
)
    .then(function (dfRepas, dfMenage, dfIndNut, dfIndCA, dfInd, dfConso, dfCarnetCA, dfCapiCA, dfNomenclature, dfColNames) {
        showCols(dfNomenclature, dfColNames, "Nomenclature");
        showCols(dfIndCA, dfColNames, "Indice Compléments Alimentaires");
        showCols(dfIndNut, dfColNames, "Indication nutriments");
        show(dfRepas, "Repas");
        show(dfMenage, "Menage");
        show(dfIndNut, "Individu Nutrition");
        show(dfIndCA, "Individu CA");
        show(dfInd, "Individus");
        show(dfConso, "Consommation");
        show(dfCarnetCA, "Carnet CA");
        show(dfCapiCA, "Capi CA");
        show(dfNomenclature, "Nomenclature");
        show(dfColNames, "Column Names");
});


