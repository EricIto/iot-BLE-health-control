import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { BLE } from 'ionic-native';
import { Device } from '../device/device';
import { BluetoothSerial } from 'ionic-native';

/*
  Generated class for the Bluetooth page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})

export class Bluetooth {

  devicesList: Array<any>;
  isScanning: boolean;
  platform: any;

  constructor(public navCtrl: NavController) {
    this.devicesList = [];
    this.isScanning = false;
  }
  static get parameters() {
    return [[NavController]];
  }
  // goToOtherPage() : void{
  //   //push another page onto the history stack
  //   //causing the nav controller to animate the new page in
  //   this.navCtrl.push(Medico);
  // }

  startScanning() {
    console.log("Scanning Started");
    this.devicesList = [];
    this.isScanning = true;
    BluetoothSerial.discoverUnpaired().then(res => {
      console.log(res);
      for(var key in res) {
        if(this.emptyName(res[key].name)) {
          res[key].name = 'Sem nome';
        }
      }
      this.devicesList = res;
      this.isScanning = false;
    }).catch(res => {
      console.log('Error in fetching bluetooth data');
      this.isScanning = false;
    });
    // BLE.startScan([]).subscribe(device => {
    //   this.devicesList.push(device);
    //   console.log(device);
    // }, error => {
    //   console.log("error in fetching data");
    // });

    // setTimeout(() => {
    //   BLE.stopScan().then(() => {
    //     console.log("Scanning has stopped");
    //     console.log(this.devicesList);
    //     console.log(JSON.stringify(this.devicesList));
    //     this.isScanning = false;
    //   });
    // }, 9000);
  }

  connectToDevice(device) {
    console.log("Connect To Device");
    JSON.stringify(device);
    console.log(JSON.stringify(device));
    BluetoothSerial.connect(device.address).subscribe(res => {
      console.log(res);
      this.navCtrl.push(Device, {
        device: device,
        connected: true
      });
    }, error => {
      console.log("Error in connecting to device")
    });
    // BluetoothSerial.isConnected().then(res => {
    //   console.log(res);
    //   this.navCtrl.push(device, {
    //     device: device
    //   });
    // }).catch(res => {
    //   console.log('Error in connecting to device');
    //   console.log(res);
    // });
  }

  emptyName(name){
    if(name == null || name == undefined) {
      return true;
    } else {
      return false;
    }
  }
}