# Angular Essentials Summary

## What is Angular?
Angular is a TypeScript-based open-source front-end framework developed by Google. It is used to build single-page applications (SPAs) with a reactive architecture and modular structure.

---
## Angular Components
### Creating a Component with the `@Component` Decorator
Components are the building blocks of an Angular application. They define the structure and behavior of a UI element.
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<h1>Hello, Angular!</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class ExampleComponent {}
```

---
## Component Communication
### Using `@Input` and `@Output`
Allows data to be passed from parent to child (`@Input`) and vice versa (`@Output`).
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ message }}</p>
             <button (click)="sendData()">Send Data</button>`
})
export class ChildComponent {
  @Input() message!: string; // Receive data from parent
  @Output() messageEvent = new EventEmitter<string>(); // Emit data to parent
  
  sendData() {
    this.messageEvent.emit('Hello from Child');
  }
}
```

#### Parent Component
```typescript
@Component({
  selector: 'app-parent',
  template: `<app-child [message]="parentMessage" (messageEvent)="receiveMessage($event)"></app-child>`
})
export class ParentComponent {
  parentMessage = 'Hello from Parent';
  receiveMessage(event: string) {
    console.log(event); // Logs data received from child
  }
}
```

### Using Signals (Alternative)
Angular Signals provide a reactive approach to state management.
```typescript
import { signal } from '@angular/core';

export class SignalComponent {
  message = signal('Hello from Angular Signals'); // Reactive variable
}
```

---
## Dynamic Data in Templates
### String Interpolation
Displays the value of a component property inside the template.
```html
<p>{{ title }}</p>
```

### Property Binding
Binds an element's property to a component property.
```html
<img [src]="imageUrl" />
```

### Event Binding
Executes a method when an event occurs.
```html
<button (click)="onClick()">Click Me</button>
```

### Two-Way Binding
Synchronizes input field value with a component property.
```html
<input [(ngModel)]="name" />
<p>Your name: {{ name }}</p>
```

---
## Built-in Directives
### `*ngIf` and Alternative `@if`
Conditionally displays elements based on a condition.
```html
<p *ngIf="isVisible">This is conditionally visible</p>
```
```html
@if (isVisible) { <p>This is conditionally visible</p> }
```

### `*ngFor` and Alternative `@for`
Iterates over an array and displays a list of elements.
```html
<li *ngFor="let item of items">{{ item }}</li>
```
```html
@for (item of items; track item.id) { <li>{{ item }}</li> }
```

---
## Dynamic CSS Classes and Styles
Dynamically apply classes and styles based on component properties.
```html
<p [class.highlight]="isHighlighted">Styled text</p> <!-- Applies 'highlight' class if isHighlighted is true -->
<p [ngStyle]="{'color': textColor}">Styled text</p> <!-- Applies dynamic color based on textColor property -->
```

---
## Content Projection (`ng-content`)
Allows child components to project content into a placeholder.
```html
<ng-content></ng-content>
```

### Usage
```html
<app-card>
  <p>Content inside projected slot</p>
</app-card>
```

---
## Built-in Pipes
Transform data in templates.
```html
<p>{{ today | date: 'short' }}</p> <!-- Formats date to a short format -->
<p>{{ amount | currency: 'USD' }}</p> <!-- Formats number as currency -->
```

---
## Services and Dependency Injection
### Creating a Service
A service is used to share logic across components.
```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExampleService {
  getData() {
    return 'Service Data';
  }
}
```

### Injecting via Constructor
Injects a service into a component via constructor.
```typescript
import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({ selector: 'app-root', template: `<p>{{ data }}</p>` })
export class AppComponent {
  data: string;

  constructor(private exampleService: ExampleService) {
    this.data = this.exampleService.getData();
  }
}
```

### Injecting via `inject()`
An alternative approach to inject dependencies.
```typescript
import { inject } from '@angular/core';

export class AnotherComponent {
  private exampleService = inject(ExampleService); // Inject service using inject()
  data = this.exampleService.getData();
}
```

---
This summary provides a quick reference for Angular essentials. Expand it as needed for further topics!

