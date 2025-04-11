	function verifyAge(){
		var inputAge = document.getElementById('age').value;

		if (inputAge < 18) {
			window.alert('Not Eligible To Vote!');
		}

		else {
			window.alert('Welcome, You Are Eligible To Vote!');
		}
	}