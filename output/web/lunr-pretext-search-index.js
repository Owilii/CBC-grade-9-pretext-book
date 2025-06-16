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
