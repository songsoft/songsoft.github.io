// http://api.jquery.com/jQuery.get/
//  the request can not successfully retrieve data from a different domain, subdomain, or protocol.

var ImageStyleArray = [];
ImageStyleArray[0] = "";
ImageStyleArray[1] = "style='border-style:solid;padding:16px;background-color:#DCDCED'";
ImageStyleArray[2] = "style='border-top:4px double #E1A60A;border-bottom:4px double #E1A60A;padding:8px'";
ImageStyleArray[3] = "style='border-style:solid;padding:12px;background-color:#DCDCED'";
ImageStyleArray[4] = "style='border-style:double;padding:6px;background-color:#DCDCED'";
ImageStyleArray[5] = "style='border-style:solid;padding:8px;background-color:#DCDCED'";
ImageStyleArray[6] = "style='border-style:double;padding:4px;background-color:#DCDCED'";
ImageStyleArray[7] = "style='border-style:dotted;padding:2px;background-color:#CCDCED'";

var NumberBracketLeft = "【 ";
var NumberBracketRight = " 】";
var StrPictureUnit = " 图";

var ViewModelImage = function () {
  this.imageUrl = "";
  this.imageTitle = "";
  this.imageCaption = "";
}

//*****************************************************************************************//

function ParseDataSource(argDataSource, argVmGallery)
{
  if (argDataSource.indexOf('<textarea name="gallery-data" style="display:none;">') > 0)
  {
    parseNeteaseAlbum_WothJsonData_2013(argDataSource, argVmGallery);
  }
  else if (argDataSource.indexOf('<textarea class="hidden" id="photoList">') > 0)
  {
	  parseNetease_TextAreaPhotoList(argDataSource, argVmGallery);
  }
}	// function ParseDataSource()

//*****************************************************************************************//



//*****************************************************************************************//
//*****************************************************************************************//

function parseNeteaseAlbum_WothJsonData_2013(argDataSource, argVmGallery) {
  var posInfoKey = argDataSource.indexOf("\"info\":");
  if (posInfoKey > 0) {
    argDataSource = "{ " + argDataSource.substring(posInfoKey);
  }
  var postTextareEnd = argDataSource.indexOf("</textarea>");
  if (postTextareEnd > 0) {
    argDataSource = argDataSource.substring(0, postTextareEnd - 1);
  }

  var jsonGallerySet = $.parseJSON(argDataSource);
  //.fail(function () {
  //  alert("$.parseJSON(argDataSource) failed");
  //})
  //.always(function () {
  //  alert("$.parseJSON(argDataSource) done");
  //});

  if (jsonGallerySet == null) {
    alert("parseNeteaseAlbum_WothJsonData_2013(argDataSource): jsonGallerySet is null");
    return;
  }
  if (typeof jsonGallerySet != "object") {
    alert("parseNeteaseAlbum_WothJsonData_2013(argDataSource): jsonGallerySet is not an object");
    return;
  }

  argVmGallery.galleryName = jsonGallerySet.info.setname;
  argVmGallery.galleryDesc = jsonGallerySet.info.prevue;
  argVmGallery.galleryChannelID = jsonGallerySet.info.channelid;

  if (window.location.href.indexOf("6park-main.html") < 0 && window.location.href.indexOf(argVmGallery.galleryChannelID) <= 0) {
    return "You can not process this gallery.";
  }

  argVmGallery.imageList = getImageArray_Netease2013(jsonGallerySet.list);
} // parseNeteaseAlbum_WothJsonData_2013

//*---------------------------------------------------------------------------------------*//

function getImageArray_Netease2013(argImageList) {
  // alert("$.type(argImageList): " + $.type(argImageList));	// array
  if (typeof argImageList != "object") {
    alert("getImageArray_Netease2013(argImageList): argImageList is not an object:  " + argImageList);
    return;
  }

  if (!$.isArray(argImageList)) {
    alert("jsonImageList is NOT an array");
    return;
  }
  $("#divLog").append("<li>jsonImageList is an array: length=" + argImageList.length + "</li>");

  var imageArray = [];
  $.each(argImageList, function (i, item) {
    if (item == null || item.img == "") {
      return true;  // continue, false means break
    }
    // $("#divPreview").append("<li>" + i + ": " + item.id + item.img + "</li>");
    // $("#divPreview").append(buildImageTag(item.img) + "<p>");
    var image = new ViewModelImage();
    image.imageUrl = item.img;
    image.imageTitle = removeUnusedCharacters(item.title);
    image.imageCaption = removeUnusedCharacters(item.note);
    imageArray.push(image);
  });
  return imageArray;
} // function getImageArray_Netease2013(argImageList)

