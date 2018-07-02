import {Component, OnInit} from '@angular/core';
import {AlertService} from '../service/alert.service';
import {AlertModel} from '../model/alert.model';
import {AlertType} from '../model/alert-type.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alerts: AlertModel[] = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: AlertModel) => {
      /*      if (!alert) {
              this.alerts = [];
              return;
            }*/
      if (alert) {
        this.alerts.push(alert);
        console.log(this.alerts);
      }

    });
  }

  removeAlert(alert: AlertModel) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: AlertModel) {
    if (!alert) {
      return;
    }

    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }

}
