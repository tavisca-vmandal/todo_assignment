function showTodoList()
{
	document.getElementById("user-content").style.display="none";
	document.getElementById("contact-content").style.display="none";
	document.getElementById("about-content").style.display="none";
	document.getElementById("todo-content").style.display="block";
	//document.getElementById("todo-content").style.zindex=1;
}

function showUser() {
	document.getElementById("todo-content").style.display="none";
	document.getElementById("contact-content").style.display="none";
	document.getElementById("about-content").style.display="none";
	document.getElementById("user-content").style.display="block";
	//document.getElementById("user-content").style.zindex=1;
}
function showContact() {
	document.getElementById("user-content").style.display="none";
	document.getElementById("todo-content").style.display="none";
	document.getElementById("about-content").style.display="none";
	document.getElementById("contact-content").style.display="block";
	//document.getElementById("contact-content").style.zindex=1;
}
function showAbout() {
	document.getElementById("user-content").style.display="none";
	document.getElementById("contact-content").style.display="none";
	document.getElementById("todo-content").style.display="none";
	document.getElementById("about-content").style.display="block";
	//document.getElementById("about-content").style.zindex=1;
}

function addToList(){
	var item=document.getElementById("search-item").value;
	var table=document.getElementById("todo-table");
	var row=table.insertRow(-1);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var pTag=document.createElement("p");
	pTag.innerHTML=item;
	var inputBox=document.createElement("input");
	inputBox.setAttribute('type',"text");
	inputBox.style.display="none";
	cell1.appendChild(pTag);
	cell1.appendChild(inputBox);

	var edit=document.createElement("button");
	edit.style.fontSize="24px";
	edit.style.marginRight = "4px";
	var editIcon=document.createElement("i");
	editIcon.setAttribute('class', "fa fa-edit");
	edit.setAttribute('onclick',"editData(this)")
	edit.appendChild(editIcon);

	var del=document.createElement("button");
	del.style.fontSize="24px";
	var delIcon=document.createElement("i");
	delIcon.setAttribute('class', "fa fa-trash-o");
	del.setAttribute('onclick',"deleteRow(this)");
	del.appendChild(delIcon);

	cell2.appendChild(edit);
	cell2.appendChild(del);

	var listItem=document.getElementById("listItems");
	var optionTag=document.createElement("option");
	optionTag.setAttribute('value',"pTag.innerHTML");
	listItem.appendChild(optionTag);

}

function deleteRow(row) {
	row.parentElement.parentElement.remove();
}

function editData(element){

	var child=element.parentElement.previousElementSibling.childNodes;
	child[0].style.display="none";
	child[1].style.display="block";
	child[1].value = child[0].innerHTML;
	toggleToSave(element);

}
function toggleToSave(element)
{
	element.childNodes[0].setAttribute('class', "fa fa-save");
	element.setAttribute('onclick',"saveData(this)");

}

function toggleToEdit(element){
	element.childNodes[0].setAttribute('class', "fa fa-edit");
	element.setAttribute('onclick',"editData(this)");	
}

function saveData(element){
	var child=element.parentElement.previousElementSibling.childNodes;
	child[1].style.display="none";
	
	child[0].innerHTML=child[1].value;
	child[0].style.display="block";
	toggleToEdit(element);

}
