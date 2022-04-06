module.exports = {
  filterBySearchTerm: function(array, termToSearch) {
    return array.filter((question) => {
      if (termToSearch.length < 3) return question;
      if (question.question_body.toLowerCase().includes(termToSearch.toLowerCase())){
      return question;
      }
    })
  }
}