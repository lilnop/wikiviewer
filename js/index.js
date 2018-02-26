search.onclick = function(){  
 let userSearch = document.querySelector("#userSearch").value;
  $.ajax( {
    method:"GET",
    url: "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + userSearch + "&format=json&callback?",
    async:false,
    dataType: 'json',
    success: function(data) {
      $("#results").html("");
      for(let i = 0;i < data[1].length;i++){
        $("#results").append("<li><a target='_blank' href=" +data[3][i]+"><h1><strong>" +data[1][i]+"</strong></h1></a><p class='lead'>"+data[2][i]+"</p></li>");
       $("#userSearch").focus(function(){
          $("li").html("");
         $("#userSearch").val("");
          });
    }},
    error:function(){
      alert("Error getting results");
    }
} );
};
$("#userSearch").keypress(function(e){
    if (e.which == 13){
    search.onclick();
  }
  })