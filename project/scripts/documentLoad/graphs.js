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
).then(
    function (dfRepas, dfMenage, dfIndNut, dfIndCA, dfInd, dfConso, dfCarnetCA, dfCapiCA, dfNomenclature, dfColNames) {
        var chartDivNut = addChart(dfIndNut, "aet", "sexe_ps");
        var selectNut = showCols(dfIndNut, dfColNames, "Indication nutriments (CHANGE ME)", function (e) {createChart(chartDivNut, dfIndNut, $(this).val(), "sexe_ps");});
        createChart(chartDivNut, dfIndNut, selectNut.val(), "sexe_ps");
        
        var chartDivInd = addChart(dfInd, "q148", "sexeps");
        var selectInd = showCols(dfInd, dfColNames, "Indiv (CHANGE ME)", function (e) {createChart(chartDivInd, dfInd, $(this).val(), "sexe_ps");});
        createChart(chartDivInd, dfInd, selectInd.val(), "sexe_ps");
});