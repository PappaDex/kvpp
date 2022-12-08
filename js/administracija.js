oDbcitya.on('value', function (oOdgovorPosluzitelja)
{
 var oTablicaPjesme=$('#citytbody')
 oTablicaPjesme.empty();
 var RedBroj=1;
 // petlja kroz pojedinu vijest
 oOdgovorPosluzitelja.forEach(function (oCitySnapshot)
 {

 var oCityKey = oCitySnapshot.key; // ključ pojedine vijesti
 var oCity = oCitySnapshot.val(); // svojstva vijesti Javascript objekt obliku

 oTablicaPjesme.append('<tr><td id="'+RedBroj+'">'+RedBroj+'</td><td>'+oCity.city+'</td><td>'+oCity.country+'</td><td>'+oCity.lat+'</td><td>'+oCity.lng+'</td><td><button id="btnupdate" onClick="updatesong(\''+oCityKey+'\')" type="button" class="btn btn-dark">Update</button> </td><td><button type="button" id="btndel" onClick="deletesong(\''+oCityKey+'\')" class="btn btn-dark">Delete</button> </td></tr>');
RedBroj=RedBroj+1;
 });
});
function addsong() {
    var sCityName = $('#city').val();
    var sCountry= $('#country').val();
    var sLat= $('#lat').val();
    var sLng= $('#lng').val();

    // Kreiranje novoga ključa u bazi
    var sKey = firebase.database().ref().child('cities').push().key;
    var oCity =
    {
        name:sCityName,
        country:sCountry,
        longitude:sLng,
        latitude:sLat,
    
    
    };
    var oZapis = {};
 oZapis[sKey] = oCity;
 oDbcitya.update(oZapis)
}
   
function updatesong(oCityKey)
{
    var oCityRef = oDb.ref('cities/' + oCityKey); // odabrana vijest
    oCityRef.once('value', function(oOdgovorPosluzitelja)
    {
    var oCity = oOdgovorPosluzitelja.val();
    // Popunjavanje elemenata forme za uređivanje
    $('#songup').val(oCity.longitude);
    $('#autorup').val(oCity.name);
    $('#countryup').val(oCity.country);
    $('#latitudeup').val(oCity.latitude);
    // Dodavanje događaja na gumb Ažuriraj  
    $('#btnupdatesave').attr('onclick',
    'SaveEditedCity("'+oCityKey+'")');
    // Prikaži modal
    $('#exampleModal1').modal('show');
    });
    
}
function deletesong(oCityKey)
{
    var oCityRef = oDb.ref('cities/' + oCityKey);
    oCityRef.remove();
}
function SaveEditedCity(oCityKey)
{
var oCityRef = oDb.ref('cities/' + oCityKey);
var sCitylongitude = $('#songup').val();
var sCityName = $('#autorup').val();
var sCitycountry= $('#countryup').val();
var sCitylatitude = $('#latitudeup').val();
var oCity =
{
    name:sCityName,
    country:sCitycountry,
    latitude:sCitylatitude,
    longitude:sCitylongitude
};
oCityRef.update(oCity);
}

