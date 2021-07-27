// http://api.jquery.com/jQuery.get/
//  the request can not successfully retrieve data from a different domain, subdomain, or protocol.

//*****************************************************************************************//
// Config
var ImageBoxStyleArray = [];
ImageBoxStyleArray[0] = "";
ImageBoxStyleArray[1] = "style='border-style:solid;padding:12px;background-color:#DCDCED'";
ImageBoxStyleArray[2] = "style='border-style:double;padding:6px;background-color:#DCDCED'";
ImageBoxStyleArray[3] = "style='border-style:solid;padding:8px;background-color:#DCDCED'";
ImageBoxStyleArray[4] = "style='border-style:double;padding:4px;background-color:#DCDCED'";
ImageBoxStyleArray[5] = "style='border-style:dotted;padding:2px;background-color:#CCDCED'";
ImageBoxStyleArray[6] = "style='border-style:solid;padding:16px;background-color:#DCDCED'";
ImageBoxStyleArray[7] = "style='border-top:4px double #E1A60A;border-bottom:4px double #E1A60A;padding:8px'";
ImageBoxStyleArray["minus.com"] = "style='border:2px solid brown;padding:20px;with:90%;background-color: #b6bda1;background:url(https://24.media.tumblr.com/eb79baac4c71272708c04e03876486a6/tumblr_myw2dqdYMf1rsbruio1_1280.jpg);'";

var ImageStyleArray = [];
ImageStyleArray[0] = "";
ImageStyleArray[1] = "style='border-style:solid;padding:16px;background-color:#DCDCED'";
ImageStyleArray[2] = "style='border-top:4px double #E1A60A;border-bottom:4px double #E1A60A;padding:8px'";
ImageStyleArray[3] = "style='border-style:solid;padding:12px;background-color:#DCDCED'";
ImageStyleArray[4] = "style='border-style:double;padding:6px;background-color:#DCDCED'";
ImageStyleArray[5] = "style='border-style:solid;padding:8px;background-color:#DCDCED'";
ImageStyleArray[6] = "style='border-style:double;padding:4px;background-color:#DCDCED'";
ImageStyleArray[7] = "style='border-style:dotted;padding:2px;background-color:#CCDCED'";

ImageStyleArray["minus.com"] = "style='padding:12px;background-color: #b6bda1;background:url(https://31.media.tumblr.com/8697a83535edaaf1d385d625d40c83f6/tumblr_myvzyiLUeW1rsbruio1_250.jpg);box-shadow:0px 0px 0px 2px rgba(0,0,0,0.6),0px 0px 0px 14px #fff,0px 0px 0px 18px rgba(0,0,0,0.2),6px 6px 8px 17px #555;'";

var BackgroundImageArray = [];
BackgroundImageArray[0] = "";
BackgroundImageArray[1] = "http://www.pixeden.com/media/k2/galleries/93/001-subtle-light-pattern-background-texture.jpg";   // sunday
BackgroundImageArray[2] = "http://www.pixeden.com/media/k2/galleries/131/002-subtle-light-pattern-background-texture.jpg";
BackgroundImageArray[3] = "http://www.pixeden.com/media/k2/galleries/165/003-subtle-light-pattern-background-texture-vol5.jpg";
BackgroundImageArray[4] = "http://www.pixeden.com/media/k2/galleries/112/003-subtle-light-pattern-background-texture.jpg";
BackgroundImageArray[5] = "http://www.pixeden.com/media/k2/galleries/131/001-subtle-light-pattern-background-texture.jpg";
BackgroundImageArray[6] = "http://www.pixeden.com/media/k2/galleries/112/001-subtle-light-pattern-background-texture.jpg";
BackgroundImageArray[7] = "http://www.pixeden.com/media/k2/galleries/93/004-subtle-light-pattern-background-texture.jpg";
BackgroundImageArray[8] = "http://3.bp.blogspot.com/-7F-TaKSj4LY/UAOelWRuqlI/AAAAAAAACIQ/rcEtSrHaGEs/s1600/free_light_background_texture.jpg"; 

