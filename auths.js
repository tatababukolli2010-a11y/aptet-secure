// AP TET Security Guard
(function(){
  let user = localStorage.getItem("ap_tet_user");
  let time = localStorage.getItem("ap_tet_time");
  // 7 రోజుల తర్వాత ఆటో Logout
  let isExpired =!time || (Date.now() - parseInt(time) > 7*24*60*60*1000);

  if(!user || isExpired || typeof USERS === 'undefined' ||!USERS[user] || USERS[user].active!== true){
    localStorage.clear();
    alert("దయచేసి మళ్ళీ లాగిన్ అవ్వండి");
    window.location.href = "index.html";
  }
})();
