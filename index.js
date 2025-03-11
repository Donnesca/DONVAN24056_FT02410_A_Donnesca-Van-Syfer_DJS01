/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Function to convert km/h to m/s
const kmhToMs = (VelocityKmh) => {
  if (typeof VelocityKmh !== "number") {
    throw new Error("VelocityKmh must be number (km/h).");
  }
  return VelocityKmh * (1000 / 3600);
};

// Function to convert m/s to km/h
const msToKmh = (velocityMs) => {
  if (typeof velocityMs !== "number") {
    throw new Error("velocityMs must be a number (m/s).");
  }
  return velocityMs * (3600 / 1000);
};

// Function to calculate new velocity
const calcNewVel = (acceleration, initialVelocityKmh, timeSeconds) => {
  if (
    typeof acceleration !== "number" ||
    typeof initialVelocityKmh !== "number" ||
    typeof timeSeconds !== "number"
  ) {
    throw new Error(
      "Invalid input types. All parameters must be numbers. Acceleration (m/s^2), Velocity (km/h), TIme (seconds)."
    );
  }
  const initialVelocityMs = kmhToMs(initialVelocityKmh);
  const newVelocityMs = initialVelocityMs + acceleration * timeSeconds;
  return msToKmh(newVelocityMs);
};

const d2 = d + (vel * time) / 3600; // Calcultes new distance in km, converting time to hours.
const fuelConsumed = fbr * time; // Calculates fuels consumed
const rf = fuel - fuelConsumed; // Calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
//calcNewVel = (acc, vel, time) => {
//return vel + acc * time;
//};

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
