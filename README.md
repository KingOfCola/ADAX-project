# Title

# Abstract
Quality and transparency of food products in France is a sensitive question nowadays, as showed the heated debate over the "Agriculture and Alimentation" law voted this year by the French Parliament. By crossing analysis of the Open Food Database and a 2015 ANSES study covering the food habits of 4000 people over a week, we want to observe to what extend quality food is available for the different social groups, and which forms the food inequalities take in France. We will establish correlations between level of education, income, lifestyle, and the nutritional or ecological quality of the food that people eat. These stakes are absolutely essential today as the climate change will probably force people to change massively their habits, but it is not sure that a switch to organic food would be sustainable for the lower income households.

# Research questions
* Does differents socio-professionnal groups have very distinct food habits ? Does it depend rather on the income, the education level, the area of residence ?
* Does low cost supermarket sells food that are significatively worse on the nutritionnal aspect than normal supermarkets ? Same question for low-cost brands compared to famous brands.
* Who are the people that buy organic food in France ? Fair-trade products ? Locally produced food ?
* A lighter subject: do the "Bobos" (the French equivalent of "Hipsters") really exist from the standpoint of food habits ? I.e. is there really people that lives in the cities, have a certain level of education, and buy a significatively high amount of organic food ?

# Dataset
(List the dataset(s) you want to use, and some ideas on how do you expect to get, manage, process and enrich it/them. Show us you've read the docs and some examples, and you've a clear idea on what to expect. Discuss data size and format if relevant.)
## To change
<ul>
<li>https://www.data.gouv.fr/fr/datasets/donnees-de-consommations-et-habitudes-alimentaires-de-letude-inca-2-3/?fbclid=IwAR0QcjTQdH2N2xIXL_xTLHuUIx5YFVWKNOJ4PqetIzeLoq5HNbnSTTre_d8 (several MegaBytes, quite well organized, just needs category mapping and column names explanations).</li>
<li>OpenFoodFacts (Not checked yet)</li>
</ul>

# A list of internal milestones up until project milestone 2
1- General data analysis (to be done by Nov 8th)
- Explore and clean the datasets.
- Look at the possible joins between the OpenFoodFact and the 2015 ANSES study.
2- Work on visualizations (to be done by Nov 20th)
- Benchmark of different data visualization libraries.
- Explore the different possible visualizations to find the more relevant. The 2015 ANSES study gather a lot of information about the persons studied and their food habit we cannot keep all this information for our final project so we have to extract the more meaningful elements to answer our questions and find ways to present these elements in a synthetic way. This include both a work on the data itself and investigations over the different way to visualize this data.
- Choose the best visualizations.
3- Conclusion on milestone 2 (to be done by Nov 24th)
- Come back on our initial questions: what answers did we find? how the project has evolved since milestone 1?
- Debugging of the code (adding comments if not done earlier).
- Planning the next milestone.


# Questions for TAa
(Add here some questions you have for us, in general or project-specific.)
## To change
Is there a possibility to keep data in memory cache with javascript, without reloading the whole datasets every time we have some minor modifications to do with the code?