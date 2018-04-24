$("#submit-btn").on("click", function(event){
  event.preventDefault();

  let orgID = $("#orgID").val();
  let token = $("#access_token").val();
  let uid = $("#uid").val();
  let summaryURL = "https://api.v2.validic.com/organizations/" + orgID + "/users/" + uid + "/summaries?&start_date=2018-04-01&token=" + token;

  console.log (summaryURL);

    //calls the Validic API
    $.ajax({
      url: summaryURL,
      method: "GET"
    })
  
    .then(function(response) {

      //this works
      console.log(response);
      console.log(response.data.length);

      for (i = 0; i < response.data.length; i++) {

      let myJSON = JSON.stringify(response.data[i]);

      $("#jsonDiv").append(`<div></div>${myJSON}<p>`);
    }
  })
});