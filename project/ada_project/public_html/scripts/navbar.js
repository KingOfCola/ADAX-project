/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function fillNavBarUl() {
    var navbar = $("<ul></ul>").addClass("nav navbar-nav navbar-right");
    var sectionDivs = $("#main").find(".section");
    sectionDivs.each(function() {
        navbar.append(createSection($(this)));
    });
    var navbarDiv = $("#navbar-div");
    navbarDiv.empty();
    navbarDiv.append(navbar);
};

function createSection(sectionDiv) {
    var sectionNav = $("<li></li>");
    var subDivs = sectionDiv.find(".subsection");
    
    
    if (subDivs.length === 0) {
        var sectionTitle = $("<a></a>")
            .attr("href", "#" + sectionNav.attr("id"))
            .text(sectionDiv.find("h2").text().toUpperCase());
        sectionNav.append(sectionTitle);
    } else {
        sectionNav.addClass("dropdown");
        var sectionTitle = $("<a></a>")
            .addClass("dropdown-toggle")
            .attr("href", "#" + sectionNav.attr("id"))
            .attr("data-toggle","dropdown")
            .html(sectionDiv.find("h2").text().toUpperCase() + '<span class="caret"></span>');
        var subsectionsNav = $("<ul></ul>").addClass("dropdown-menu");
        subDivs.each(function() {
            subsectionsNav.append(createSubsection($(this)));
        });
        sectionNav.append(sectionTitle);
        sectionNav.append(subsectionsNav);
    }
    return sectionNav;
}

function createSubsection(subsectionDiv) {
    var subsectionNav = $("<li></li>");
    var subsectionTitle = $("<a></a>")
        .attr("href", "#" + subsectionDiv.attr("id"))
        .html(subsectionDiv.find("h3").text().toUpperCase());
    subsectionNav.append(subsectionTitle);
    return subsectionNav;
}