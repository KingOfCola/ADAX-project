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
<li>It is a huge database hard to access directly. We will probably use the API, the CSV file weighting more than 1.7GB.</li>
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

# Summary of milestone 2
- There is no easy way to join OpenFoodFact and the ANSES study. However they can both be used to answer different parts of our problematic: the OpenFoodFact gives us information about nutritionnal quality of products sold in supermarkets and the INCA study gives us information about people's food habits, health and way of life.
- In milestone 1 we had noticed the problem of the absence of prices in our datasets. That is quite inconvenient with regard to what we want to do because ideally we would have liked to compare the quality of products in two different range of prices. We circumvented the problem by focusing on organic vs non-organic food. The former is known to be more expensive, so more or less reserved to the wealhiest people, and healthier because of the lower rate of pesticide but is it also healthier from a nutritionnal point of view? Our first analysis shows no proof of a better nutrition score of organic food. 
- We used the INCA dataset to study more people's health and food habit with regard to their social background (education, living place, gender, age,...). 
    - We often restricted our study to adults because children's nutrition is a whole subject in itself and studying blindly children and adults together would have led to incoherent results.
    - In order to compare people's health we decided to use the Body Mass Index. It is a simple estimator that allows us to discriminate quickly underweight/overweight/obese persons by comparing their weigth to their height. This indicator has its limits of course (it is discussed more in the notebook).
    - We notice variations in food consumption with age and social class.
- The main limit of the INCA dataset is that even if we have plenty of variables it is difficult to compare several criteria at the same time. For instance we will have enough people to make statistics on female between 18 and 24 years or people living in a given region but if we want to study female between 18 and 24 years in this given region we will end up with very few persons. This is quite normal but it makes our analysis more complex because when we see a trend we would like to be sure that it is not due to a hidden variable (for instance the differences between regions can be cultural but can also be simply due to the fact some regions are younger than others).
    

# A list of internal milestones up until project milestone 3
## 1- Data story (December 2nd)
- Organize the results of milestone 2 in order to have a first plan of our data story
- List the results we lack in order to have a coherent data story and compute them.
- Re-write the data story by taking into account the new results found

## 2- Data visualisation (December 8th)
- At this stage most our visualisations are static, find ways to make them more interactive (especially when we have a serie of very similar visualisations for a range of variables: this can be replaced by widgets that allows the user to choose the variable he or she wants to display).
- Select the best visualisations for the report.

## 3- Report (December 14th)
- Choose the best format for the report.
- Create the report by gathering the results of the two previous sections in the chosen format.

## 4- Update the readme and plan the presentation (December the 15th)

# Summary of milestone 3

The preliminary data analysis of Milestone 2 gave us the possibility to decide the organisation of our data story and the type of visualisations we wanted. We extended the notebook `Milestone 2.ipynb` by coding these visualisations. As several part of this notebook have been extended we tried to make the new contributions obvious by giving to the new subsections names that start by "Milestone 3".

From the work done in Milestone 2 we've decided to:

- Keep the organic food analysis of Milestone 2. We've improved it by using the KL entropy as suggested in the review of the Milestone. We also coded maps and graphs that allow to understand a bit more the context of organic farming in France.
- Keep the BMI indicator for an overview of the french population (interactive histogram in the overview section of the data story) and box plots combined with scatterplots in "Observed inequalities" section. We only kept the boxplots of Milestone 2 that were the most significant (for instance we did not keep the box plots according to the living place) and we made them interactive using bokeh library.
- Keep the nutrient analysis according to social class. We've improved it by making clearer bar charts and by translating all the elements in english (as the ANSES study is in french, there is a work of translation before displaying the results). We've also tried to plot a pca in order to see if social classes or age category could e distinguish by looking at nutrient intakes. Unfortunately this analysis did not lead to very interpretable results so we did not keep it for the data story.
- Add a section to compare different stores: do cheaper stores have a worse nutriscore than more expensive ones?
- Do some additional research on food impact on health in order to document the introduction and the conclusion of our report and also to have some more interesting comments to give on our plots.

We've also decided that our report would be a data story. This data story is available in the "data story" folder and also at `https://github.com/ADAX-Food-Inequalities/Data_story` (we've followed the instructions given on mattermost and created an organisation on github to store our data story).

# A list of internal milestones up until project milestone 4

## Choose the elements and visualisations we want to keep for the poster (December 22nd)
We should decide which visualisations will be useful for the poster. We have to plan the modifications that would need to be done on them (we have several interactive visualisations that have to be adapted if we want to use them on a poster, i.e. as static visualisations). As we will have less space we might need to create some new visualisations that summarize the main elements of several visualisations used in our data story.

## Code the adaptations and the new visualizations (January 5th)
The decisions taken during the previous internal milestone will have to be put into practice in order to have all our visualisations available by January the 5th.

## Create the poster (January 10th)
Create a poster with the given visualisations.

## Prepare the speech (January the 15th)
Prepare the 3 minutes speech, choose the person who will speak. If needed prepare the optional elements we want to display during the presentation.

# Contributions of different team members

## Milestone 1
Mainly a team work, the draft was written during a meeting. Then the abstract  and the research questions was written by Joseph, the dataset analysis written by Urvan and the list of internal milestones up until project milestone 2 by Lucile.

## Milestone 2
The different possible analysis to be done were decided during a team meeting then:

- Urvan coded the analysis of organic food and some data pre-processing of the INCA study
- Jospeh coded the analysis of nutrient intakes
- Lucile coded the BMI study, tobacco consumption and updated the README

Each team member wrote the textual interpretation of the results he or she had obtained.

## Milestone 3
The final plan of our data story was decided during a team meeting then:

- Urvan coded the visualisations of organic food and stores
- Joseph coded the visualisations of nutrient intakes including the pca
- Lucile coded the BMI study, some maps for the organic agriculture and updated the README

As one could notice, we divided the work the same way than for Milestone 2. The template of the data story was coded by Lucile and modified by Urvan. Then each team member added the parts corresponding to his/her visualisations and the related textual interpretations. Lucile wrote the introduction and conclusion.

## Milestone 4
We plan to do the first internal milestone during a team meeting before the holidays. Then each of us will code/adapt the visualisations corresponding to the part of the project he or she has supervised during milestone 2 and 3. The last 2 internal milestones will be done during team meetings.


# Questions for TA
Nothing at this stage of our project.
