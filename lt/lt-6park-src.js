var ImageBoxStyleArray = [];
ImageBoxStyleArray[0] = "";
ImageBoxStyleArray[1] = "style='border:2px solid brown;padding:12px;background-color:#CEF6EC'";
ImageBoxStyleArray[2] = "style='border:2px dotted brown;padding:6px;background-color:#CEF6EC'";
ImageBoxStyleArray[3] = "style='border:2px solid brown;padding:8px;background-color:#CEF6EC'";
ImageBoxStyleArray[4] = "style='border:2px dotted brown;padding:4px;background-color:#CEF6EC'";
ImageBoxStyleArray[5] = "style='border:2px dotted brown;padding:2px;background-color:#CCDCED'";
ImageBoxStyleArray[6] = "style='border:2px solid brown;padding:16px;background-color:#CEF6EC'";
ImageBoxStyleArray[7] = "style='border-top:4px dotted #E1A60A;border-bottom:4px dotted #E1A60A;padding:8px'";

var ImageStyleArray = [];
ImageStyleArray[0] = "";
ImageStyleArray[1] = "style='border:2px solid brown;padding:16px;background-color:#CEF6EC'";
ImageStyleArray[2] = "style='border-top:4px dotted #E1A60A;border-bottom:4px dotted #E1A60A;padding:8px'";
ImageStyleArray[3] = "style='border:2px dotted brown;padding:12px;background-color:#CEF6EC'";
ImageStyleArray[4] = "style='border:2px dotted brown;padding:6px;background-color:#CEF6EC'";
ImageStyleArray[5] = "style='border:2px dotted brown;padding:8px;background-color:#CEF6EC'";
ImageStyleArray[6] = "style='border:2px dotted brown;padding:4px;background-color:#CEF6EC'";
ImageStyleArray[7] = "style='border:2px dotted brown;padding:2px;background-color:#CCDCED'";

var BackgroundImageArray = [];
BackgroundImageArray[0] = "";
BackgroundImageArray[1] = "http://www.pixeden.com/media/k2/galleries/93/001-subtle-light-pattern-background-texture.jpg";   // sunday
BackgroundImageArray[2] = "http://www.pixeden.com/media/k2/galleries/131/002-subtle-light-pattern-background-texture.jpg";
BackgroundImageArray[3] = "http://www.pixeden.com/media/k2/galleries/165/003-subtle-light-pattern-background-texture-vol5.jpg";
BackgroundImageArray[4] = "http://www.pixeden.com/media/k2/galleries/112/003-subtle-light-pattern-background-texture.jpg";
BackgroundImageArray[5] = "http://www.pixeden.com/media/k2/galleries/131/001-subtle-light-pattern-background-texture.jpg";
BackgroundImageArray[6] = "http://www.pixeden.com/media/k2/galleries/112/001-subtle-light-pattern-background-texture.jpg";
BackgroundImageArray[7] = "http://www.pixeden.com/media/k2/galleries/93/004-subtle-light-pattern-background-texture.jpg";

var DividerArray = [];
DividerArray[0] = "<hr style='width:50%;text-align:center;' />";
DividerArray[1] = "<div style='padding:20px;width:100%;background:url(https://31.media.tumblr.com/3c187a00458aa1001125b264de14311f/tumblr_myzqv3k2J91rsbruio1_500.png) no-repeat center;' ></div>";
DividerArray[2] = "<div style='padding:20px;width:100%;background:url(https://24.media.tumblr.com/27c8554243deca65950f0868983df71d/tumblr_myzr1salPT1rsbruio1_400.gif) no-repeat center;' ></div>";
DividerArray[3] = "<div style='padding:20px;width:100%;background:url(https://31.media.tumblr.com/9f94b1854235e2d609e0ee679507463b/tumblr_myzqzj7l3x1rsbruio1_400.gif) no-repeat center;' ></div>";
DividerArray[4] = "<div style='padding:20px;width:100%;background:url(https://24.media.tumblr.com/3c187a00458aa1001125b264de14311f/tumblr_myzqv3k2J91rsbruio1_1280.png) no-repeat center;' ></div>";
DividerArray[5] = "<div style='padding:20px;width:100%;background:url(https://24.media.tumblr.com/079cf906d7c5b540a48fca0e7e6ed485/tumblr_myygubDmSo1rsbruio1_250.gif) no-repeat center;' ></div>";
DividerArray[6] = "<div style='padding:20px;width:100%;background:url(https://31.media.tumblr.com/78f286fd3f8a4fd6210c940a8b942fbf/tumblr_myyh1rpoT01rsbruio1_500.gif) no-repeat center;' ></div>";
DividerArray[7] = "<div style='padding:20px;width:100%;background:url(https://31.media.tumblr.com/51ee8f1d7c459a2124654486626f8dfb/tumblr_myzqyshfR31rsbruio1_400.gif) no-repeat center;' ></div>";

var NumberBracketLeft  = "【 ";
var NumberBracketRight = " 】";
var StrPictureUnit     = " 图";

var ImageTitleStyle  = "style='font-size:1.1em;font-weight:bold;'";
var ImageTitleStyleDeco   = "style='font-size:1.2em;font-weight:bold;text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;'";

var ImageCaptionStyle = "";
var ImageCaptionStyleDeco  = "style='font-size:1.2em;font-weight:bold;text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;'";

var CustomChannels = "0000";	// all
var AllowedTags = "";	// All
var DisallowedTags = "";	// None

