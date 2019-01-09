// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue) {
    return drivers.map(function(driver) {
      return driver.name
    }) 
  })
}

function exactMatch(drivers, key, value) {
  return drivers.filter(function(el) {
    return el.key === value;
  })
}

function exactMatchToList(drivers, revenue) {
  return drivers.filter(function(el) {
    if (el.revenue===revenue);
  })
}
