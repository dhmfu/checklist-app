# ChecklistApp

Check it out at https://dhmfu.github.io/checklist-app

## Conventions and decistions

The code of this project implements (or, at least, tries to) implement MVVM pattern on architecture level (see [below](#mvvm)) and 
smart-dumb components method (see [below](#components)) on components level

### MVVM
I see it like this:
1. Model - state of application, basically, NgRx implemented here
2. View - Components
3. ViewModel - facade services, their responsibility is gathering data from store to components and dispatching actions from components to store

### Components
Each component (to extent) has two parts - smart and dumb, naming convention for them is:
* *component-name*.component.ts -> *ComponentName*Component for smart components
* *component-name*-ui.component.ts -> *ComponentName*UiComponent for smart components

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.