oDbcitya.on('value', function (oOdgovorPosluzitelja)
{
    var oSelectFrom=$('#select');
    var oSelectTo=$('#selectto')
 var oTablicaPjesme=$('#citytbody')
 oTablicaPjesme.empty();
 var RedBroj=1;

 oOdgovorPosluzitelja.forEach(function (oCitySnapshot)
 {

 var oCityKey = oCitySnapshot.key; 
 var oCity = oCitySnapshot.val();

 oTablicaPjesme.append('<tr><td id="'+RedBroj+'">'+RedBroj+'</td><td>'+oCity.city+'</td><td>'+oCity.country+'</td><td>'+oCity.lat+'</td><td>'+oCity.lng+'</td><td><button id="btnupdate" onClick="updatesong(\''+oCityKey+'\')" type="button" class="btn btn-dark">Update</button> </td><td><button type="button" id="btndel" onClick="deletesong(\''+oCityKey+'\')" class="btn btn-dark">Delete</button> </td></tr>');
 oSelectFrom.append('<option value="'+RedBroj+'">'+oCity.city+'</option')
 oSelectTo.append('<option value="'+RedBroj+'">'+oCity.city+'</option')

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
        city:sCityName,
        country:sCountry,
        lat:sLat,
        lng:sLng,
    
    
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
    $('#lat2').val(oCity.lat);
    $('#city2').val(oCity.city);
    $('#country2').val(oCity.country);
    $('#lng2').val(oCity.lng);
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
var sCitylongitude = $('#lng2').val();
var sCityName = $('#city2').val();
var sCitycountry= $('#country2').val();
var sCitylatitude = $('#lat2').val();
var oCity =
{
    city:sCityName,
    country:sCitycountry,
    lat:sCitylatitude,
    lng:sCitylongitude
};
oCityRef.update(oCity);
}

