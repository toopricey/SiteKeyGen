//"MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANnylWw2vLY4hUn9w06zQKbhKBfvjFUCsdFlb6TdQhxb9RXWXuI4t31c+o8fYOv/s8q1LGPga3DE1L/tHU4LENMCAwEAAQ==";

function parseKey(){
  var key = document.getElementById('txtKey').value;
  var signature = document.getElementById('sig').value;

  console.log("Trying to read in public key");
  var parsed_key = readPublicKey(key);

  document.getElementById("modulus").innerHTML = 
  "Digest: " + printDigest(key, signature) + "<br>";

  verifyKey(key, signature);
}

// Function to handle file input, verify signature
function verifyKey(key, signature) {
// Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Read in file information
    var files = document.getElementById('files').files;
    if(!files.length) {
      alert("Please Select a File");
      return;
    }

    var file = files[0];

    var reader = new FileReader();

    //Closure to capture key string
    reader.onload = function(e) {
      var contents = e.target.result;

      // Run the Exponent function
      document.getElementById("exponent").innerHTML = 
      "Expected: " + printExpected(data_string) + "<br>";

      // Run the verify Signature Function
      document.getElementById("verify").innerHTML = 
      "Verify: " + verifySignature(key, signature, data_string) + "<br>";
      }

    reader.readAsText(file);
  }

  else {
    alert('The File APIs are not fully supported by your browser.');
  }
}