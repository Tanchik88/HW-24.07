interface Airplane {
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}
// Создаем несколько переменных типа Airplane
const airplane1: Airplane = {
  numberOfEngines: 2,
  isJet: true,
  maxHeight: 12000,
  capacity: 200,
};

const airplane2: Airplane = {
  numberOfEngines: 4,
  isJet: true,
  maxHeight: 15000,
  capacity: 300,
};

const airplane3: Airplane = {
  numberOfEngines: 1,
  isJet: false,
  maxHeight: 8000,
};

// Используем переменные
console.log(airplane1);
console.log(airplane2);
console.log(airplane3);