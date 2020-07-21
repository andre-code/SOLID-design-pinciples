# SOLID-design-pinciples
SOLID representa un set de guias que ayudan a evitar tener un mal diseño. Este término fue asociado por Robert Martin quien los reunió en "Desarrollo de software ágil: principios, patrones y prácticas".

El objetivo es conseguir desarrollar código claro, mantenible, escalable y menos propenso a errores.
Se basa en 5 principios o también llamados buenas prácticas.
* S — Single responsibility principle
* O — Open closed principle
* L — Liskov substitution principle
* I — Interface segregation principle
* D — Dependency Inversion principle

## Single - Principio de una sola responsabilidad
- Cada modulo de software debe tener una única responsabilidad, entre más responsabilidades tenga, más acoplada estará. 
- Una clase debe estar a cargo de una sola misión.
- No sólo aplica a clases sino también a componentes como los famosos microservicios.
- Si una clase tiene más de una responsabilidad hay más probabilidades de tener que modificarla.
- Aplicar este principio ayuda a entender/explicar más fácil que hace una clase o un componente.
- También ayuda a reducir en tiempo de implementación y a tener programadores felices.
- Sin embargo, no hay que sobresimplificar el código. No tiene sentido tener multiples clases con una sola función f().

### Tip
  - Pregúntate, Cuál es la responsabilidad de mi clase/componente?. Si la respuesta incluye 'y' quiere decir que puedes replantear el enfoque para dicha clase/componente.
