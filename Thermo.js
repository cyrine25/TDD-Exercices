function thermo(temperatures) {

    if (temperatures.length === 0 ) {
        return 0
    }
    if (temperatures.length > 10000) {
        throw new Error('The number of temperatures exceeds the maximum limit of 10000')
    }
    return temperatures.reduce((lowestTemperature, currentTemperature) => {
        if (Math.abs(lowestTemperature) > Math.abs(currentTemperature) ) {
            return currentTemperature
        }
        if (Math.abs(lowestTemperature) === Math.abs(currentTemperature)) {
            return Math.max(currentTemperature,lowestTemperature)
        }
        return lowestTemperature
    },temperatures[0])
}
     

module.exports = thermo
