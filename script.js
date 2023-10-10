const button = document.querySelector('[type="submit"]');

button.addEventListener('click',getFormvalue);


function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	const fname = document.querySelector('[name="fname"]').value;
	const lname = document.querySelector('[name="lname"]').value;

	alert(fname+" "+lname);
}
