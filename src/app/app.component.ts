import { Component } from '@angular/core';
import {  faCaretDown, faCaretUp ,faBell,faUserCircle,faFlag} from '@fortawesome/free-solid-svg-icons';
declare const bootstrap: any; // Declare bootstrap
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ampleLogictaskproject';
  isShowStartbutton = true;
  isShowOffcanvas = false;
  offCanvasElemnt: any;
  progress = 0;
  interval: any;
  faCaretDown = faCaretDown;
  faBell=faBell;
  fauser=faUserCircle;
  faFlag=faFlag;
  toggleicon = faCaretDown
  faCaretUp = faCaretUp

  constructor(private toastr: ToastrService){

  }
  _doStart() {
    this.progress = 0
    this.isShowOffcanvas = true;
    this.isShowStartbutton = false;
    this.interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress = this.progress +2;
      }
      else {
        clearInterval(this.interval)
        this.isShowOffcanvas = false;
        this.toastr.success('Success!', 'Migration Applied Successfully!',{
          positionClass:'toast-bottom-right',
          timeOut: 10000,
        });
        this.isShowStartbutton = true;
        if (this.isShowOffcanvas) {
          this.offCanvasElemnt.show();
        } else {
          this.offCanvasElemnt.hide();
        }
      }
    }, 1000)
  }

  ngAfterViewInit() {
    let CanvasElemnt = document.getElementById('offcanvasBottom');
    this.offCanvasElemnt = new bootstrap.Offcanvas(CanvasElemnt);
  }

  toggle() {
    console.log(this.isShowOffcanvas, "ffffffffffff")
    this.toggleicon = this.toggleicon == faCaretDown ? faCaretUp : faCaretDown
    this.isShowOffcanvas = !this.isShowOffcanvas
    if (this.isShowOffcanvas) {
      this.offCanvasElemnt.show();
    } else {
      this.offCanvasElemnt.hide();
    }
  }
}
