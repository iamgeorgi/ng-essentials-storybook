import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // set does not work on inputs, they are readonly
  @Input() user!: User;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter<string>();
  newSelect = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  })

  // Will be get called whenever happens something to this component
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelect() {
    this.select.emit(this.user.id);
    // it's still event emitter and not a Signal
    // this.newSelect.emit('new output');
  }
}
