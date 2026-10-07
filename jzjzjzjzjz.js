"use strict";

function getProperty(object, key) {
  return object[key];
}

function countProperties(object) {
  return Object.keys(object).length;
}

function sumNumericProperties(object) {
  let sum = 0;

  for (const key in object) {
    const value = object[key];

    if (typeof value === "number") {
      sum += value;
    }
  }

  return sum;
}

function createProduct(name, price, quantity) {
  return {
    name: name,
    price: price,
    quantity: quantity,

    getTotal() {
      return this.price * this.quantity;
    },
  };
}

function calculateAverageGrade(student) {
  const grades = student.grades;

  if (grades.length === 0) {
    return 0;
  }

  let sum = 0;

  for (const grade of grades) {
    sum += grade;
  }

  return sum / grades.length;
}

function findMostExpensiveProduct(products) {
  if (products.length === 0) {
    return null;
  }

  let mostExpensive = products[0];

  for (const product of products) {
    if (product.price > mostExpensive.price) {
      mostExpensive = product;
    }
  }

  return mostExpensive;
}

module.exports = {
  getProperty,
  countProperties,
  sumNumericProperties,
  createProduct,
  calculateAverageGrade,
  findMostExpensiveProduct,
};