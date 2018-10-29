$.when(
//    DataFrame.fromText('../data/Table_repas.csv', ";"),
//    DataFrame.fromText('../data/Table_menage_1.csv', ";"),
    DataFrame.fromText('../data/Table_indnut.csv', ";"),
//    DataFrame.fromText('../data/Table_indiv_ca.csv', ";"),
    DataFrame.fromText('../data/Table_indiv.csv', ";"),
//    DataFrame.fromText('../data/Table_conso.csv', ";"),    
//    DataFrame.fromText('../data/Table_carnet_ca_1.csv', ";"),    
//    DataFrame.fromText('../data/Table_capi_ca.csv', ";"),    
//    DataFrame.fromText('../data/Nomenclature_3.csv', ";"), 
    DataFrame.fromText('../data/Data_names_all.csv', ";"),
    DataFrame.fromText('../data/correspondance_reponses.csv', ";")
).then(
    function (
//    dfRepas, 
//    dfMenage, 
    dfIndNut, 
//    dfIndCA, 
    dfIndiv, 
//    dfConso, 
//    dfCarnetCA, 
//    dfCapiCA, 
//    dfNomenclature, 
    dfColNames, 
    dfCodes) {
        var mainDiv =$("#mainBox");
        mainDiv.append($("<div></div>").append($("<h2></h2>").text("Nutrition")));
        var chartDivNut = addChart(dfIndNut, "aet", "sexe_ps", dfCodes);
        var selectNutCategories, selectNutValues;
        selectNutValues = createDropDownValues(dfIndNut, dfColNames, function (e) {createChart(chartDivNut, dfIndNut, selectNutValues.val(), selectNutCategories.val());});
        selectNutCategories = createDropDownCategories(dfIndNut, dfColNames, function (e) {createChart(chartDivNut, dfIndNut, selectNutValues.val(), selectNutCategories.val());});
        
        createChart(chartDivNut, dfIndNut, selectNutValues.val(), selectNutCategories.val(), dfCodes);
        
        mainDiv.append($("<div></div>").append($("<h2></h2>").text("Individus")));
        var chartDivIndiv = addChart(dfIndiv, "achapub", "sexe_ps", dfCodes);
        var selectIndivCategories, selectIndivValues;
        selectIndivValues = createDropDownValues(dfIndiv, dfColNames, function (e) {createChart(chartDivIndiv, dfIndiv, selectIndivValues.val(), selectIndivCategories.val());});
        selectIndivCategories = createDropDownCategories(dfIndiv, dfColNames, function (e) {createChart(chartDivIndiv, dfIndiv, selectIndivValues.val(), selectIndivCategories.val());});
        
        createChart(chartDivIndiv, dfIndiv, selectIndivValues.val(), selectIndivCategories.val(), dfCodes);
});