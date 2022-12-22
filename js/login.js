oDbusera.on('value', function (oOdgovorPosluziteljaUser)
{
 oOdgovorPosluziteljaUser.forEach(function (oUserSnapshot)
 {
  oUserKey=oUserSnapshot.key;
  oUser=oUserSnapshot.val();
});
});

function provjera(){
    var oUserRef=oDb.ref('users/'+oUserKey);
    oUserRef.once('value',function(oOdgovorPosluziteljaUser)
    {
        var oUser=oOdgovorPosluziteljaUser.val();
    })
    var usermail=$('#idemail').val();
    var userpas=$('#idpass').val();

    if(oUser.email==usermail && oUser.password==userpas )
    {
        console.log("Uspjesan login"+oUser.email+"    "+oUser.password);
        if(oUser.adminaccess==true){
        window.location.href="index.html";
    }
    else{
        window.location.href="user.html";
    }
    }
    else{
        console.log("failed login"+oUser.email+"    "+oUser.password);
    }
}