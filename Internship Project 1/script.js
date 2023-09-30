function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
    let result = "";

    if (!inputTemperature) {
        result = "Please enter the temperature to convert.";
    }
    
    else {
        if (unitFrom === unitTo) {
            result = "Please select different units for conversion.";
        } else if (unitFrom === "celsius") {
            if (unitTo === "fahrenheit") {
                const fahrenheit = (inputTemperature * 9/5) + 32;
                result = `${inputTemperature}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
            } else if (unitTo === "kelvin") {
                const kelvin = inputTemperature + 273.15;
                result = `${inputTemperature}°C is equal to ${kelvin.toFixed(2)}K.`;
            }
        } else if (unitFrom === "fahrenheit") {
            if (unitTo === "celsius") {
                const celsius = (inputTemperature - 32) * 5/9;
                result = `${inputTemperature}°F is equal to ${celsius.toFixed(2)}°C.`;
            } else if (unitTo === "kelvin") {
                const kelvin = ((inputTemperature - 32) * 5/9) + 273.15;
                result = `${inputTemperature}°F is equal to ${kelvin.toFixed(2)}K.`;
            }
        } else if (unitFrom === "kelvin") {
            if (unitTo === "celsius") {
                const celsius = inputTemperature - 273.15;
                result = `${inputTemperature}K is equal to ${celsius.toFixed(2)}°C.`;
            } else if (unitTo === "fahrenheit") {
                const fahrenheit = (inputTemperature * 9/5) - 459.67;
                result = `${inputTemperature}K is equal to ${fahrenheit.toFixed(2)}°F.`;
            }
        }
    }

    document.getElementById("result").textContent = result;
}
