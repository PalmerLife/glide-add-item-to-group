window.function = function (numbers, desiredQuantity) {
  // Parse input values
  const numberSeries = numbers.value ? numbers.value.split(",").map(Number) : [];
  const quantity = desiredQuantity.value ? parseInt(desiredQuantity.value, 10) : 0;

  // Validate and prepare the series
  if (numberSeries.length < quantity) {
    let lastNumber = numberSeries.length > 0 ? Math.max(...numberSeries) : 0;
    while (numberSeries.length < quantity) {
      lastNumber += 1;
      numberSeries.push(lastNumber);
    }
  }

  // Return the final series as a string
  return numberSeries.join(",");
}