var DividerArray = [];
DividerArray[0] = "<hr style='width:50%;text-align:center;' />";
DividerArray[1] = "<div style='padding:20px;width:100%;background:url(https://31.media.tumblr.com/3c187a00458aa1001125b264de14311f/tumblr_myzqv3k2J91rsbruio1_500.png) no-repeat center;' ></div>";
DividerArray[2] = "<div style='padding:20px;width:100%;background:url(https://24.media.tumblr.com/27c8554243deca65950f0868983df71d/tumblr_myzr1salPT1rsbruio1_400.gif) no-repeat center;' ></div>";
DividerArray[3] = "<div style='padding:20px;width:100%;background:url(https://31.media.tumblr.com/9f94b1854235e2d609e0ee679507463b/tumblr_myzqzj7l3x1rsbruio1_400.gif) no-repeat center;' ></div>";
DividerArray[4] = "<div style='padding:20px;width:100%;background:url(https://24.media.tumblr.com/3c187a00458aa1001125b264de14311f/tumblr_myzqv3k2J91rsbruio1_1280.png) no-repeat center;' ></div>";
DividerArray[5] = "<div style='padding:20px;width:100%;background:url(https://24.media.tumblr.com/079cf906d7c5b540a48fca0e7e6ed485/tumblr_myygubDmSo1rsbruio1_250.gif) no-repeat center;' ></div>";
DividerArray[6] = "<div style='padding:20px;width:100%;background:url(https://31.media.tumblr.com/78f286fd3f8a4fd6210c940a8b942fbf/tumblr_myyh1rpoT01rsbruio1_500.gif) no-repeat center;' ></div>";
DividerArray[7] = "<div style='padding:20px;width:100%;background:url(https://31.media.tumblr.com/51ee8f1d7c459a2124654486626f8dfb/tumblr_myzqyshfR31rsbruio1_400.gif) no-repeat center;' ></div>";
DividerArray[8] = "<div style='padding:20px;width:100%;background:url(https://31.media.tumblr.com/f6d8e8a78f3d85543aaae02885e227ad/tumblr_myyge6t9uD1rsbruio1_400.jpg) no-repeat center;' ></div>";
DividerArray[9] = "<div style='padding:20px;width:100%;background:url(https://24.media.tumblr.com/0ca5602d4f14076050e07998026d90c0/tumblr_myygauHdL81rsbruio1_400.jpg) no-repeat center;' ></div>";
DividerArray[10] = "<div style='padding:20px;width:100%;background:url(https://31.media.tumblr.com/8f1859cbe862342b116e59ec9f4c1fcb/tumblr_myyg8qn47F1rsbruio1_400.jpg) no-repeat center;' ></div>";

//background: #fff url(image.gif) no-repeat top left
DividerArray["minus.com"] = "<div style='padding:20px;width:100%;background:url(https://24.media.tumblr.com/e331109dc2ce0a76d1e0e094681f1957/tumblr_myygxqnz5u1rsbruio1_500.gif) no-repeat center;' ></div>";


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
	this.objectType = "image";
}

//*****************************************************************************************//

function ParseDataSource(argDataSource, argVmGallery)
{
  // argDataSource = argDataSource.replace(/id="photoList162947"/, 'id="photoList"');
	
	if (argDataSource.indexOf('<title>九妖') > 0)
  {
	  return parse9yao_NeiHanTu(argDataSource, argVmGallery);
  }
	else if (argDataSource.indexOf('<title>怪讯网') > 0)
  {
	  return parseGuaiXun(argDataSource, argVmGallery);
  }	
  else if (argDataSource.indexOf('<textarea name="gallery-data" style="display:none;">') > 0)
  {
    return parseNeteaseAlbum_WithJsonData_2013(argDataSource, argVmGallery);
  }
  else if (argDataSource.indexOf('<textarea class="hidden" id="photoList') > 0)
  {
	  return parseNetease_TextAreaPhotoList(argDataSource, argVmGallery);
  }
	else if (argDataSource.indexOf('<div class="ep-content"') > 0)
  {
	  return parseNetease_GeneralArticle(argDataSource, argVmGallery);
  }
	else if (argDataSource.indexOf('minus.com/') > 0)
  {
	  if (argDataSource.indexOf('var gallerydata = ') > 0)
		{
		  return parseMinusAlbum_WithJsonData_2013(argDataSource, argVmGallery);
		}
		else
		{
	    return parseMinusCom_ImageList(argDataSource, argVmGallery);
		}
  }
	else if (argDataSource.indexOf('googleusercontent.com') > 0)
  {
	  return ParseGoogleAlbum(argDataSource, argVmGallery);
  }
	else if (argDataSource.indexOf(' 倍可亲</title>') > 0)
  {
	  return parseBachChinaArticle(argDataSource, argVmGallery);
  }
	else if (argDataSource.indexOf('class="video-list-item') > 0)
  {
	  return ParseYoutubePlayList(argDataSource, argVmGallery);
  }
	else 
  {
	  return ParseGeneralDataSource(argDataSource, argVmGallery);
  }
}	// function ParseDataSource()

//*****************************************************************************************//
// netease
//*****************************************************************************************//

