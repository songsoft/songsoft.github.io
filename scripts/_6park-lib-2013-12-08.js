// http://api.jquery.com/jQuery.get/
//  the request can not successfully retrieve data from a different domain, subdomain, or protocol.

//*****************************************************************************************//
// Config
var ImageStyleArray = [];
ImageStyleArray[0] = "";
ImageStyleArray[1] = "style='border-style:solid;padding:16px;background-color:#DCDCED'";
ImageStyleArray[2] = "style='border-top:4px double #E1A60A;border-bottom:4px double #E1A60A;padding:8px'";
ImageStyleArray[3] = "style='border-style:solid;padding:12px;background-color:#DCDCED'";
ImageStyleArray[4] = "style='border-style:double;padding:6px;background-color:#DCDCED'";
ImageStyleArray[5] = "style='border-style:solid;padding:8px;background-color:#DCDCED'";
ImageStyleArray[6] = "style='border-style:double;padding:4px;background-color:#DCDCED'";
ImageStyleArray[7] = "style='border-style:dotted;padding:2px;background-color:#CCDCED'";

var BackgroundImageArray = []
BackgroundImageArray[0] = ""
BackgroundImageArray[1] = "http://www.pixeden.com/media/k2/galleries/93/001-subtle-light-pattern-background-texture.jpg"   // sunday
BackgroundImageArray[2] = "http://www.pixeden.com/media/k2/galleries/131/002-subtle-light-pattern-background-texture.jpg"
BackgroundImageArray[3] = "http://www.pixeden.com/media/k2/galleries/165/003-subtle-light-pattern-background-texture-vol5.jpg"
BackgroundImageArray[4] = "http://www.pixeden.com/media/k2/galleries/112/003-subtle-light-pattern-background-texture.jpg"
BackgroundImageArray[5] = "http://www.pixeden.com/media/k2/galleries/131/001-subtle-light-pattern-background-texture.jpg"
BackgroundImageArray[6] = "http://www.pixeden.com/media/k2/galleries/112/001-subtle-light-pattern-background-texture.jpg"
BackgroundImageArray[7] = "http://www.pixeden.com/media/k2/galleries/93/004-subtle-light-pattern-background-texture.jpg"
BackgroundImageArray[8] = "http://3.bp.blogspot.com/-7F-TaKSj4LY/UAOelWRuqlI/AAAAAAAACIQ/rcEtSrHaGEs/s1600/free_light_background_texture.jpg"    ;; 


var NumberBracketLeft = "【 ";
var NumberBracketRight = " 】";
var StrPictureUnit = " 图";

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
  // argDataSource = argDataSource.replace(/id="photoList162947"/, 'id="photoList"');
  if (argDataSource.indexOf('<textarea name="gallery-data" style="display:none;">') > 0)
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
	else if (argDataSource.indexOf('<title>九妖内涵图') > 0)
  {
	  return parse9yao_NeiHanTu(argDataSource, argVmGallery);
  }
	else if (argDataSource.indexOf('<title>怪讯网') > 0)
  {
	  return parseGuaiXun(argDataSource, argVmGallery);
  }	
	else if (argDataSource.indexOf('googleusercontent.com') > 0)
  {
	  return ParseGoogleAlbum(argDataSource, argVmGallery);
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
  if (debugMode) return "";
  // if (! window.location.href.indexOf(argVmGallery.galleryChannelID) <= 0) {
	if (CustomChannels.indexOf(argChannelId) < 0) {
    return "ERROR: this gallery can not be processed. "; // + argVmGallery.galleryChannelID + "/" + CustomChannels;
  }
}	// NeteaseDisallowed_ByChannelId

//*****************************************************************************************//

