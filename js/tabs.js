var tabItems = document.querySelectorAll('.service-tab');
var tabContentItems = document.querySelectorAll('.service-item');

function selectItem(evt) {
  removeShow();
}

function removeShow() {
  tabContentitems.forEach(item => item.classList.remove('show'))
}

tabItems.forEach(item => item.addEventListener('click', selectItem));



// var serviceList = document.getElementsByClassName("service-item");
// var tabLinks = document.getElementsByClassName("service-tab");
//
// function openService(evt, serviceType) {
//   for (i = 0; i < serviceList.length; i++) {
//     serviceList[i].style.display = "none";
//   }
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" service-tab-active", "");
//   }
//   document.getElementById(serviceType).style.display = "block";
//   evt.currentTarget.className += " service-tab-active";
// }
//
// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
