function ad_user()
{
    
    player1_name=document.getElementById("player1_Name_input").value;
   
    player2_name=document.getElementById("player2_Name_input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.open("game_page.html");
}