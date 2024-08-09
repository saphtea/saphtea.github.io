function openTab(evt, tabId) {
    // Hide the contents of any previously selected tab
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active-content')
    }

    // Clear out any tab as having the active-tab styling
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab')
    }

    // Show the selected tab content and mark it as active
    document.getElementById(tabId).classList.remove("inactive-content")
    document.getElementById(tabId).classList.add("active-content")
    evt.currentTarget.classList.add('active-tab')
}