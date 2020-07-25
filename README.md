# SOLID Design principles
SOLID represents a set of guides that help to avoid having a bad software design. This term was associated by Robert Martin who brought them together in "Agile Software Development: Principles, Patterns, and Practices."

The main goal of the SOLID principles is that any software should tolerate change, should be easy to understand and less error-prone.
It helps us to think about the right way to build a software system. Knowledge of the principles and patterns gives you the justification to decide when and where to apply them. Although those principles are mainly heuristics, they are common-sense solutions to common problems. In practice, they have been proven over and over and over again. Thus they should be approached with common sense.
It is based on 5 principles or also called good practices.
* S — Single responsibility principle
* O — Open closed principle
* L — Liskov substitution principle
* I — Interface segregation principle
* D — Dependency Inversion principle

## S - Single responsibility principle SRP
- Each software module must have a single responsibility, the more responsibilities it has, the more coupled it will be.
- A class must be in charge of a single mission.
- It not only applies to classes but also to components such as the famous microservices.
- If a class has more than one responsibility, they are more likely to have to modify it.
- Applying this principle helps to understand/explain easier than a class or component does.
- It also helps to reduce implementation time and have happy programmers.
- However, the code should not be oversimplified. There is no point in having multiple classes with a single function().

### Tip
  - Ask yourself, What is the responsibility of my class/component? If the answer includes 'and' it means that you can rethink the approach for that class/component.

## O - Open closed principle OCP
- Open for extension but close for modification, that means you should be able to extend a module with new features not by changing its source code, but by adding new code instead.
- The goal is to keep adding new features, new code without touch the existing testing code, it should not break what’s already working.
- This principle should be applied in those area which are most likely to be changed.
- There are many design patterns that help us to extend code without changing it, like the Decorator pattern, Factory Method or the Observer pattern might be used to design an application easy to change with minimum changes in the existing code.

## L - Liskov substitution principle LSP
- The Liskov Substitution Principle was first introduced by Barbara Liskov (an American computer scientist) in the late 80s.
- The purpose of this principle is to ensure that a subclass can take the place of its superclass without error. That is, if the code ends up checking the type of an object to perform an action, the Liskov substitution principle is being violated.
- The parent class serves the class has the base members that child classes extend from. Derived types must be completely substitutable for their base types.
- Implementations of the same interface should never give a different result.
- To make sure your code follows the Liskov Substitution Principle is mindful programming. Always keep in mind what the system expects when you’re implementing its functionality.

## I — Interface segregation principle ISP
- The ISP states that no client should be forced to depend on methods it does not use. “Client” in this case means the implementing class of an interface.
- If a client does not need a method then the client should not know about the method / should not have to implement it.
- In general, the word interface is used to define an abstract class that contains no data but defines properties and methods of a class.
- Similar to the Single Responsibility Principle, the goal of the Interface Segregation Principle is to reduce the side effects and frequency of required changes by splitting the software into multiple, independent parts.
- Interface is also the keyword that is used in Java, C#, Typescript and other programming languages, so in the context of those languages the word interface is synonymously used to describe the language-specific type of interface.
- Though the JavaScript language may not provide interface types to aid in specifying the contract of an object, the object’s implicit interface still serves as a contract to clients within an application.
 - In languages like Java and C#, all methods declared by an interface must be implemented. For cases where a particular interface is required, but only a subset of the behavior is relevant for a given usage scenario, the unused methods are generally stubbed out with empty implementations or with implementations which simply throw an exception indicating the method isn’t actually implemented,  that is a violation of this principle.
- In JavaScript, cases, where only a subset of an object’s interface is utilized, doesn’t end up posing the same issues since a substituting object need only provide the expected properties to conform to the consumed portion of the object’s interface. Nevertheless, such implementations can still lead to Liskov Substitution Violations.
- In summary, the dynamic capabilities of JavaScript leave us with a few less consequences to the occurrence of non-cohesive interfaces than with statically-typed languages, but the Interface Segregation Principle has its place in the design of JavaScript applications nonetheless.

## D — Dependency Inversion principle DIP
- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.

The goal behind dependency inversion is to decouple objects to the extent that no client code has to be changed simply because an object it depends on needs to be changed to a different one. 
It achieves testability and replaceability because components in a loosely coupled system can be replaced with alternative implementations that provide the same services.

### What is a High-level and low-level modules?
When we design software applications we can consider the low level classes the classes which implement basic and primary operations(disk access, network protocols,...) for example opening a MySQL database connection is considered low level as its bound to a specific scope, and high level classes the classes which encapsulate complex logic(business flows, ...). The last ones rely on the low level classes. 
### What is an abstraction?
In software engineering and computer science, abstraction is a technique for arranging complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, suppressing the more complex details below the current level. Thus when working with abstractions you work on a high-level view of your system. You only care about the interactions you can do and not how to do them.
