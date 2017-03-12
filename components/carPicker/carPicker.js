app.component('carPicker', {
  templateUrl: 'components/carPicker/carPicker.html',
  controller: 'CarPickerCtrl'
});

app.controller('CarPickerCtrl', function() {
  this.selectedMake = null;
  this.selectedModel = null;
});