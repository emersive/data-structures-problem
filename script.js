var users_joined = [];
var chatrooms = {
	west_side : [],
	east_side : []
};

window.new_user_joined = function(name) {
	users_joined.unshift(name);
	console.log(users_joined);
};


//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {

	console.log(chatrooms.west_side.length);

	if(chatrooms.west_side.length < chatrooms.east_side.length) {
		var person = users_joined.pop();
		chatrooms.west_side.push(person);
	}
   
	else if (chatrooms.west_side.length > chatrooms.east_side.length){
		var person = users_joined.pop();
		chatrooms.east_side.push(person);
	}

	else {
		var person = users_joined.pop();
		chatrooms.east_side.push(person);	
	} 

	// $(".users").prepend('<p><button type="button" class="btn btn-warning btn-xs">'+users_joined.pop()+'</button></p>'); 
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
    console.log("assigning users to rooms");
};