function NeteaseDisallowed_ByTags(argDataSource)
{
	// returns "" if allowed
	if (debugMode) return "";

  var pageTag = "";	// <a class="nav-logo" href="http://news.163.com/">
	var pageTagMatches = argDataSource.match(/<a class="nav-logo" href="http:\/\/(.*?)\/"/);
	if (pageTagMatches != null)
	{
    pageTag = pageTagMatches[1];
		// alert("pageTag: " + pageTag);
	}
	if (pageTag == "")
	{ 
		pageTagMatches = argDataSource.match(/<title.*?>.*?_(.*)<\/title>/);
		if (pageTagMatches != null)
		{
			pageTag = pageTagMatches[1];
			// alert("首页 pageTag: " + pageTag);
		}
	}
	if (pageTag == "")
	{  
	  pageTagMatches = argDataSource.match(/<a href="http:\/\/(.*?)\/">(首页|校园频道)<\/a>/);
		if (pageTagMatches != null)
		{
			pageTag = pageTagMatches[1];
			// alert("首页 pageTag: " + pageTag);
		}
	}
	
	if (DisallowedTags != "")
	{
		var pattern = new RegExp(DisallowedTags, "m");
		if (pageTag.match(pattern))
		{
			return "ERROR: this page can not be processed"; // + " Disallowed tags: " + pattern;
		}
	}
	
	if (AllowedTags != "")	
	{
		pattern = new RegExp(AllowedTags, "m");
		if (!pageTag.match(pattern))
		{
			return "ERROR: this page can not be processed. " + " Allowed tags: " + pattern + "<=>" + pageTag;
		}
	}
	return "";
}	// NeteaseDisallowed_ByTags()

function NeteaseDisallowed_ByChannelId(argChannelId)
{
	// alert("argChannelId: " + argChannelId);
  if (debugMode || CustomChannels=="" || CustomChannels=="0000") return "";
  // if (! window.location.href.indexOf(argVmGallery.galleryChannelID) <= 0) {
	if (CustomChannels.indexOf(argChannelId) < 0) {
    return "ERROR: this gallery can not be processed. " + argChannelId + "/" + CustomChannels;
  }
}	// NeteaseDisallowed_ByChannelId

//*****************************************************************************************//

function parseNeteaseAlbum_WithJsonData_2013(argDataSource, argVmGallery) 
{
  $("#divSourceName").html("parseNeteaseAlbum_WithJsonData_2013");
  var disallowerMsg = NeteaseDisallowed_ByTags(argDataSource);
	if (disallowerMsg)
	{
	  // alert("disallowerMsg: " + disallowerMsg);
		return disallowerMsg;
	}

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
    alert("parseNeteaseAlbum_WithJsonData_2013(argDataSource): jsonGallerySet is null");
    return;
  }
  if (typeof jsonGallerySet != "object") {
    alert("parseNeteaseAlbum_WithJsonData_2013(argDataSource): jsonGallerySet is not an object");
    return;
  }

  argVmGallery.galleryName = jsonGallerySet.info.setname;
  argVmGallery.galleryDesc = jsonGallerySet.info.prevue;
  argVmGallery.galleryChannelID = jsonGallerySet.info.channelid;

	disallowerMsg = NeteaseDisallowed_ByChannelId(argVmGallery.galleryChannelID);
	if (disallowerMsg)
	{
	  // alert("disallowerMsg: " + disallowerMsg);
		return disallowerMsg;
	}	

	if (!$.isArray(jsonGallerySet.list) || jsonGallerySet.list.length == 0)
	{
	  return "ERROR: No images found.";
	}
  argVmGallery.imageList = getImageArray_Netease2013(jsonGallerySet.list);
} // parseNeteaseAlbum_WithJsonData_2013

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
    image.imageTitle = removeUnusedContent(item.title);
    image.imageCaption = removeUnusedContent(item.note);
    imageArray.push(image);
  });
  return imageArray;
} // function getImageArray_Netease2013(argImageList)

//*****************************************************************************************//

