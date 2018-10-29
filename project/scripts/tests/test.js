/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var DataFrame = dfjs.DataFrame;
var Row = dfjs.Row;

function showCols(df, dfCols, name=null, callBack = null) {
    /**
     * create a dropDown enabling the selection of a column from df
     * df: DataFrame object where the columns are to be selected
     * dfCols: DataFrame object where the correspondances column name - meaning are stored
     * name: String containg the name of the dataFrame to show
     * callback: Function callback to call on change of the dropDown.
     *  
     * @type dropDown
     */
    var div = $("#mainBox");
    if (name !== null) {div.append($("<div></div>").append($("<p></p>")).text(name));}
    var columnNames = df.listColumns();
    var select = dropDown(columnNames, dfCols);
    var container = $("<div></div>").addClass("w3-row");
    container.append($("<div></div>").append(select).addClass("w3-cell"));
    var displayDiv = $("<div></div>").text(select.val()).addClass("w3-cell");
    if (callBack === null) {
        callBack = function (e) {displayDiv.text($(this).val());};
    }
    select.on({change: callBack});
    container.append(displayDiv);
    div.append(container);
    return select;
}


function createDropDownCategories(df, dfCols, callBack = null) {
    /**
     * create a dropDown enabling the selection of a column from df
     * df: DataFrame object where the Categories columns are to be selected
     * dfCols: DataFrame object where the correspondances column name - meaning are stored
     * callback: Function callback to call on change of the dropDown.
     *  
     * @type dropDown
     */
    return createDropDownGeneric(df, dfCols, callBack, dropDownCategories);
}


function createDropDownValues(df, dfCols, callBack = null) {
    /**
     * create a dropDown enabling the selection of a column from df
     * df: DataFrame object where the Values columns are to be selected
     * dfCols: DataFrame object where the correspondances column name - meaning are stored
     * callback: Function callback to call on change of the dropDown.
     *  
     * @type dropDown
     */
    return createDropDownGeneric(df, dfCols, callBack, dropDownValues);
}

function createDropDownGeneric(df, dfCols, callBack, dropDownCreator) {
    /**
     * create a dropDown enabling the selection of a column from df
     * df: DataFrame object where the columns are to be selected
     * dfCols: DataFrame object where the correspondances column name - meaning are stored
     * callback: Function callback to call on change of the dropDown.
     * dropdownCreator: Function the generator of dropdown to call on the columns.
     *  
     * @type dropDown
     */
    var div = $("#mainBox");
    var columnNames = df.listColumns();
    var select = dropDownCreator(columnNames, dfCols);
    var container = $("<div></div>").addClass("w3-row");
    container.append($("<div></div>").append(select).addClass("w3-cell"));
    var displayDiv = $("<div></div>").text(select.val()).addClass("w3-cell");
    if (callBack === null) {
        callBack = function (e) {displayDiv.text($(this).val());};
    }
    select.on({change: callBack});
    container.append(displayDiv);
    div.append(container);
    return select;
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

function dropDown(columnNames, dfColNames) {
    var dfCols = new DataFrame({column: columnNames});
    dfCols = dfCols
        .join(dfColNames.rename("Nom de la variable", "column"), "column", "left")
        .dropDuplicates("column")
        .map(function (row, i) {
            return new Row({column: row.get("column"), description: row.get("Libellé de la variable")});
        });
    return createDropDown(dfCols);
}

function dropDownCategories(columnNames, dfColNames) {
    var dfCols = new DataFrame({column: columnNames});
    dfCols = dfCols
        .join(dfColNames.rename("Nom de la variable", "column"), "column", "left")
        .dropDuplicates("column")
        .where(row => row.get("Libellé du codage") !== "")
        .map(function (row, i) {
            return new Row({column: row.get("column"), description: row.get("Libellé de la variable")});
        });
    return createDropDown(dfCols);
}

function dropDownValues(columnNames, dfColNames) {
    var dfCols = new DataFrame({column: columnNames});
    dfCols = dfCols
        .join(dfColNames.rename("Nom de la variable", "column"), "column", "left")
        .dropDuplicates("column")
        .where(row => (row.get("Libellé du codage") === "") && (row.get("Type") === "Numérique"  || row.get("Type") === "Float")).groupBy("column")
        .map(function (row, i) {
            return new Row({column: row.get("column"), description: row.get("Libellé de la variable")});
        });
    return createDropDown(dfCols);
}

function createDropDown(dfCols) {
    var select = $("<select></select>");
    dfCols.map(function (row, i) {
        select.append(
            $("<option></option>")
                .attr("value", row.get("column"))
                .text(row.get("description"))
        );
    });
    return select;
}

function addChart(df, col, colClasses=null) {
    var div = $("<div></div>").attr("style", "width:400px; height:300px");
    $("#mainBox").append(div);
    createChart(div, df, col, colClasses);
    return div;
}

function createChart(div, df, col, colClasses=null, dfColsClasses=null) {
    var options = {
        axisX: {
            title: col
        },
        axisY: {
            title: "Number of entries"
        },
        data: getBinsFromClasses(df, 50, col, colClasses, dfColsClasses)
    };
    div.CanvasJSChart(options);
}

function getBinsFromClasses(df, nBins, colData, colClass = null, dfColsClasses=null) {
    if (colClass === null) {return [{type: "line", dataPoints: getBins(df.toArray(colData), nBins)}];}
    if (!(df.listColumns().find(function (e) {return e === colClass;}))) {
        console.log(colClass + " not in df columns... " + JSON.stringify(df.listColumns()));
        return [{type: "line", dataPoints: getBins(df.toArray(colData), nBins)}];
    }
    var classes = df.select(colClass).dropDuplicates().toArray(colClass);
    var values = df.toArray(colData);
    var data = [];
    var vmin = Math.min(...values), vmax = Math.max(...values);
    classes.map(function (c) {
        var classLabel = c;
        if (dfColsClasses !== null) {
            try {
                classLabel = dfColsClasses.where({"Libellé de codage": colClass, "code": c}).toArray()[0].Signification;
                console.log(JSON.stringify(dfColsClasses.where({"Libellé de codage": colClass, "code": c}).toArray()));
            } catch (e) {
                console.log(e);
            }
        } 
        data.push({
            type: "line",
            showInLegend: true, 
            name: classLabel,
            dataPoints: getBinsFromBounds(
                df.where(row => row.get(colClass) === c).toArray(colData), 
                vmin,
                vmax, 
                nBins
            )
        });
    });
    return data;
}

function getBins(data, nBins=50) {
    var vmin = Math.min(...data), vmax = Math.max(...data), dv = (vmax - vmin) / nBins;
    return getBinsFromBounds(data, vmin, vmax, nBins);
}


function getBinsFromBounds(data, vmin, vmax, nBins) {
    var dv = (vmax - vmin) / nBins;
    var dataBins = [];
    for (var v = vmin; v < vmax; v += dv) {
        dataBins.push({x: v, y: 0});
    }
    data.map(function (v) {
        dataBins[Math.min(nBins-1, Math.floor((v - vmin) / dv))].y ++;
    });
    return dataBins;
}

