function toggle_menu() {
	var menu = document.getElementById("digi-nav");
	var width = "";
	var menustyle = window.getComputedStyle(menu, null);

	if (menustyle)
		width = menustyle.getPropertyValue("width");
	else
		width = "170px";

	if (menu.style.left != "0px")
		menu.style.left = "0px";
	else
		menu.style.left = "-" + width;
}

