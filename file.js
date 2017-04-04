
		
		var userNames = ["harry potter", "donald duck", "shrek", "supercoder"];
		var fields = ["First Name", "Last Name", "Phone Number"];
		var buttons = ["Cracked Tub", "Chipped Tub", "Spider Webbing", "Coca-Cola"]
		
		buttons.pop();
		userNames.unshift("bob cousey")
		
		//init() function
		
		function init()
		
		{
		
		var myButton = document.getElementById("btnSubmit");
		
		myButton.onclick = registerName;
		
		}
		
		
		//assign init() function to onload event
		
		onload = init;
		
		
		
		/********************************************/
		
		
		
		//registerName() function: it executes when user clicks the button
		
		function registerName()
		
		{
		
		//set up main vars: Username entered by user,
		
		//a message string to communicate with the user,
		
		//a reference to the paragraph used to display the message,
		
		//and a boolean var (true/false) used as flag:
		
		//if the registration is successful, this is set to true,
		
		//if registration fails, this is set to false. It's initialized as false.
		
		//Notice how you chain getElementById(), value, and toLowerCase
		
		//to store the value entered by the user in lowercase
		
		var newName = document.getElementById("txtName").value.toLowerCase();
		
		var message = "";
		
		var result = document.getElementById("result");
		
		var success = false;
		
		//If the user clicks the button but the inputbox is empty
		
		//we alert the user and stop further program execution:
		
		if (newName == "")
		
		{
		
		alert("Please, enter a Username");
		
		return false;
		
		}
		
		//we loop over each Username stored in the array
		
		//to make sure the Username is not already in existence
		
		for (var i = 0; i < userNames.length; i++)
		
		{
		
		//if we find a Username equal to the newly entered name,
		
		//it means the Username already exists and we can't
		
		//proceed with registration
		
		if (userNames[i] == newName)
		
		{
		
		message = "Sorry, the Username " + userNames[i] + " already exists.  Try again";
		
		result.innerHTML = message;
		
		//set the success flag to false so the rest of the program knows
		
		//that registration failed
		
		success = false;
		
		//stop further program execution
		
		return false;
		
		}
		
		//else - if the Username entered by the user
		
		//is not already stored in the application, register new user:
		
		else
		
		{
		
		message = "Great, you've successfully registered with us as " + newName;
		
		result.innerHTML = message;
		
		//set the success flag to true, so the program knows
		
		//the new Username can be added
		
		success = true;
		
		}
		
		}
		
		//Now you're out of the loop
		
		//if registration was successful (success flag is true),
		
		//add new Username to the array with push()
		
		if (success)
		
		{
		
		userNames.push(newName);
		
		}
		
		//display Usernames sorted alphabetically on a new line
		
		result.innerHTML += "<br />" + userNames.sort();
		
		}
		