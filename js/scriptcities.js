var sUrl = window.location.href ;
console.log(sUrl);
var oUrl = new URL(sUrl);
console.log(oUrl);
var sCityKey = oUrl.searchParams.get("city_key");
console.log(sCityKey);
var oCityRef = oDb.ref('cities/' + sCityKey);

oCityRef.once('value', function(oOdgovorPosluzitelja)
{
	var oCity = oOdgovorPosluzitelja.val();
	// Popunjavanje elemenata forme za uređivanje
	$('#city-name').prepend(oCity.name);
	$('#city-country').text(oCity.country);
	$('#city-latitude').html(oCity.latitude);
	$('#city-longitude').html(oCity.longitude);
         
});

