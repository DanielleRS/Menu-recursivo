function buildList(parent, items) {
	if (!items || !items.length) { return; }

	for (var i = 0; i < items.length; i++) {

		li = $("<li></li>").addClass('treeview');
		aLi = $('<a></a>').attr('href', items[i].actionLink);

		if (items[i].openInNewWindow) {
			aLi = aLi.attr('target', '_blank');
		} else {
			aLi = aLi.attr('target', '_self');
		}

		iLi = $('<i></i>').addClass(items[i].visualClass).appendTo(aLi);
		spanLi = $('<span>' + items[i].label + '</span>').addClass('span-sidebar-menu');
		spanLi.appendTo(aLi);

		aLi.appendTo(li);
		if (items[i].subItems && items[i].subItems.length) {
			spanExpand = $('<span></span>').addClass('pull-right-container').appendTo(aLi);
			iExpand = $('<i></i>').addClass('fa fa-angle-left pull-right').appendTo(aLi);
			liUl = $('<ul></ul>').addClass('treeview-menu').appendTo(li);
		}
		
		li.appendTo(parent);
		
		buildList(liUl, items[i].subItems);
	}
}

buildList($('.sidebar-menu'), itemmenu);