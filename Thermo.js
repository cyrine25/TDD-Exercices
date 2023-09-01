function thermo(temperature) {
    if (temperature.length !== 0) {
       return temperature.reduce((lowestTemperature, currentTemperature) => {
            if (Math.abs(lowestTemperature) > Math.abs(currentTemperature) && currentTemperature>0) {
                return Math.abs(currentTemperature)
            }
           return lowestTemperature
       })
    } 
    else return 0
}
     

module.exports = thermo
