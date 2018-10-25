

window.onload = $(function(){  

if(!(chrome.storage == null || chrome.storage == 'undefined')){

//Last saved information by the user displayed when window loaded
  chrome.storage.sync.get(['fName'], function(result) {
    var el2 = document.getElementById('fname');
    if(el2) {
      el2.value = result.fName;
    }
  });

  chrome.storage.sync.get(['lName'], function(result) {
    var el2 = document.getElementById('lname');
    if(el2) {
      el2.value = result.lName;
    }
  });

  chrome.storage.sync.get(['address'], function(result) {
    var el2 = document.getElementById('addy');
    if(el2) {
      el2.value = result.address;
    }
  });

  chrome.storage.sync.get(['cityName'], function(result) {
    var el2 = document.getElementById('city');
    if(el2) {
      el2.value = result.cityName;
    }
  });

  chrome.storage.sync.get(['stateName'], function(result) {
    var el2 = document.getElementById('states');
    if(el2) {
      el2.value = result.stateName;
    }
  });

  chrome.storage.sync.get(['phone'], function(result) {
    var el2 = document.getElementById('num');
    if(el2) {
      el2.value = result.phone;
    }
  });

  chrome.storage.sync.get(['zipCode'], function(result) {
    var el2 = document.getElementById('zip');
    if(el2) {
      el2.value = result.zipCode;
    }
  });

  chrome.storage.sync.get(['emailAdd'], function(result) {
    var el2 = document.getElementById('email');
    if(el2) {
      el2.value = result.emailAdd;
    }
  });

  chrome.storage.sync.get(['cardNo'], function(result) {
    var el2 = document.getElementById('card-num');
    if(el2) {
      el2.value = result.cardNo[0] + result.cardNo[1] + result.cardNo[2] + result.cardNo[3];

      for(i=0; i<12; i++) {
        el2.value += '*';
      }

    }
  });

  var el2 = document.getElementById('sec-code');
  if(el2) {
    el2.value = "***";
  }

  chrome.storage.sync.get(['expMonth'], function(result) {
    var el2 = document.getElementById('cc_expir_month');
    if(el2) {
      el2.value = result.expMonth;
    }
  });

  chrome.storage.sync.get(['expYear'], function(result) {
    var el2 = document.getElementById('cc_expir_year');
    if(el2) {
      el2.value = result.expYear;
    }
  });

  chrome.storage.sync.get(['donAmt'], function(result) {
    var el2 = document.getElementById('amount');
    if(el2) {
      el2.value = result.donAmt;
    }
  });

}
  // Function that stores all the text field values after the button click
  $('#Sbtn').click(function(){

    // Store the first name
    var first = $('#fname').val();
    chrome.storage.sync.set({fName: first},function(){alert('SAVED!');});

    // Store the last name
    var last = $('#lname').val();
    chrome.storage.sync.set({lName: last});

    // Store the address
    var addy = $('#addy').val();
    chrome.storage.sync.set({address: addy});

    // Store the city
    var city = $('#city').val();
    chrome.storage.sync.set({cityName: city});

    // Store the state
    var state = $('#states').val();
    chrome.storage.sync.set({stateName: state});

    // Store the zip code
    var zip = $('#zip').val();
    chrome.storage.sync.set({zipCode: zip});

    // Store the email
    var email = $('#email').val();
    chrome.storage.sync.set({emailAdd: email});

    // Store the phone number
    var no = $('#num').val();
    chrome.storage.sync.set({phone: no});

    // Store the Card Number
    var cardNum = $('#card-num').val();
    chrome.storage.sync.set({cardNo: cardNum});

    // Store the Security Code
    var secCode = $('#sec-code').val();
    chrome.storage.sync.set({securityCode: secCode});

    // Store the Expire month
    var exp = $('#cc_expir_month').val();
    chrome.storage.sync.set({expMonth: exp});

    // Store the Expire year
    var year = $('#cc_expir_year').val();
    chrome.storage.sync.set({expYear: year});

    // Store the Donation Amount
    var amt = $('#amount').val();
    chrome.storage.sync.set({donAmt: amt});


});
});
