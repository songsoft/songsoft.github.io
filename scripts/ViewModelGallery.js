// yjs: 11/21/2013

function ViewModelGallery(argStyleNo)
{
  var self = this;
  self.galleryName = "";
  self.galleryChannelID = "";
  self.galleryDesc = "";
  self.styleNo = argStyleNo;
	self.imageBoxStyle = "style='border:2px solid cyan;padding:20px;width:90%;'";
  self.imageStyle = "style='border:2px solid green;'";
	self.divider = "";
	self.imageTitleStyle = "";
	self.imageCaptionStyle = "";
	self.prefix = "";
	self.objectUnit = "图";
	self.centered = false;
	self.pageSize = 100;
	self.addImageNo = true;
	self.addHeaderFooter = true;
	self.footer = "";
	if (argStyleNo == -1)
	{
		self.styleNo = (new Date()).getDay();
  }

	if (ImageBoxStyleArray != undefined && ImageBoxStyleArray != null)
	{
		if (argStyleNo >= 0 && argStyleNo <= ImageBoxStyleArray.length-1)
		{
		  self.imageBoxStyle = ImageBoxStyleArray[self.styleNo];
		}
  	else
		{
  	  self.imageBoxStyle = ImageBoxStyleArray[0];
		}
	}	
	
	if (ImageStyleArray != undefined && ImageStyleArray != null) 
	{
		if (argStyleNo >= 0 && argStyleNo <= ImageStyleArray.length-1)
		{
		  self.imageStyle = ImageStyleArray[self.styleNo];
		}
		else
		{
		  self.imageStyle = ImageStyleArray[0];
		}
	}

	if (DividerArray != undefined && DividerArray != null)
	{
		if (argStyleNo >= 0 && argStyleNo <= DividerArray.length-1)
		{
		  self.divider = DividerArray[self.styleNo];
		}
		else
		{
		  self.divider = DividerArray[0];
		}
	}
	
  self.imageList = [];
  self.htmlOutput = function () 
	{
		var outputPageSize = self.pageSize;
		var outputPageTotal = 1;
		var totalImages = self.imageList.length;
		if (totalImages > (self.pageSize + self.pageSize / 3))
		{
		  outputPageTotal = Math.ceil(totalImages / self.pageSize);
			outputPageSize = Math.ceil(totalImages / outputPageTotal);
		}
		else
		{
		  outputPageSize = self.imageList.length;
		}

		var divBegin = "";
		var divEnd = "";
		if (self.addHeaderFooter && BackgroundImageArray != undefined && $.isArray(BackgroundImageArray))
		{
		  var localBackgroundImageUrl = BackgroundImageArray[self.styleNo];
			divBegin += "<body bgcolor='white' background='" + localBackgroundImageUrl + "' >\n";
			divBegin += "<div style='background:white;background-image: url(" + localBackgroundImageUrl + ");padding:12px;'>";
			divEnd = "</div>";
		}

	  var strHtml = "";
		var preTitle = "";
		var preCaption = "";
		var partNo = 0;
		var partContent = "";

		$.each(self.imageList, function (index, image)
		{
			if (self.addHeaderFooter && index % outputPageSize == 0)
			{
				partNo++;
			  if (partNo > 1)
				{
				  strHtml += partContent + "\n";
				  if (self.centered) { strHtml += "</center>"; }
				  strHtml += "\n\n\n";
				}
			  partContent = "";
				partContent += (self.prefix == "") ? "" : self.prefix + " ";
				partContent += self.galleryName;
				if (totalImages > 0)
				{
					partContent += " (" + totalImages + " " + self.objectUnit + ")";
					if (outputPageTotal>1)
					{
					  partContent += " -- 之" + partNo;
					}
				}
				partContent += "\n" + divBegin + "\n";
				if (self.centered) { partContent += "<center>\n"; }
				partContent += "<p></p>\n";

				if (self.galleryDesc != "")
				{
					partContent += "<span style='color:#A71914;background-color:#FAF1FD;margin:8px;padding:8px;display:block'>" + self.galleryDesc + "</span>\n<p></p>\n";
				}
		  }

			partContent += "<div " + self.imageBoxStyle + ">\n<center>\n";
			var imageNo = self.addImageNo ? (index + 1) : 0;
			if (image.objectType == "youtube")
			{
			  partContent += "\n<p></p>" + buildYoutubeTag(image.imageUrl, imageNo, self.imageStyle);
			}
			else
			{
			  partContent += "\n<p></p>" + buildImageTag(image.imageUrl, imageNo, self.imageStyle);
			}
			if (image.imageTitle != "" && image.imageTitle != preTitle) 
			{
				partContent += "<b " + self.imageTitleStyle + ">" + removeHtml(image.imageTitle) + "</b><p></p>\n";
				preTitle = image.imageTitle;
			}
			if (image.imageCaption != "" && image.imageCaption != preCaption) 
			{
			  var captionHtml = "<span" + self.imageCaptionStyle + ">" + removeHtml(image.imageCaption) + "</span><p></p>\n";
			  if (image.imageCaption.length > 100)
				{
				  captionHtml = "<p style='text-align:left'>" + captionHtml + "</p>";
				}
				partContent += captionHtml;
				preCaption = image.imageCaption;
			}
			if (image.imageEndingText != "") 
			{
				partContent +=  image.imageEndingText + "\n";
			}
			partContent += "</center>\n</div>\n\n" + self.divider + "<p>\n";
		})
		
		strHtml += partContent + "\n";
		strHtml += self.footer + "\n";
    if (self.centered) { strHtml += "\n</center>\n"; }
		strHtml += divEnd + "\n";

		return strHtml;
  }
}	// function ViewModelGallery(argStyleNo)