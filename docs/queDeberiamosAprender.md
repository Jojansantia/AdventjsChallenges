# Reto 19 - ¿Qué deberíamos aprender en Platzi?

Con motivo de las fechas más bonitas del año, en Platzi han lanzado una promoción muy especial porque la educación es un regalo 🎁 para siempre.

En Platzi tienen más de 800 cursos 📚 pero, claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo disponible para completar dos cursos usando el máximo número de horas disponible.

Tenemos que crear una función que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ y el segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

Tenemos claro que queremos hacer dos cursos así que la función debe devolver un array con el índice de los dos cursos que vamos a poder completar con el tiempo disponible proporcionado y usando el máximo tiempo disponible. Si no nos da tiempo, devolvemos null.

```jsx harmony
function learn(time, courses) {
  let coursesToLearn = []

  courses.forEach((course, i) => {
    let idx = []
    courses.forEach((course2, j) => {
      let sum = course + course2
      if((sum <= time) && i !== j && ((idx.length && sum > (courses[idx[0]] + courses[idx[1]])) || !idx.length) ) idx = [i, j]
    });
    if(idx.length) coursesToLearn.push({idx, max: courses[idx[0]] + courses[idx[1]]})
  });

  coursesToLearn.sort((a, b) => ((a.max < b.max ) ? 1 : ((a.max > b.max ) ? -1 : 0)))
  return coursesToLearn.length ? coursesToLearn[0].idx : null
}

console.log(learn(8, [8, 2, 1]), learn(25, [10, 15, 20, 5]) )
```