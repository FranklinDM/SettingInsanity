var gSanePane =
{
 showImageExceptions: function ()
 {
  var prefBundle = document.getElementById("saneBundle");
  var params = 
  {
   blockVisible: true,
   sessionVisible: false,
   allowVisible: true,
   prefilledHost: "",
   permissionType: "image"
  };
  params.windowTitle = prefBundle.getString("imagepermissionstitle");
  params.introText = prefBundle.getString("imagepermissionstext");
  document.documentElement.openWindow("Browser:Permissions",
                                      "chrome://browser/content/preferences/permissions.xul",
                                      "resizable", params);
 },
 showAdvancedJS: function ()
 {
  document.documentElement.openSubDialog("chrome://settingsanity/content/preferences/advanced-scripts.xul",
                                         "", null);  
 }
};