function parseNetease_TextAreaPhotoList(argDataSource, argVmGallery) 
{
  $("#divSourceName").html("parseNetease_TextAreaPhotoList");
  var disallowerMsg = NeteaseDisallowed_ByTags(argDataSource);
	if (disallowerMsg)
	{
	  // alert("disallowerMsg: " + disallowerMsg);
		return disallowerMsg;
	}

  // alert("parseNetease_TextAreaPhotoList");
	argVmGallery.galleryName = getTagContent(argDataSource, '<title>', '</title>');
	argVmGallery.galleryDesc = getTagContent(argDataSource, '.*<div class="c2 clearfix"><h4>', '</h4>.*');
	if (argVmGallery.galleryDesc == "")
	{
	  argVmGallery.galleryDesc = getSubContent(argDataSource, '<div class="c2 clearfix"><h4>', false, '</h4>', false);
  }
	if (argVmGallery.galleryDesc == "")
	{
	  argVmGallery.galleryDesc = getTagContent(argDataSource, '<p class="ep-summary">', '</p>');
	}
	// alert("parseNetease_TextAreaPhotoList:" + argDataSource);
	// alert("parseNetease_TextAreaPhotoList():" + argVmGallery.galleryName + "\n" + argVmGallery.galleryDesc );
	 
	argDataSource = argDataSource.replace(/id="photoList.*"/, 'id="photoList"');
  var posInfoKey = argDataSource.indexOf('<textarea class="hidden" id="photoList">');
  if (posInfoKey > 0) {
    argDataSource = argDataSource.substring(posInfoKey);
  }
  var postTextareEnd = argDataSource.indexOf("</textarea>");
  if (postTextareEnd > 0) {
    argDataSource = argDataSource.substring(0, postTextareEnd - 1);
  }
	// alert("parseNetease_TextAreaPhotoList() trimmed data source\n:" + argDataSource);
	
	var channelId = argDataSource.match(/\/photo\/(\d\d\d\d)\//);
	if (channelId != null)
	{
    argVmGallery.galleryChannelID = channelId[1];
		// alert("galleryChannelID:" + argVmGallery.galleryChannelID);
	}

	// disallowerMsg = NeteaseDisallowed_ByChannelId(argVmGallery.galleryChannelID);
	// if (disallowerMsg != "")
	// {
	  // alert("disallowerMsg: " + disallowerMsg);
	//	return disallowerMsg;
	// }	
	// alert("parseNetease_TextAreaPhotoList() trimmed data source\n:" + argDataSource);

  argVmGallery.imageList = getImageArray_Netease_TextAreaPhotoList(argDataSource);
}	// parseNetease_TextAreaPhotoList()

//*---------------------------------------------------------------------------------------*//

function getImageArray_Netease_TextAreaPhotoList(argTextAreaPhotoList) 
{
  if (argTextAreaPhotoList == "") {
    alert("getImageArray_Netease_TextAreaPhotoList(): argTextAreaPhotoList is empty  ");
    return;
  }
// alert("parseNetease_TextAreaPhotoList() trimmed data source\n:" + argTextAreaPhotoList);
  var sectionArray = argTextAreaPhotoList.split("<li>");
  if (!$.isArray(sectionArray)) {
    alert("sectionArray is NOT an array");
    return;
  }
  $("#divLog").append("<li>getImageArray_Netease_TextAreaPhotoList(): sectionArray is an array: length=" + sectionArray.length + "</li>");

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
    image.imageCaption = getTagContent(section, '<p>', '</p>');
	
	  // $("#divLog").append("<li>image.imageUrl=" + image.imageUrl + image.imageTitle + "</li>");
    imageArray.push(image);
  });
  return imageArray;
} // function getImageArray_Netease_TextAreaPhotoList(argImageList)

//*****************************************************************************************//
//*****************************************************************************************//

function parseNetease_GeneralArticle(argDataSource, argVmGallery) 
{
  $("#divSourceName").html("parseNetease_GeneralArticle");
  $("#divLog").html("");
	
  argDataSource = argDataSource.replace(/\n/g, " ");
	argDataSource = argDataSource.replace(/ +/g, " ");
	// alert("argDataSource: " + argDataSource);
	var posTrim = argDataSource.indexOf('<div class="ep-content" id="js-epContent"');
	if (posTrim>0)
	{
	  argDataSource = argDataSource.substring(posTrim);
	}
	
	posTrim = argDataSource.indexOf('<div class="share-wrap">');
	if (posTrim>0)
	{
	  argDataSource = argDataSource.substring(0, posTrim);
	}

	argDataSource = argDataSource.replace(/<script .*?>.*?<\/script>/gi, "");
	// alert("argDataSource: " + argDataSource);

	argVmGallery.galleryName = getTagContent(argDataSource, '<h1 id="h1title" class="ep-h1">', '</h1>');
	argVmGallery.galleryDesc = getTagContent(argDataSource, '<p class="ep-summary">', '</p>');
	// alert("argVmGallery.galleryDesc: " + argVmGallery.galleryName + "\n" + argVmGallery.galleryDesc);

	posTrim = argDataSource.indexOf('<iframe ');
	if (posTrim>0)
	{
	  argDataSource = argDataSource.substring(0, posTrim);
	}	
	argDataSource = argDataSource.replace(/.*<div id="endText">/g, " ");
	argDataSource = argDataSource.replace(/<p class="f_center">/gi, "");
	argDataSource = argDataSource.replace(/<p><img /gi, "<img ");
	argDataSource = argDataSource.replace(/<img .*?src=(.*?)\s.*?>/gi, "\n$1\n");
	argDataSource = argDataSource.replace(/<img .*?src=(.*?)>/gi, "\n$1\n");
	argDataSource = argDataSource.replace(/\s(http.*?)\s/gi, "\n$1\n");
	
  // $("#divLog").html("argDataSource=\n" + argDataSource + "\n");
	// $("#txtHtmlOutput").val(argDataSource);
	
	argVmGallery.imageList = getGeneralImageArray(argDataSource);
}	// parseNetease_GeneralArticle()

