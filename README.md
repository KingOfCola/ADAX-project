# Title

# Abstract
Quality and transparency of food products in France is a sensitive question nowadays, as showed the heated debate over the "Agriculture and Alimentation" law voted this year by the French Parliament. By crossing analysis of the Open Food Database and a 2015 ANSES study covering the food habits of 4000 people over a week, we want to observe to what extend quality food is available for the different social groups, and which forms the food inequalities take in France. We will establish correlations between level of education, income, lifestyle, and the nutritional or ecological quality of the food that people eat. These stakes are absolutely essential today as the climate change will probably force people to change massively their habits, but it is not sure that a switch to organic food would be sustainable for the lower income households.

## To change
We use a dataset available at https://www.data.gouv.fr/fr/datasets/donnees-de-consommations-et-habitudes-alimentaires-de-letude-inca-2-3/?fbclid=IwAR0QcjTQdH2N2xIXL_xTLHuUIx5YFVWKNOJ4PqetIzeLoq5HNbnSTTre_d8 . This dataset contains many information about consumptions habits of the test subjects. We may also use OpenFoodFacts data base. Our goal is to analyze consumers eating habits and try to evaluate the impact of advertising on the habits of the consumers

# Research questions
* Does differents socio-professionnal groups have very distinct food habits ? Does it depend rather on the income, the education level, the area of residence ?
* Does low cost supermarket sells food that are significatively worse on the nutritionnal aspect than normal supermarkets ? Same question for low-cost brands compared to famous brands.
* Who are the people that buy organic food in France ? Fair-trade products ? Locally produced food ?
* A lighter subject: do the "Bobos" (the French equivalent of "Hipsters") really exist from the standpoint of food habits ? I.e. is there really people that lives in the cities, have a certain level of education, and buy a significatively high amount of organic food ?

## To change
How is impacted a consumer habits based on the advertising?

# Dataset
(List the dataset(s) you want to use, and some ideas on how do you expect to get, manage, process and enrich it/them. Show us you've read the docs and some examples, and you've a clear idea on what to expect. Discuss data size and format if relevant.)
## To change
<ul>
<li>https://www.data.gouv.fr/fr/datasets/donnees-de-consommations-et-habitudes-alimentaires-de-letude-inca-2-3/?fbclid=IwAR0QcjTQdH2N2xIXL_xTLHuUIx5YFVWKNOJ4PqetIzeLoq5HNbnSTTre_d8 (several MegaBytes, quite well organized, just needs category mapping and column names explanations).</li>
<li>OpenFoodFacts (Not checked yet)</li>
</ul>

# A list of internal milestones up until project milestone 2
(Add here a sketch of your planning for the next project milestone.)
## To change 
<ul>
<li>We need to explore the datasets in order to find what exactly is contained in them. Eventually, we can find some more questions to ask them.</li>
<li>We aim at creating a PHP and JavaScript Web site enabling us to interact actively with the data (to create interactive charts, and have better comprehension of the data).</li>
</ul>

# Questions for TAa
(Add here some questions you have for us, in general or project-specific.)
## To change
Is there a possibility to keep data in memory cache with javascript, without reloading the whole datasets every time we have some minor modifications to do with the code?