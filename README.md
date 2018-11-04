# Food: a relevant marker of social inequalities?

# Abstract
Quality and transparency of food products in France is a sensitive question nowadays, as showed the heated debate over the "Agriculture and Alimentation" law voted this year by the French Parliament. By crossing analysis of the Open Food Database and a 2015 ANSES study covering the food habits of 4000 people over a week, we want to observe to what extend quality food is available for the different social groups, and which forms the food inequalities take in France. We will establish correlations between level of education, income, lifestyle, and the nutritional or ecological quality of the food that people eat. These stakes are absolutely essential today as the climate change will probably force people to change massively their habits, but it is not sure that a switch to organic food would be sustainable for the lower income households.

# Research questions
* Do different socio-professional groups have very distinct food habits ? Does those habits depend rather on the income, the education level, the area of residence ?
* Do low cost supermarkets sell food that is significantly nutritionally worse than normal supermarkets ? Same question for low-cost brands compared to famous brands.
* Who are the people that buy organic food in France ? Fair-trade products ? Locally produced food ?
* A lighter subject: do the "Bobos" (the French equivalent of "Hipsters") really exist from the standpoint of food habits ? I.e. is there really people who live in the cities, have a certain level of education, and buy a significantly high amount of organic food?

# Dataset
<ul>
<li>https://www.data.gouv.fr/fr/datasets/donnees-de-consommations-et-habitudes-alimentaires-de-letude-inca-2-3/?fbclid=IwAR0QcjTQdH2N2xIXL_xTLHuUIx5YFVWKNOJ4PqetIzeLoq5HNbnSTTre_d8 
<ul>
<li>This database is essentially well organized. It consists of 9 tables with few missing values. 4 Tables share the same unique key being the subjects of the study identifier. Those 4 tables contain 4000 observations with approximately 450 features (relevant or not). Two other are the statements of the consumption by the subjects during the study containing 100,000 and 500,000 observations each. Two other are related to the consumption of dietary complements, and the last is related to the names and categories of the aliments. The three last contain between 1,000 and 6,000 observations.</li>
<li>The table CONSO making a history of the consumption during the week of the study has many names missing that are replaced by X. Most of the spelling of the names and brand names will make it quite difficult to cross with OpenFoodFacts databases.</li>
<li>The meaning of the categorical values and of the column labels is contained in a pdf file with the documentation which is to be parsed in order to make the data more understandable.</li>
</ul>
</li>
<li>OpenFoodFacts:
<ul>
<li>More than 1 million of products referenced by barcode, containing information about nutritional values.</li>
<li>It is a huge database hard to access directly. We will probably use the API, the CSV file weighting more than 1.7GB.
<li>Many fields contain blanks, NaN values or are not relevant (Labels occurring only once for instance). </li>
<li>Many fields will need to be casted to more adequate types (floats, integers, datetime or timestamps)</li>
<li>Most of the names will be hard to match with the ANSES study database.</li>
</ul>
</li>
</ul>

A great disappointment lies in the fact there is absolutely no price values in any of the databases...

# A list of internal milestones up until project milestone 2
## 1- General data analysis (to be done by Nov 8th)
- Explore and clean the datasets.
- Look at the possible joins between OpenFoodFact and the 2015 ANSES study.
## 2- Work on visualizations (to be done by Nov 20th)
- Benchmark of different data visualization libraries.
- Explore the different possible visualizations to find the most relevant ones. The 2015 ANSES study gathers a lot of information about the persons studied and their food habit: we cannot keep all this information for our final project so we have to extract the more meaningful elements to answer our questions and find ways to present these elements in a synthetic way. This include both a work on data itself and investigations over the different ways to visualize this data.
- Choose the best visualizations.
## 3- Conclusion on milestone 2 (to be done by Nov 24th)
- Come back to our initial questions: what answers did we find? how the project has evolved since milestone 1?
- Debugging of the code (adding comments if not done earlier).
- Planning the next milestone.


# Questions for TA
Nothing at this stage of our project.