//*****************************************************************************************//
// BackChina.com
//*****************************************************************************************//

function parseBachChinaArticle(argDataSource, argVmGallery) 
{
  $("#divSourceName").html("parseBachChinaArticle");
  $("#divLog").html("");
	
	argVmGallery.galleryName = getTagContent(argDataSource, '<h1 class="ph">', '</h1>');
	
  // argDataSource = argDataSource.replace(/\n/g, " ");
	// argDataSource = argDataSource.replace(/ +/g, " ");
	// alert("parseBachChinaArticle() -- argDataSource: \n" + argVmGallery.galleryName + "\n\n" + argDataSource);
	
	var posTrim = argDataSource.indexOf('<div class="main_content">');
	if (posTrim>0)
	{
	  argDataSource = argDataSource.substring(posTrim);
	}
	
	posTrim = argDataSource.indexOf('<!-- AddThis Button BEGIN -->');
	if (posTrim>0)
	{
	  argDataSource = argDataSource.substring(0, posTrim);
	}
  // alert("parseBachChinaArticle() 2-- argDataSource: \n" + argVmGallery.galleryName + "\n\n" + argDataSource);

	argDataSource = argDataSource.replace(/<script .*?>.*?<\/script>/gi, "");
	argDataSource = argDataSource.replace(/<img .*?http:\/\/(.*.backchina.com|.*.bkcimg.com)\/.*?>/gi, "");
	
	var posDesc = argDataSource.indexOf('<img ');
	if (posDesc>0)
	{
	  argVmGallery.galleryDesc = removeUnusedContent(argDataSource.substring(0, posDesc));
		argDataSource = argDataSource.substring(posDesc);
	}
	
  // alert("parseBachChinaArticle() 3-- argDataSource: \n" + argVmGallery.galleryName + "\n\n" + argVmGallery.galleryDesc + "\n\n" + argDataSource);
  // $("#divLog").html("argDataSource=\n" + argDataSource + "\n");
	// $("#txtHtmlOutput").val(argDataSource);
	
	argVmGallery.imageList = getGeneralImageArray(argDataSource);
}	// parseBachChinaArticle()

//*****************************************************************************************//
// Minus.com
//*****************************************************************************************//

function parseMinusAlbum_WithJsonData_2013(argDataSource, argVmGallery) 
{
  $("#divSourceName").html("parseMinusAlbum_WithJsonData_2013");
  var posJsonStart = argDataSource.indexOf("var gallerydata = ");
  if (posJsonStart > 0) {
    argDataSource = argDataSource.substring(posJsonStart + 18);
  }
  var posJsonEnd = argDataSource.indexOf("};");
  if (posJsonEnd > 0) {
    argDataSource = argDataSource.substring(0, posJsonEnd+1);
  }
  // alert("argDataSource: " + argDataSource);
	$("#txtHtmlOutput").val(argDataSource);

  var jsonGallerySet = $.parseJSON(argDataSource);
  //.fail(function () {
  //  alert("$.parseJSON(argDataSource) failed");
  //})
  //.always(function () {
  //  alert("$.parseJSON(argDataSource) done");
  //});

  if (jsonGallerySet == null) {
    alert("parseMinusAlbum_WithJsonData_2013(argDataSource): jsonGallerySet is null");
    return;
  }
  if (typeof jsonGallerySet != "object") {
    alert("parseMinusAlbum_WithJsonData_2013(argDataSource): jsonGallerySet is not an object");
    return;
  }

  argVmGallery.galleryName = jsonGallerySet.name;
  argVmGallery.galleryDesc = jsonGallerySet.name + " by " + jsonGallerySet.creator_display_name;
	argVmGallery.centered = true;
	argVmGallery.imageBoxStyle = ImageBoxStyleArray["minus.com"];
	argVmGallery.imageStyle = ImageStyleArray["minus.com"];
	argVmGallery.divider = DividerArray["minus.com"];
	argVmGallery.imageTitleStyle = ImageTitleStyleDeco;
	argVmGallery.imageCaptionStyle = ImageCaptionStyleDeco;
	// alert("argVmGallery.imageStyle: " + argVmGallery.imageStyle);

	if (!$.isArray(jsonGallerySet.items) || jsonGallerySet.items.length == 0)
	{
	  return "ERROR: No images found.";
	}
  argVmGallery.imageList = getImageArray_Minus2013(jsonGallerySet.items);
} // parseMinusAlbum_WithJsonData_2013

//*---------------------------------------------------------------------------------------*//

function getImageArray_Minus2013(argImageList) {
  // alert("$.type(argImageList): " + $.type(argImageList));	// array
  if (typeof argImageList != "object") {
    alert("getImageArray_Minus2013(argImageList): argImageList is not an object:  " + argImageList);
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
		var imageId = item.id;
		
    image.imageUrl = "http://i.minus.com/j" + item.id + ".jpg";
    image.imageTitle = ""; //removeUnusedContent(item.name) // filename;
    image.imageCaption = removeUnusedContent(item.caption);
    imageArray.push(image);
  });
  return imageArray;
} // function getImageArray_Minus2013(argImageList)

