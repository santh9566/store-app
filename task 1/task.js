window.addEventListener('load',()=>{
    const params = (new URL(document.location)).searchParams;
  const name = params.get('store-name');
  const location = params.get('store-location');
  const contact  = params.get('store-contact');
  const alternate = params.get('store-alternate');
  const address = params.get('store-address');
  const pincode = params.get('pincode');

  document.getElementById('result-name').innerHTML = name;
  document.getElementById('result-location').innerHTML = location;
  document.getElementById('result-contact').innerHTML = contact;
  document.getElementById('result-alternate').innerHTML = alternate;
  document.getElementById('result-address').innerHTML = address;
  document.getElementById('result-pincode').innerHTML = pincode;




})