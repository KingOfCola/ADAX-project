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
        var chartDiv = addChart(dfIndNut, "aet", "sexe_ps");
        showCols(dfIndNut, dfColNames, "Indication nutriments (CHANGE ME)", function (e) {createChart(chartDiv, dfIndNut, $(this).val(), "sexe_ps");});
        showCols(dfNomenclature, dfColNames, "Nomenclature");
        showCols(dfIndCA, dfColNames, "Indice Compléments Alimentaires");
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


