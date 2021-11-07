import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.less']
})
export class LoadingOverlayComponent implements OnInit {
  @Input('message') message: string;
  @Input('borderRadius') borderRadius: string = '0em';

  constructor() { }

  ngOnInit(): void {
  }

}
