const classProperties = {
  "main-class": true, // 일반 string인 경우
  styles: true, // 변수인 경우
};

function getClassNames(classes) {
  return Object.entries(classes)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(" ");
};

const resultNames = getClassNames(classProperties);

console.log(resultNames);