function parseNeteaseAlbum_WithJsonData_2013(argDataSource, argVmGallery) 
{
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
  var disallowerMsg = NeteaseDisallowed_ByTags(argDataSource);
	if (disallowerMsg)
	{
	  // alert("disallowerMsg: " + disallowerMsg);
		return disallowerMsg;
	}

  // alert("parseNetease_TextAreaPhotoList");
	argVmGallery.galleryName = getTagContent(argDataSource, '<title>', '</title>');
	// argVmGallery.galleryDesc = getTagContent(argDataSource, '.*<div class="c2 clearfix"><h4>', '</h4>.*');
	
	argVmGallery.galleryDesc = getTagContent(argDataSource, '<p class="ep-summary">', '</p>');
	if (argVmGallery.galleryDesc == "")
	{
	  argVmGallery.galleryDesc = getSubContent(argDataSource, '<div class="c2 clearfix"><h4>', false, '</h4>', false);
  }
  // alert("argVmGallery.galleryDesc: " + argVmGallery.galleryDesc);	
	 
	argDataSource = argDataSource.replace(/id="photoList.*"/, 'id="photoList"');
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

	// disallowerMsg = NeteaseDisallowed_ByChannelId(argVmGallery.galleryChannelID);
	// if (disallowerMsg != "")
	// {
	  // alert("disallowerMsg: " + disallowerMsg);
	//	return disallowerMsg;
	// }	

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

function parseNetease_GeneralArticle(argDataSource, argVmGallery) {
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
// Minus.com
//*****************************************************************************************//

function parseMinusAlbum_WithJsonData_2013(argDataSource, argVmGallery) 
{
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

function parseMinusCom_ImageList(argDataSource, argVmGallery) {
  // alert("parseMinusCom_ImageList");
	argVmGallery.galleryName = "Minus.com";
	argVmGallery.centered = true;
	
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
  var today = new Date();
	argVmGallery.galleryName = ""; // "【每日漫画】" + today.getMonth() + "-" + today.getDate();
	argVmGallery.galleryDesc =  "";
	argVmGallery.addImageNo = false;
	argVmGallery.addHeaderFooter = false;
	
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
  var today = new Date();
	argVmGallery.galleryName = ""; // "【GuaiXun】" + (today.getMonth()+1) + "-" + today.getDate();
	argVmGallery.galleryDesc =  "";
	argVmGallery.addImageNo = false;
	argVmGallery.addHeaderFooter = false;
	
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
  var today = new Date();
  argVmGallery.galleryName = "Google Album: " + (today.getMonth()+1) + "-" + today.getDate();  
  $("#divLog").html("");
	argGoogleImageContent = argGoogleImageContent.replace(/googleusercontent.com\/(.*?)=w.*?/gi, "googleusercontent.com/$1=w800#g.jpg");
	
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
  var today = new Date();
  argVmGallery.galleryName = today.getMonth() + "-" + today.getDate();  
  $("#divLog").html("");
  argDataSource = argDataSource.replace(/\n/g, " ");
	argDataSource = argDataSource.replace(/<script .*?>.*?<\/script>/gi, "");
	argDataSource = argDataSource.replace(/<p><img /gi, "<img ");
	argDataSource = argDataSource.replace(/<img .*?src=(.*?)\s.*?>/gi, "\n$1\n");
	argDataSource = argDataSource.replace(/<img .*?src=(.*?)>/gi, "\n$1\n");
	argDataSource = argDataSource.replace(/\s(http.*?)\s/gi, "\n$1\n");
	// argDataSource = argDataSource.replace(/^(http.*?)$/gi, "\n$1\n");
	
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
    // alert("getImageArray_MinusData(): argDataSource is empty  ");
    return;
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
  $.each(lineArray, function (lineNo, line) {
    if (line == null || line == "") {
      return true;  // continue, false means break
    }
	
    var urls = line.match(/(http.*?\.(jpg|jpeg|gif|png))/);	
		if (urls != null){
			if (image != null) 
			{
			  image.imageCaption = caption;
				imageArray.push(image);
				caption = "";
			}
  	  image = new ViewModelImage();
			image.imageUrl = urls[1];
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

//*****************************************************************************************//

function removeUnusedContent(argString)
{
	argString = argString.replace(/\[.*?\]/, "");
	argString = argString.replace(/<a .*?>/, "");
	argString = argString.replace(/<\/a>/, "");
	argString = argString.replace(/<img .*?>/, "");
	return argString;
}	// removeUnusedContent

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