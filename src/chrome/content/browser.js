if (!com) var com = {};
if (!com.RealityRipple) com.RealityRipple = {};
com.RealityRipple.SettingSanity = function()
{
 var pub  = {};
 var priv = {};
 pub.ToggleImages = function()
 {
  if (document.getElementById("toggle-image-button").className == "toolbarbutton-1 chromeclass-toolbar-additional on")
   priv.DisableImages();
  else
   priv.EnableImages();
 };
 priv.EnableImages = function()
 {
  var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
  prefs.setIntPref("permissions.default.image", "1");
  priv.SetImage("on");
 };
 priv.DisableImages = function()
 {
  var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
  prefs.setIntPref("permissions.default.image", "2");
  priv.SetImage("off");
 };
 pub.ToggleJS = function()
 {
  if (document.getElementById("toggle-js-button").className == "toolbarbutton-1 chromeclass-toolbar-additional on")
   priv.DisableJS();
  else
   priv.EnableJS();
 }
 priv.EnableJS = function()
 {
  var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
  prefs.setBoolPref("javascript.enabled", true);
  priv.SetJS("on");
 };
 priv.DisableJS = function()
 {
  var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
  prefs.setBoolPref("javascript.enabled", false);
  priv.SetJS("off");
 };
 priv.init = function()
 {
  if (priv.checkImageState())
   priv.SetImage("on");
  else
   priv.SetImage("off");
  if (priv.checkJSState())
   priv.SetJS("on");
  else
   priv.SetJS("off");
 };
 priv.checkImageState = function()
 {
  var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
  var btnEnabled = 1;
  if (prefs.prefHasUserValue("permissions.default.image"))
   btnEnabled = prefs.getIntPref("permissions.default.image");
  return (btnEnabled == 1);
 };
 priv.SetImage = function(lVal)
 {
  if (document.getElementById("toggle-image-button") != null)
   document.getElementById("toggle-image-button").className = "toolbarbutton-1 chromeclass-toolbar-additional " + lVal;
 };
 priv.checkJSState = function()
 {
  var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
  var btnEnabled = true;
  if (prefs.prefHasUserValue("javascript.enabled"))
   btnEnabled = prefs.getBoolPref("javascript.enabled");
  return btnEnabled;
 };
 priv.SetJS = function(lVal)
 {
  if (document.getElementById("toggle-js-button") != null)
   document.getElementById("toggle-js-button").className = "toolbarbutton-1 chromeclass-toolbar-additional " + lVal;
 };
 window.addEventListener("load", priv.init, false);
 return pub;
}();
