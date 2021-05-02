"use strict";

//IP @ in CIDR format
let givenIpAddress = [126, 12, 39, -245];
let givenSubnetMask = 30;

//Checking byte format => integer 0 to 256
function checkByteFormat(byte) {
  let result = 1;
  if (byte < 0 || byte > 255) {
    result = 0;
  }
  return result;
}

//Checking IP address format => 4 bytes
function checkIpAddressFormat(address) {
  let result = 1;
  for (let i = 0; i < address.length; i++) {
    if (address[i] < 0 || address[i] > 255) {
      result = 0;
      console.log("The format of the IP address is incorrect...");
      break;
    }
  }
  return result;
}

//Checking mask format in CIDR notation => integer 0 to 32
function checkCIDRMask(mask) {
  let result = 1;
  if (mask < 0 || mask > 32) {
    result = 0;
    console.log("The format of the mask is incorrect...");
  }
  return result;
}

if (checkIpAddressFormat(givenIpAddress) && checkCIDRMask(givenSubnetMask)) {
  console.log("Everyhting seems fine. Processing...");
} else {
  process.exitCode = -1;
  console.log("Something went wrong! Exiting...");
}