//*****************************************************************************************//

function parseMinusCom_ImageList(argDataSource, argVmGallery) 
{
  $("#divSourceName").html("parseMinusCom_ImageList");

	argVmGallery.galleryName = "Minus.com";
	argVmGallery.centered = true;
	argVmGallery.imageBoxStyle = ImageBoxStyleArray["minus.com"];
	argVmGallery.imageStyle = ImageStyleArray["minus.com"];
	argVmGallery.divider = DividerArray["minus.com"];
	argVmGallery.imageTitleStyle = ImageTitleStyleDeco;
	argVmGallery.imageCaptionStyle = ImageCaptionStyleDeco;
	
	argDataSource = filterContent(argDataSource, "http://i.*?\.minus.com/j.*?\_e.jpg", "");
	// alert("parseMinusCom_ImageList() - argDataSource: \n" + argDataSource);
	
	argDataSource = argDataSource.replace(/_e.jpg/g, ".jpg");
  argVmGallery.imageList = getImageArray_MinusData(argDataSource);
}	// parseMinusCom_ImageList()

//*---------------------------------------------------------------------------------------*//

function getImageArray_MinusData(argMinusPhotoData) {
  if (argMinusPhotoData == "") {
    alert("getImageArray_MinusData(): argMinusPhotoData is empty  ");
    return;
  }

  var lineArray = argMinusPhotoData.split("\n");
  if (!$.isArray(lineArray)) {
    alert("lineArray is NOT an array");
    return;
  }
  $("#divLog").append("<li>getImageArray_MinusData() -- lineArray is an array: length=" + lineArray.length + "</li>");

  var imageArray = [];
  $.each(lineArray, function (lineNo, line) {
    if (line == null || line == "") {
      return true;  // continue, false means break
    }
    var image = new ViewModelImage();
    image.imageUrl = line.replace(/http:\/\/i.*?\.minus.com\/j.*?\_e.jpg/, "$1");
		if (lineNo > 0 && (lineNo+1) % 100 === 0)
		{
		  // alert("lineNo:" + lineNo);
		  image.imageEndingText = "</center>\n\n\n<center>\n";
		}
    imageArray.push(image);
  });
  return imageArray;
} // function getImageArray_MinusData(argImageList)

//*****************************************************************************************//
// 9yao.com
//*****************************************************************************************//

function parse9yao_NeiHanTu(argDataSource, argVmGallery) 
{
  $("#divSourceName").html("parse9yao_NeiHanTu");
  var today = new Date();
	argVmGallery.galleryName = ""; // "【每日漫画】" + today.getMonth() + "-" + today.getDate();
	argVmGallery.galleryDesc =  "";
	argVmGallery.addImageNo = false;
	argVmGallery.addHeaderFooter = false;
	argVmGallery.divider = "";
	
  // alert("argVmGallery.galleryDesc: " + argVmGallery.galleryDesc);	
	 
  var posStart = argDataSource.indexOf('<div class="main">');
  if (posStart > 0) {
    argDataSource = argDataSource.substring(posStart);
  }
  var posEnd = argDataSource.indexOf('<div class="page">');
  if (posEnd > 0) {
    argDataSource = argDataSource.substring(0, posEnd - 1);
  }

  argVmGallery.imageList = getImageArray_9yao_NeiHanTu(argDataSource);
}	// parse9yao_NeiHanTu()

//*---------------------------------------------------------------------------------------*//

function getImageArray_9yao_NeiHanTu(arg9YaoMainContent) {
  if (arg9YaoMainContent == "") {
    alert("getImageArray_9yao_NeiHanTu(): arg9YaoMainContent is empty  ");
    return;
  }

  var sectionArray = arg9YaoMainContent.split('<div class="box-title">');
  if (!$.isArray(sectionArray)) {
    alert("sectionArray is NOT an array");
    return;
  }
  $("#divLog").append("<li>getImageArray_9yao_NeiHanTu(): sectionArray is an array: length=" + sectionArray.length + "</li>");

  var imageArray = [];
  $.each(sectionArray, function (i, section) {
    if (section == null || section == "") {
      return true;  // continue, false means break
    }
    var image = new ViewModelImage();
    image.imageUrl = getTagContent(section, ' data-original="', '">');
    if (image.imageUrl == null || image.imageUrl == "") 
		{
		  image.imageUrl = getTagContent(section, ' gifurl="', '">');
			if (image.imageUrl == null || image.imageUrl == "") 
			{
				image.imageUrl = getTagContent(section, '<img src="', '">');
				if (image.imageUrl == null || image.imageUrl == "") 
				{
				  return true;  // continue, false means break
				}
			}
    }
	
    image.imageTitle = getTagContent(section, '<a href="/show/.*?">', '</a>');
	  
	  // $("#divLog").append("<li>image:<li>" + image.imageUrl + "<br>\nTitle: " + image.imageTitle + "</li>");
    imageArray.push(image);
  });
	
	//	var footerImage = new ViewModelImage();
	//	footerImage.imageUrl = "http://www.popo8.com/host/data/20131207/be575c2.gif";
	//	imageArray.push(footerImage);
  return imageArray;
} // function getImageArray_9yao_NeiHanTu(argImageList)

