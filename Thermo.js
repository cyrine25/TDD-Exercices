function thermo(temperature) {
    if (temperature.length !== 0) {
        let lowestTemperature = temperature[0]
        for (i = 0; i < temperature.length; i++) {
            if (lowestTemperature > temperature[i] && temperature[i] > 0) {
                lowestTemperature = temperature[i]
            }
        }
        return lowestTemperature
    }else return 0
}
     

module.exports = thermo
