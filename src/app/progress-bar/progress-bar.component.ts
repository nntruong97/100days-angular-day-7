import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string;
  @Input() progressColor: string;
  @Input() set progress(val:number){
    this._progress = val;
  };

  private _progress = 50;
  get progress(){
    return this._progress;
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('Onchanges', {
      progress: this.progress,
      progressColor: this.progressColor,
      backgroundColor: this.backgroundColor,
    });
  }

  ngOnInit() {
    console.log('OnInit', {
      progress: this.progress,
      progressColor: this.progressColor,
      backgroundColor: this.backgroundColor,
    });
  }
}
