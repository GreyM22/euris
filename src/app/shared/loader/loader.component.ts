import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProgressBarMode} from "@angular/material/progress-bar";

@Component({
  selector: 'euris-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {
  @Input() type: 'spinner' | 'progress' = 'progress';
  @Input() progressMode!: ProgressBarMode;

  constructor() { }

  ngOnInit(): void {
  }

}