//*****************************************************************************************//
// GuaiXun.com
//*****************************************************************************************//

function parseGuaiXun(argGuaiXunSource, argVmGallery) 
{
  $("#divSourceName").html("parseGuaiXun");
  var today = new Date();
	argVmGallery.galleryName = ""; // "【GuaiXun】" + (today.getMonth()+1) + "-" + today.getDate();
	argVmGallery.galleryDesc =  "";
	argVmGallery.addImageNo = false;
	argVmGallery.addHeaderFooter = false;
	argVmGallery.divider = "";
	
  // alert("argVmGallery.galleryDesc: " + argVmGallery.galleryDesc);	
	 
  var posStart = argGuaiXunSource.indexOf('<div class="content">');
  if (posStart > 0) {
    argGuaiXunSource = argGuaiXunSource.substring(posStart);
  }
  var posEnd = argGuaiXunSource.indexOf('<div class="page">');
  if (posEnd > 0) {
    argGuaiXunSource = argGuaiXunSource.substring(0, posEnd - 1);
  }
  
  argVmGallery.imageList = getImageArray_GuaiXun(argGuaiXunSource);
}	// parseGuaiXun()

//*---------------------------------------------------------------------------------------*//

function getImageArray_GuaiXun(argGuaiXunMainContent) {
  if (argGuaiXunMainContent == "") {
    alert("getImageArray_GuaiXun(): argGuaiXunMainContent is empty  ");
    return;
  }

	argGuaiXunMainContent = argGuaiXunMainContent.replace(/\s+/gm, " ");
	argGuaiXunMainContent = argGuaiXunMainContent.replace(/	+/gm, " ");
	argGuaiXunMainContent = argGuaiXunMainContent.replace(/\t+/gm, " ");	// tab

  var sectionArray = argGuaiXunMainContent.split('<div class="yr">');
  if (!$.isArray(sectionArray)) {
    alert("sectionArray is NOT an array");
    return;
  }
  $("#divLog").append("<li>getImageArray_GuaiXun(): sectionArray is an array: length=" + sectionArray.length + "</li>");

  var imageArray = [];
  $.each(sectionArray, function (i, section) {
    if (section == null || section == "") {
      return true;  // continue, false means break
    }
		if (! section.match(/<div class="nr">/)){ return true; }
		
		section = section.replace(/\n/g, " ");
		var sectionContent =  getTagContent(section, '<div class="nr">', '</div>');
		// alert("sectionContent: " + sectionContent);
    var image = new ViewModelImage();
    image.imageUrl = getTagContent(sectionContent, '<img style="cursor: pointer.*?src="', '"');
    if (image.imageUrl == null || image.imageUrl == "") 
		{
		  image.imageUrl = getTagContent(sectionContent, ' gifurl="', '">');
    }
		if (image.imageUrl == null || image.imageUrl == "") 	// text only
		{
			image.imageUrl = "https://31.media.tumblr.com/a166a4b1945ffe28681056370ee9e1bd/tumblr_mxg8q6NMPB1rsbruio1_250.jpg";
			// return true;  // continue, false means break
		}
    image.imageCaption = removeUnusedContent(sectionContent);
	
	  // $("#divLog").append("<li>image:<li>" + image.imageUrl + "<br>\nTitle: " + image.imageTitle + "</li>");
    imageArray.push(image);
  });
	
	//	var footerImage = new ViewModelImage();
	//	footerImage.imageUrl = "http://www.popo8.com/host/data/20131207/be575c2.gif";
	//	imageArray.push(footerImage);
  return imageArray;
} // function getImageArray_GuaiXun(argImageList)

//*****************************************************************************************//
// Google Album
//*****************************************************************************************//

function ParseGoogleAlbum(argGoogleImageContent, argVmGallery) 
{
  $("#divSourceName").html("ParseGoogleAlbum");
  $("#divLog").html("");
  var today = new Date();
  argVmGallery.galleryName = "Google Album: " + (today.getMonth()+1) + "-" + today.getDate();  
	argGoogleImageContent = argGoogleImageContent.replace(/googleusercontent.com\/(.*?)=w.*?-p-no/gi, "googleusercontent.com/$1=w800#g.jpg");
  // alert("argGoogleImageContent: \n" + argGoogleImageContent);	
	var useCustomterFooter = $('#checkboxUseFooter').prop('checked'); //.is(':checked');
	if (useCustomterFooter)
	{
	  argVmGallery.footer = CustomFooter;
	}
	argVmGallery.imageList = getGeneralImageArray(argGoogleImageContent);
}	// ParseGoogleAlbum()

