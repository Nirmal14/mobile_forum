var body = document.querySelector('body');
/*create "nav" tag having brandname, menu button(home link, login link, and other)*/
var nav = document.createElement('nav');
nav.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");

var brandName_aTag = document.createElement('a');
brandName_aTag.setAttribute("class", "navbar-brand");
brandName_aTag.href = "homepage.html";
brandName_aTag.textContent="Forum";
nav.appendChild(brandName_aTag);

var brandName_btn = document.createElement('button');
brandName_btn.setAttribute("class", "navbar-toggler");
brandName_btn.type = "button";
brandName_btn.setAttribute('data-toggle', "collapse");
brandName_btn.setAttribute('data-target', "#navbarSupportedContent");
brandName_btn.setAttribute('aria-controls', "navbarSupportedContent");
brandName_btn.setAttribute('aria-expanded', "false");
brandName_btn.setAttribute('aria-label', "Toggle navigation");
	var brandName_span = document.createElement('span');
	brandName_span.setAttribute('class', "navbar-toggler-icon");
	brandName_btn.appendChild(brandName_span);
nav.appendChild(brandName_btn);

var link_div = document.createElement('div');
link_div.setAttribute('class', "collapse navbar-collapse navbar-expand"); 
link_div.id = "navbarSupportedContent";
	
	var link_ul = document.createElement('ul');
	link_ul.setAttribute('class', "navbar-nav mr-auto");
			
		var home_list = document.createElement('li');
		home_list.id="home";
		home_list.setAttribute('class', "nav-item");
			var home_aTag = document.createElement('a');
			home_aTag.setAttribute('class', "nav-link"); 
			home_aTag.href="homepage.html";
			home_aTag.textContent="Home";
				var home_span = document.createElement('span');
				home_span.setAttribute('class', "sr-only");
				home_span.textContent="(current)";
				home_aTag.appendChild(home_span);
			home_list.appendChild(home_aTag);
		link_ul.appendChild(home_list);

		var link_list1 = document.createElement('li');
		link_list1.id="log_reg";
		link_list1.setAttribute('class', "nav-item");
			var link_aTag = document.createElement('a');
			link_aTag.setAttribute('class', "nav-link");
			link_aTag.href="login.html";
			link_aTag.textContent='LOGIN/REGISTER';
			link_list1.appendChild(link_aTag);
		link_ul.appendChild(link_list1);

		var dropdown_list = document.createElement('li');
		dropdown_list.setAttribute('class', "nav-item dropdown");
			var dropdown_aTag = document.createElement('a');
			dropdown_aTag.setAttribute('class', "nav-link dropdown-toggle"); 
			dropdown_aTag.href="#"; 
			dropdown_aTag.id="navbarDropdown"; 
			dropdown_aTag.setAttribute('role', "button");
			dropdown_aTag.setAttribute('data-toggle', "dropdown");
			dropdown_aTag.setAttribute('aria-haspopup', "true");
			dropdown_aTag.setAttribute('aria-expanded', "false");
			dropdown_aTag.textContent="Dropdown";
			dropdown_list.appendChild(dropdown_aTag);

			var dropdown_div = document.createElement('div');
			dropdown_div.setAttribute('class', "dropdown-menu");
			dropdown_div.setAttribute('aria-labelledby', "navbarDropdown");
				var dropdown_aTag1 = document.createElement('a');
				dropdown_aTag1.setAttribute('class', "dropdown-item");
				dropdown_aTag1.href="#";
				dropdown_aTag1.textContent="Action";
				dropdown_div.appendChild(dropdown_aTag1);

				var dropdown_aTag2 = document.createElement('a');
				dropdown_aTag2.setAttribute('class', "dropdown-item");
				dropdown_aTag2.href="#";
				dropdown_aTag2.textContent="Another Action";
				dropdown_div.appendChild(dropdown_aTag2);
			dropdown_list.appendChild(dropdown_div);
		link_ul.appendChild(dropdown_list);
	link_div.appendChild(link_ul);
nav.appendChild(link_div);
body.insertBefore(nav, body.childNodes[0]);

/*search 'div' with search bar and submit button*/
var search_div = document.createElement('div');
search_div.setAttribute("class", "container");
	var search_row = document.createElement('div');
	search_row.setAttribute("class", "row");
		var search_col1 = document.createElement('div');
		search_col1.setAttribute("class","col-8");
			var search_input = document.createElement('input');
			search_input.setAttribute("class","form-control");
			search_col1.appendChild(search_input);
		search_row.appendChild(search_col1);

		var search_col2 = document.createElement('div');
		search_col2.setAttribute("class","col-3");
			var search_button = document.createElement('button');
			search_button.setAttribute("class", "btn btn-outline-success");
			search_button.textContent="Search";
			search_col2.appendChild(search_button);
		search_row.appendChild(search_col2);
	search_div.appendChild(search_row);
body.insertBefore(search_div, body.childNodes[1]);

/*question tag .... 'div'*/
var nav_div = document.createElement('div');
nav_div.setAttribute("class", "navbar-expand navbar-light bg-light");
	var nav_ul = document.createElement('ul');
	nav_ul.setAttribute("class", "navbar-nav mr-auto");
		var nav_link_div = document.createElement('div');
		nav_link_div.setAttribute("class", "container");
			var nav_link_row = document.createElement('div');
			nav_link_row.setAttribute("class", "row");
			
			var nav_links = ["Questions", "Tags", "Users", "Ask"];
			var i;
			for(i=0; i<4; ++i)
			{
				var nav_link_col = document.createElement('div');
				nav_link_col.setAttribute("class", "col");
					var nav_link_list = document.createElement('li');
					nav_link_list.id=nav_links[i];
					nav_link_list.setAttribute("class", "nav-item");
						var nav_link_aTag = document.createElement('a');
						nav_link_aTag.setAttribute("class", "nav-link");
						nav_link_aTag.setAttribute("href", nav_links[i]+".html");
						nav_link_aTag.textContent=nav_links[i];
						nav_link_list.appendChild(nav_link_aTag);
					nav_link_col.appendChild(nav_link_list);
				nav_link_row.appendChild(nav_link_col);
			}
			nav_link_div.appendChild(nav_link_row);
		nav_ul.appendChild(nav_link_div);
	nav_div.appendChild(nav_ul);
body.insertBefore(nav_div, body.childNodes[2	]);