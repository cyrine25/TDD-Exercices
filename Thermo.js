function thermo(temperatures) {

    if (temperatures.length === 0 && temperatures.length < 10000 ) {
        return 0
    }
    
    return temperatures.reduce((lowestTemperature, currentTemperature) => {
        if (Math.abs(lowestTemperature) > Math.abs(currentTemperature) ) {
            return currentTemperature
        }
        if (Math.abs(lowestTemperature) == Math.abs(currentTemperature)) {
            return Math.max(currentTemperature,lowestTemperature)
        }
        return lowestTemperature
    },temperatures[0])
}
     

module.exports = thermo
