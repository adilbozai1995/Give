
function loadPage() {
  window.open("https://donate.unicefusa.org/page/contribute/help-syrian-children-16078?utm_campaign=2017_eoy&utm_medium=cpc&utm_source=20171110_Google&utm_content=Sitelink&ms=cpc_dig_2017_eoy_20171110_Google_Sitelink&initialms=cpc_dig_2017_eoy_20171110_Google_Sitelink&gclid=Cj0KCQjwjN7YBRCOARIsAFCb937BKdNPqmS__xhLaaURQSYEaMOCgBuWmxCdYTfpErtuwzHW4E-SEggaAsC0EALw_wcB", "Google", "width=500,height=500");
}

// First name field on the webpage
chrome.storage.sync.get(['fName'], function(result) {
  var el2 = document.getElementById('firstname');
  if(el2) {
    el2.value = result.fName;
  }
});

// Last name field on the webpage
chrome.storage.sync.get(['lName'], function(result) {
  var el2 = document.getElementById('lastname');
  if(el2) {
    el2.value = result.lName;
  }
});

// Address field on the webpage
chrome.storage.sync.get(['address'], function(result) {
  var el2 = document.getElementById('addr1');
  if(el2) {
    el2.value = result.address;
  }
});

// City field on the webpage
chrome.storage.sync.get(['cityName'], function(result) {
  var el2 = document.getElementById('city');
  if(el2) {
    el2.value = result.cityName;
  }
});

// State field on the webpage
chrome.storage.sync.get(['stateName'], function(result) {
  var el2 = document.getElementById('state_cd');
  if(el2) {
    el2.value = result.stateName;
  }
});

// Zip field on the webpage
chrome.storage.sync.get(['zipCode'], function(result) {
  var el2 = document.getElementById('zip');
  if(el2) {
    el2.value = result.zipCode;
  }
});

// Email field on the webpage
chrome.storage.sync.get(['emailAdd'], function(result) {
  var el2 = document.getElementById('email');
  if(el2) {
    el2.value = result.emailAdd;
  }
});

// Phone number field on the webpage
chrome.storage.sync.get(['phone'], function(result) {
  var el2 = document.getElementById('phone');
  if(el2) {
    el2.value = result.phone;
  }
});

// Card Number field on the webpage
chrome.storage.sync.get(['cardNo'], function(result) {
  var el2 = document.getElementsByName('cc_number')[0];
  if(el2) {
    el2.value = result.cardNo;
  }
});

// Security Number field on the webpage
chrome.storage.sync.get(['securityCode'], function(result) {
  var el2 = document.getElementsByName('cc_cvv')[0];
  if(el2) {
    el2.value = result.securityCode;
  }
});

// Expiry month field on the webpage
chrome.storage.sync.get(['expMonth'], function(result) {
  var el2 = document.getElementById('cc_expir_month');
  if(el2) {
    el2.value = result.expMonth;
  }
});

// Expiry year field on the webpage
chrome.storage.sync.get(['expYear'], function(result) {
  var el2 = document.getElementById('cc_expir_year');
  if(el2) {
    el2.value = result.expYear;
  }
});

// Donation Amount field on the webpage
chrome.storage.sync.get(['donAmt'], function(result) {
  var el2 = document.getElementById('amt_other_text');
  if(el2) {
    el2.value = result.donAmt;
  }
});


var el = document.getElementsByName("placeYourOrder1")[0];
var el1 = document.getElementsByName("placeYourOrder1")[1];
var el2 = document.getElementsByName("placeYourOrder1")[2];
var el3 = document.getElementsByName("placeYourOrder1")[3];

if(el || el1 || el2 || el3) {
  el.addEventListener("click", loadPage);
  el1.addEventListener("click", loadPage);
  el2.addEventListener("click", loadPage);
  el3.addEventListener("click", loadPage);
}

// Click a submit button automatically
$(document).ready(function(){
    $("#processbutton").trigger('click');
});
