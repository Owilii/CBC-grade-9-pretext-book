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
  "id": "sec-area",
  "level": "1",
  "url": "sec-area.html",
  "type": "Section",
  "number": "3.1",
  "title": "Area",
  "body": " Area   test2   "
},
{
  "id": "sec-volume-of-solids",
  "level": "1",
  "url": "sec-volume-of-solids.html",
  "type": "Section",
  "number": "3.2",
  "title": "Volume of Solids",
  "body": " Volume of Solids   test6   "
},
{
  "id": "sec-mass-volume-weight-and-density",
  "level": "1",
  "url": "sec-mass-volume-weight-and-density.html",
  "type": "Section",
  "number": "3.3",
  "title": "Mass, Volume, Weight and Density",
  "body": " Mass, Volume, Weight and Density   test3   "
},
{
  "id": "sec-time-distance-and-speed",
  "level": "1",
  "url": "sec-time-distance-and-speed.html",
  "type": "Section",
  "number": "3.4",
  "title": "Time, Distance and Speed",
  "body": " Time, Distance and Speed   test5   "
},
{
  "id": "sec-money",
  "level": "1",
  "url": "sec-money.html",
  "type": "Section",
  "number": "3.5",
  "title": "Money",
  "body": " Money   test4   "
},
{
  "id": "sec-approximations-and-errors",
  "level": "1",
  "url": "sec-approximations-and-errors.html",
  "type": "Section",
  "number": "3.6",
  "title": "Approximations and Errors",
  "body": " Approximations and Errors   test1   "
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
  "id": "ch-data-handling-and-probability",
  "level": "1",
  "url": "ch-data-handling-and-probability.html",
  "type": "Chapter",
  "number": "5",
  "title": "Data Handling And Probability",
  "body": " Data Handling And Probability   lll   "
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
