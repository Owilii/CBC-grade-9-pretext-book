var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-whole-numbers",
  "level": "1",
  "url": "ch-whole-numbers.html",
  "type": "Chapter",
  "number": "1",
  "title": "Whole Numbers",
  "body": " Whole Numbers   lll   "
},
{
  "id": "ch-algebra",
  "level": "1",
  "url": "ch-algebra.html",
  "type": "Chapter",
  "number": "2",
  "title": "Algebra",
  "body": " Algebra   lll   "
},
{
  "id": "ch-measurements",
  "level": "1",
  "url": "ch-measurements.html",
  "type": "Chapter",
  "number": "3",
  "title": "Measurements",
  "body": " Measurements   lll   "
},
{
  "id": "ch-geometry",
  "level": "1",
  "url": "ch-geometry.html",
  "type": "Chapter",
  "number": "4",
  "title": "Geometry",
  "body": " Geometry   lll   "
},
{
  "id": "sec-data_interpretation",
  "level": "1",
  "url": "sec-data_interpretation.html",
  "type": "Section",
  "number": "5.1",
  "title": "Data Interpretation",
  "body": " Data Interpretation   By the end of this section, you will be able to:     Define and distinguish between different types of data (primary, secondary, and tertiary).    Identify appropriate data collection methods, including surveys, experiments, and observations.    Organize and present data using frequency distribution tables for both grouped and ungrouped data.    Compute and interpret measures of central tendency (mean, median, and mode) to summarize datasets.    Visualize data effectively through histograms and frequency polygons.    Apply statistical methods to analyze real-world problems and draw meaningful conclusions.       Collection of Data  Sources of Data         Organizing Data         Data Representation         Measures of Central Tendency         Measures of Spread         Data Interpretation        "
},
{
  "id": "subsec-classification-of-data-3",
  "level": "2",
  "url": "sec-data_interpretation.html#subsec-classification-of-data-3",
  "type": "Activity",
  "number": "5.1.1",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-organizing_data-2",
  "level": "2",
  "url": "sec-data_interpretation.html#subsec-organizing_data-2",
  "type": "Activity",
  "number": "5.1.2",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-data_representation-2",
  "level": "2",
  "url": "sec-data_interpretation.html#subsec-data_representation-2",
  "type": "Activity",
  "number": "5.1.3",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-measures_of_central_tendency-2",
  "level": "2",
  "url": "sec-data_interpretation.html#subsec-measures_of_central_tendency-2",
  "type": "Activity",
  "number": "5.1.4",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-measures_of_spread-2",
  "level": "2",
  "url": "sec-data_interpretation.html#subsec-measures_of_spread-2",
  "type": "Activity",
  "number": "5.1.5",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-data_interpretation-2",
  "level": "2",
  "url": "sec-data_interpretation.html#subsec-data_interpretation-2",
  "type": "Activity",
  "number": "5.1.6",
  "title": "",
  "body": "    "
},
{
  "id": "sec-probability",
  "level": "1",
  "url": "sec-probability.html",
  "type": "Section",
  "number": "5.2",
  "title": "Probability 1",
  "body": " Probability 1   probability    Introduction to Probability         Theoritical Probability         Experimental Probability         Exclusive Events         Complementary Events         Independent Events         Application of Probability        "
},
{
  "id": "subsec-introduction_to_probability-2",
  "level": "2",
  "url": "sec-probability.html#subsec-introduction_to_probability-2",
  "type": "Activity",
  "number": "5.2.1",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-theoritical_probability-2",
  "level": "2",
  "url": "sec-probability.html#subsec-theoritical_probability-2",
  "type": "Activity",
  "number": "5.2.2",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-experimental_probability-2",
  "level": "2",
  "url": "sec-probability.html#subsec-experimental_probability-2",
  "type": "Activity",
  "number": "5.2.3",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-exclusive_events-2",
  "level": "2",
  "url": "sec-probability.html#subsec-exclusive_events-2",
  "type": "Activity",
  "number": "5.2.4",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-complementary_events-2",
  "level": "2",
  "url": "sec-probability.html#subsec-complementary_events-2",
  "type": "Activity",
  "number": "5.2.5",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-independent_events-2",
  "level": "2",
  "url": "sec-probability.html#subsec-independent_events-2",
  "type": "Activity",
  "number": "5.2.6",
  "title": "",
  "body": "    "
},
{
  "id": "subsec-application_of_probability-2",
  "level": "2",
  "url": "sec-probability.html#subsec-application_of_probability-2",
  "type": "Activity",
  "number": "5.2.7",
  "title": "",
  "body": "    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
