function skillMember()
{
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById("skillMember").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "skillMember.php?member="+member+"&skill="+skill, true);
    xhttp.send();
}