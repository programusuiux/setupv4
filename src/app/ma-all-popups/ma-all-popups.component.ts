import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MaSelectReservationPopupComponent} from '../ma-select-reservation-popup/ma-select-reservation-popup.component';
@Component({
  selector: 'app-ma-all-popups',
  templateUrl: './ma-all-popups.component.html',
  styleUrls: ['./ma-all-popups.component.scss']
})
export class MaAllPopupsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openSelectReservation(): void {
    const dialogRef = this.dialog.open(MaSelectReservationPopupComponent, {
      panelClass: ['reserve-modal'],
      height: 'auto',
      width: '75vw'
    });
  }

  ngOnInit(): void {
  }

}