var CustomContent  = "<b>资源</b>";
var CustomFooter = "";

//*****************************************************************************************//

var ViewModelImage = function () {
  this.imageUrl = "";
  this.imageTitle = "";
  this.imageCaption = "";
	this.imageEndingText = "";
}

//*****************************************************************************************//

function ParseDataSource(argDataSource, argVmGallery)
{
  return ParseGeneralDataSource(argDataSource, argVmGallery);
}	// function ParseDataSource()

//*****************************************************************************************//

function ParseGeneralDataSource(argDataSource, argVmGallery) 
{
  $("#divSourceName").html("ParseGeneralDataSource");
  var today = new Date();
  argVmGallery.galleryName = (today.getMonth()+1) + "-" + today.getDate();  
	argVmGallery.divider = "";
	argVmGallery.centered = true;
	argVmGallery.imageBoxStyle = "";
  $("#divLog").html("");
	argDataSource += "\n";
  argDataSource = argDataSource.replace(/\n/g, " ");
	argDataSource = argDataSource.replace(/【.*?】/g, "");
	argDataSource = argDataSource.replace(/<script .*?>.*?<\/script>/gi, "");
	argDataSource = argDataSource.replace(/<p><img /gi, "<img ");
	argDataSource = argDataSource.replace(/<img .*?src=(.*?)\s.*?>/gi, "\n$1\n");
	argDataSource = argDataSource.replace(/<img .*?src=(.*?)>/gi, "\n$1\n");
	argDataSource = argDataSource.replace(/\s(http.*?)\s/gi, "\n$1\n");
	argDataSource = argDataSource.replace(/(\.jpg|\.jpeg|\.gif|\.png)\s/gi, "$1\n");
	
	var useCustomterFooter = $('#checkboxUseFooter').prop('checked'); //.is(':checked');
	if (useCustomterFooter)
	{
	  argVmGallery.footer = CustomFooter;
	}
	argVmGallery.imageList = getGeneralImageArray(argDataSource);
}	// ParseGeneralDataSource()

//*****************************************************************************************//

function getGeneralImageArray(argDataSource) {
  if (argDataSource == "") { 
    return;
  }
	argDataSource = argDataSource.replace(/<img /gi, "\n<img ");
  var lineArray = argDataSource.split("\n");
  if (!$.isArray(lineArray)) {
    alert("lineArray is NOT an array");
    return;
  }
  $("#divLog").append("<li>getGeneralImageArray() -- lineArray is an array: length=" + lineArray.length + "</li>");

  var imageArray = [];
	var image = null;
	var caption = "";
  $.each(lineArray, function (lineNo, line) 
	{
    if (line == null || line == "") {
      return true;  // continue, false means break
    }
	
    var urls = line.match(/(http.*?\.(jpg|jpeg|gif|png))/);	
		if (urls != null && urls.length > 0){
			if (image != null && image.imageUrl != "") 
			{
			  image.imageCaption = caption;
				imageArray.push(image);
				caption = "";
			}
  	  image = new ViewModelImage();
			image.imageUrl = urls[1];
			// alert("image.imageUrl:" + image.imageUrl);
		}
		else
		{
		  caption += removeUnusedContent(line) + "<p>\n";
		}
  });
	if (image != null) 
	{
		image.imageCaption = caption;
		imageArray.push(image);
	}
	// alert("getGeneralImageArray() -- imageArray length=" + imageArray.length);
  return imageArray;
} // function getGeneralImageArray()

//*****************************************************************************************//
//*****************************************************************************************//

function buildImageTag(argImageUrl, argImageNo, argStyle) 
{
  // if (argImageNo==1) alert("argStyle: " + argStyle);
  var imageTag = "<img src='" + argImageUrl + "' " + argStyle + " /><br />\n"
  if (argImageNo > 0)
  {
    imageTag += NumberBracketLeft + argImageNo + NumberBracketRight;
    imageTag += "\n"
  }
  return imageTag;
}	// buildImageTag()

//*****************************************************************************************//

function removeUnusedContent(argString)
{
	argString = argString.replace(/\[.*?\]/, "");
	argString = argString.replace(/<a .*?>/, "");
	argString = argString.replace(/<\/a>/, "");
	argString = argString.replace(/<img .*?>/, "");
	return argString;
}	// removeUnusedContent

function removeHtml(argString)
{
	argString = argString.replace(/<.*?>/g, "");
	argString = argString.replace(/</g, "＜");
	argString = argString.replace(/>/g, "＞");	
	return argString;
}	// removeHtml

//*****************************************************************************************//

function filterContent(argContent, argKeepPattern, argRemovePattern) 
{
  if (argContent == "") { return ""; }

  var lineArray = argContent.split("\n");
  if (!$.isArray(lineArray)) {
    return argContent;
  }
  $("#divLog").append("<li>filterContent() # lines: " + lineArray.length + "</li>");

  var filteredContent = "";
	var patternToKeep = new RegExp(".*?(" + argKeepPattern + ").*");
	var patternToRemove = new RegExp(argRemovePattern);
  $.each(lineArray, function (lineNo, line) {
    if (line == null || line == "") { return true; } // continue, false means break
    if (argRemovePattern != "" && line.match(patternToRemove)) { return true; }
		if (argKeepPattern != "" && !line.match(patternToKeep)) { return true; }
		
    filteredContent += line.replace(patternToKeep, "$1") + "\n";
  });
  return filteredContent;
} // filterContent()

//*****************************************************************************************//