import { Component,TemplateRef, OnInit } from '@angular/core';
import {ToastService} from '../../services/toast';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts-container.component.html',
  styleUrls: ['./toasts-container.component.css'],
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastsContainerComponent implements OnInit {

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {
  }
  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}