//*****************************************************************************************//
// GeneralDataSource
//*****************************************************************************************//

function ParseGeneralDataSource(argDataSource, argVmGallery) 
{
  $("#divSourceName").html("ParseGeneralDataSource");
  var today = new Date();
  argVmGallery.galleryName = (today.getMonth()+1) + "-" + today.getDate();  
	argVmGallery.divider = "";
	argVmGallery.centered = true;
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
	
  // $("#divLog").html("argDataSource=\n" + argDataSource + "\n");
	// $("#txtHtmlOutput").val(argDataSource);
	
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
// YoutubePlayList
//*****************************************************************************************//

function ParseYoutubePlayList(argDataSource, argVmGallery) 
{
  $("#divSourceName").html("ParseYoutubePlayList");
  var today = new Date();
  argVmGallery.galleryName = "Youtube Playlist -- " + (today.getMonth()+1) + "-" + today.getDate();  
	argVmGallery.divider = "";
	argVmGallery.centered = true;
	argVmGallery.objectUnit = "视频";
  $("#divLog").html("");
	argDataSource = filterContent(argDataSource, '<li class="video-list-item.*data-video-id=.*?>', "");
	// alert("filterContent(argDataSource):\n" + argDataSource);
	argDataSource = argDataSource.replace(/<a class.*$/g, "");
  //	argDataSource = argDataSource.replace(/(\.jpg|\.jpeg|\.gif|\.png)\s/gi, "$1\n");
	
  // $("#divLog").html("argDataSource=\n" + argDataSource + "\n");
	// $("#txtHtmlOutput").val(argDataSource);
	
	var useCustomterFooter = $('#checkboxUseFooter').prop('checked'); //.is(':checked');
	if (useCustomterFooter)
	{
	  argVmGallery.footer = CustomFooter;
	}
	
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
	
	  image = new ViewModelImage();
    image.imageTitle = getAttribute(line, "data-video-title");	
		if (image.imageTitle.indexOf("Deleted") > 0)
		{
		  return true;  // continue, false means break
		}
   	image.imageUrl = getAttribute(line, "data-video-id");
		image.objectType = "youtube";
		imageArray.push(image);
  });
	argVmGallery.imageList = imageArray;
}	// ParseYoutubePlayList()

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

function buildYoutubeTag(argVideoId, argImageNo, argStyle) 
{
  var autoplay = (argImageNo==1) ? "&autoplay=1" : "";
  var YoutubeTag = "<embed src='https://www.youtube.com/v/" + argVideoId + autoplay + "' type='application/x-shockwave-flash' width='640' height='480' ></embed><br />\n";
  //	+ argStyle + " />\n"
  if (argImageNo > 0)
  {
    YoutubeTag += NumberBracketLeft + argImageNo + NumberBracketRight;
    YoutubeTag += "\n"
  }
  return YoutubeTag;
}	// buildYoutubeTag()

//*****************************************************************************************//

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
	if (posBegin < 0 || posEnd < 0) { return ""; }
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

function getAttribute(argString, argAttribute)
{
  var pattern = new RegExp(argAttribute + '="(.*?)"');
	// alert("getAttribute() -- pattern:" + pattern + "\n in string:" + argString);
  // var pattern = new RegExp("/" + argBeginTag + "(.*?)" + argEndTag + "/");
  // var matchedContent = argString.match(/<i .*>(.*)i>/);
  var matchedContent = argString.match(pattern);
  // if (matchedContent == null) return "";
	// alert("getAttribute() -- pattern:" + pattern + "\n" + matchedContent[1]);
  return matchedContent[1];
}	//getAttribute()

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
  // $("#divLog").append("<li>filterContent() # lines: " + lineArray.length + "</li>");

  var filteredContent = "";
	var patternToKeep = new RegExp(".*?(" + argKeepPattern + ").*");
	var patternToRemove = new RegExp(argRemovePattern);
	// alert("patternToKeep:" + patternToKeep + "\n patternToRemove:" + patternToRemove);
  $.each(lineArray, function (lineNo, line) {
    if (line == null || line == "") { return true; } // continue, false means break
    if (argRemovePattern != "" && line.match(patternToRemove)) { return true; }
		if (argKeepPattern != "" && !line.match(patternToKeep)) { return true; }
		
    filteredContent += line.replace(patternToKeep, "$1") + "\n";
  });
  return filteredContent;
} // filterContent()

//*****************************************************************************************//