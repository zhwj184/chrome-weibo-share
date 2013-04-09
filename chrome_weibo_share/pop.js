

window.onload = function() {
		chrome.tabs.getSelected(function(currentWindow){ 
			var title = currentWindow.title; 
			var url = currentWindow.url;
			var ap=document.createElement('iframe');  
			
			var param = {
				url:location.href,
				type:'6',
				count:'', /**是否显示分享数，1显示(可选)*/
				appkey:'', /**您申请的应用appkey,显示分享来源(可选)*/
				pic:'', /**分享图片的路径(可选)*/
				ralateUid:'', /**关联用户的UID，分享微博会@该用户(可选)*/
				language:'zh_cn', /**设置语言，zh_cn|zh_tw(可选)*/
				rnd:new Date().valueOf()
			}
			var temp = [];
			for( var p in param ){
				temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
			}
			
			var url = "http://hits.sinajs.cn/A1/weiboshare.html?' + temp.join('&') + '" + '&title=' + encodeURIComponent(title || '') + " " + url;
			//alert(url);
			
			ap.setAttribute('src',url);   		
			ap.setAttribute('allowTransparency','true');  
			ap.setAttribute('frameborder','0');   
			ap.setAttribute('scrolling','0');   
			ap.setAttribute('width','32');   
			ap.setAttribute('height','32');   		
			document.body.appendChild(ap);
		});
};