//*****************************************************************************************//

function parseNetease_TextAreaPhotoList(argDataSource, argVmGallery) {
  // alert("parseNetease_TextAreaPhotoList");
	argVmGallery.galleryName = getTagContent(argDataSource, '<title>', '</title>');
	// argVmGallery.galleryDesc = getTagContent(argDataSource, '.*<div class="c2 clearfix"><h4>', '</h4>.*');
	argVmGallery.galleryDesc = getSubContent(argDataSource, '<div class="c2 clearfix"><h4>', false, '</h4>', false);
  var posInfoKey = argDataSource.indexOf('<textarea class="hidden" id="photoList">');
  if (posInfoKey > 0) {
    argDataSource = argDataSource.substring(posInfoKey);
  }
  var postTextareEnd = argDataSource.indexOf("</textarea>");
  if (postTextareEnd > 0) {
    argDataSource = argDataSource.substring(0, postTextareEnd - 1);
  }
	
	var channelId = argDataSource.match(/\/photo\/(\d\d\d\d)\//);
	if (channelId != null)
	{
    argVmGallery.galleryChannelID = channelId[1];
		// alert("galleryChannelID:" + argVmGallery.galleryChannelID);
	}

  if (window.location.href.indexOf("6park-main.html") < 0 && window.location.href.indexOf(argVmGallery.galleryChannelID) <= 0) {
    return "You can not process this gallery.";
  }

  argVmGallery.imageList = getImageArray_Netease_TextAreaPhotoList(argDataSource);
}	// parseNetease_TextAreaPhotoList()

//*---------------------------------------------------------------------------------------*//

function getImageArray_Netease_TextAreaPhotoList(argTextAreaPhotoList) {
  if (argTextAreaPhotoList == "") {
    alert("getImageArray_Netease_TextAreaPhotoList(): argTextAreaPhotoList is empty  ");
    return;
  }

  var sectionArray = argTextAreaPhotoList.split("<li>");
  if (!$.isArray(sectionArray)) {
    alert("sectionArray is NOT an array");
    return;
  }
  $("#divLog").append("<li>sectionArray is an array: length=" + sectionArray.length + "</li>");

  var imageArray = [];
  $.each(sectionArray, function (i, section) {
    if (section == null || section == "") {
      return true;  // continue, false means break
    }
    var image = new ViewModelImage();
    image.imageUrl = getTagContent(section, '<i title=.*>', '</i>');
    if (image.imageUrl == null || image.imageUrl == "") {
      return true;  // continue, false means break
    }
	
    image.imageTitle = getTagContent(section, '<h2>', '</h2>');
    // image.imageCaption = getTagContent(section, '<p>', '</p>');
	
	  // $("#divLog").append("<li>image.imageUrl=" + image.imageUrl + image.imageTitle + "</li>");
    imageArray.push(image);
  });
  return imageArray;
} // function getImageArray_Netease_TextAreaPhotoList(argImageList)

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

function getTagContent(argString, argBeginTag, argEndTag)
{
  var pattern = new RegExp(argBeginTag + "(.*?)" + argEndTag, "m");
	// alert("pattern:" + pattern);
  // var pattern = new RegExp("/" + argBeginTag + "(.*?)" + argEndTag + "/");
  // var matchedContent = argString.match(/<i .*>(.*)i>/);
  var matchedContent = argString.match(pattern);
  if (matchedContent == null)
    return "";
  return matchedContent[1];
}	//getTagContent()

function getSubContent(argString, argBeginStr, argKeepBegin, argEndStr, argKeepEnd)
{
  var posBegin = argString.indexOf(argBeginStr);
	var posEnd = argString.indexOf(argEndStr);
	if (!argKeepBegin)
	{
	  posBegin += argBeginStr.length;
	}
	if (argKeepEnd)
	{
	  posEnd += argEndStr.length;
	}
	var length = posEnd - posBegin + 1;
  var subContent = argString.substring(posBegin, posEnd);
	// alert("subContent:" + argBeginStr + "@" + posBegin + " | " + argEndStr + "@" + posEnd + " ~~ " + length + "\n" + subContent);
  return subContent;
}	//getSubContent()

//*****************************************************************************************//

function removeUnusedCharacters(argString)
{
  // [点击了解详情]
	argString = argString.replace(/\[.*?\]/, "");
	return argString;
}	// removeUnusedCharacters

//*****************************************************************************************//
