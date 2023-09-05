var resumeData = {
    "name": "Manoj",
    "education": "BE.Mechanical engineering",
    "gender" : "Male",
    "languages known" : [
        "Tamil",
        "English",
    ],
    "city": "Coimbatore",
    "contact": "*******888",
    "email": "*****@gmail.com",
    "skills": [
      "Full stack development",
      "AWS",
      "React js",
      "Node js",
      "Mongo DB",
      "Data Structure Algorithm"
    ]
  };

  //console.log(resumeData);
  
//   // Using "for loop"
//   console.log("Using for loop:");
     for(var i = 0; i< resumeData.length; i++){
      var object = json[i];

      console.log(object.name);
     }

//   
  
//   // Using "for in" loop
//   console.log("Using for...in loop:");
//   for (var key in resumeData) {
//     console.log(key + ": " + resumeData[key]);
//   }
//   console.log("");
  
//   // Using "for of" loop (only for skills array)
//   console.log("Using for...of loop:");
//   for (var skill of resumeData.skills) {
//     console.log(skill);
//   }
//   console.log("");
  
//   // Using "for Each loop" (only for skills array)
//   console.log("Using forEach loop:");
//   resumeData.skills.forEach(function(skill) {
//     console.log(skill);
//   });
  