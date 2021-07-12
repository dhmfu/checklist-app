import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Checklist } from 'src/app/home/models/checklist.interface';

@Component({
  selector: 'app-checklist-ui',
  templateUrl: './checklist-ui.component.html',
  styleUrls: ['./checklist-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistUiComponent {

  @Input() checklist!: Checklist

}
