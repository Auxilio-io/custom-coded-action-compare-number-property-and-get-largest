let array = []

exports.main = async (event, callback) => {
  const cB = event.inputFields['clearbit_company_metrics_employees'];
  const zI = event.inputFields['zoominfo_number_of_employees2'];
  if (cB) {
    array.push(cB)
  }
  if (zI) {
    array.push(zI)
  }
  console.log(array)
  const largestNumberOfEmployees = Math.max(...array)
  console.log(largestNumberOfEmployees);

  callback({
    outputFields: {
      largestNumberOfEmployees: largestNumberOfEmployees
    }
  });
}