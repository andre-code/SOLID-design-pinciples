# SOLID-design-pinciples
SOLID represents a set of guides that help to avoid having a bad design. This term was associated by Robert Martin who brought them together in "Agile Software Development: Principles, Patterns, and Practices."

The goal is to develop code that is clear, maintainable, scalable, and less error-prone.
It is based on 5 principles or also called good practices.
* S — Single responsibility principle
* O — Open closed principle
* L — Liskov substitution principle
* I — Interface segregation principle
* D — Dependency Inversion principle

## S - Single responsibility principle
- Each software module must have a single responsibility, the more responsibilities it has, the more coupled it will be.
- A class must be in charge of a single mission.
- It not only applies to classes but also to components such as the famous microservices.
- If a class has more than one responsibility, they are more likely to have to modify it.
- Applying this principle helps to understand/explain easier than a class or component does.
- It also helps to reduce implementation time and have happy programmers.
- However, the code should not be oversimplified. There is no point in having multiple classes with a single function().

### Tip
  - Ask yourself, What is the responsibility of my class/component? If the answer includes 'and' it means that you can rethink the approach for that class/component.

## O - Open closed principle
- Open for extension but close for modification, that means you should be able to extend a module with new features not by changing its source code, but by adding new code instead.
- The goal is to keep adding new features, new code without touch the existing testing code, it should not break what’s already working.
- This principle should be applied in those area which are most likely to be changed.
- There are many design patterns that help us to extend code without changing it, like the Decorator pattern, Factory Method or the Observer pattern might be used to design an application easy to change with minimum changes in the existing code.

## L - Liskov substitution principle
- The Liskov Substitution Principle was first introduced by Barbara Liskov (an American computer scientist) in the late 80s.
- The purpose of this principle is to ensure that a subclass can take the place of its superclass without error. That is, if the code ends up checking the type of an object to perform an action, the Liskov substitution principle is being violated.
- The parent class serves the class has the base members that child classes extend from. Derived types must be completely substitutable for their base types.
- Implementations of the same interface should never give a different result.
- To make sure your code follows the Liskov Substitution Principle is mindful programming. Always keep in mind what the system expects when you’re implementing its functionality.
