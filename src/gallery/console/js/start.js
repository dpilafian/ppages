/////////////////////////////////////////////////
// PPAGES ~ www.centerkey.com/ppages           //
// GPL ~ Copyright (c) individual contributors //
/////////////////////////////////////////////////

// Application

$(function() {
   library.social.setup();
   library.ui.setup();
   library.form.setup();
   library.bubbleHelp.setup();
   gmc.ui.setupLinks();
   gmc.ui.setupActions();
   gmc.ui.setupStatusMsg();
   gmc.ui.autoFocus($('.login'));
   gmc.ui.configureMenuBarButtons();
   });
