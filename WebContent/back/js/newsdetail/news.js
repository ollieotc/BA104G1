$(document).ready(function () {

    $('.btn-filter').on('click', function () {
        var $target = $(this).data('target');
        if ($target != 'all') {
            $('.table tbody tr').css('display', 'none');
            $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
        } else {
            $('.table tbody tr').css('display', 'none').fadeIn('slow');
        }
    });

    $('#checkall').on('click', function () {
        if ($("#mytable #checkall").is(':checked')) {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#mytable input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });
  
// 文章新增成功    
    $("#btnadd").on('click', function() {
    	$item = $( this );

		  $.ajax({
	    		 type:"POST",  //指定http參數傳輸格式為POST 
	    		 contentType:"application/x-www-form-urlencoded;charset=utf-8",
	    		 url:"/BA104G1/NewsdetailServlet?action=getOne_For_Display&newsno=ND0001",   	 //請求目標的url，可在url內加上GET參數，如 www.xxxx.com?xx=yy&xxx=yyy
//	    		 data:text,  //要傳給目標的data
	    		 dataType: "json",
	    		 
	    		//Ajax成功後執行的function，response為回傳的值
	    		 success : function(res){
	     console.log(res.newsno);			 
	    			 swal({
	  		    		    title: '已成功新增',
	  		    		    type:	'success',
	  		    		    timer: 9000
	  		    		}).then(
	  		    		    function (dismiss) {
	  		    		        if (dismiss === 'timer') {
	  		    		            console.log('I was closed by the timer')
	  		    		        }
	  		    		    }
	  		    		)
	    		 },
	    		 error : function(xhr, ajaxOptions, thrownError){
	    			 if($("#newstitle").val() === ''){
	    					$("#newstitle").val().focus();
	    				};
	    				if($("#newsintro").val() === ''){
	    					$("#newsintro").val().focus();
	    				};
	    				
	             }
	    	 }); 
	      });

    
// 提示修改成功
    $("#btnSub").on('click', function() {
    	$item = $( this );
		var seach = $item.parent().find("input.newsno");	
console.log(seach.val());
    	
		  $.ajax({
	    		 type:"POST",  //指定http參數傳輸格式為POST 
	    		 contentType:"application/x-www-form-urlencoded;charset=utf-8",
	    		 url:"/BA104G1/NewsdetailServlet?action=getOne_For_Display&newsno="+seach.val(),   	 //請求目標的url，可在url內加上GET參數，如 www.xxxx.com?xx=yy&xxx=yyy
//	    		 data:text,  //要傳給目標的data
	    		 dataType: "json",
	    		 
	    		//Ajax成功後執行的function，response為回傳的值
	    		 success : function(res){
	     console.log(res.newsno);			 
	    			 swal({
	  		    		    title: '已成功修改',
	  		    		    type:	'success',
	  		    		    timer: 9000
	  		    		}).then(
	  		    		    function (dismiss) {
	  		    		        if (dismiss === 'timer') {
	  		    		            console.log('I was closed by the timer')
	  		    		        }
	  		    		    }
	  		    		)
	    		 },
	    		 error : function(xhr, ajaxOptions, thrownError){
	                 alert(xhr.status+"\n"+thrownError);
	             }
	    	 }); 
	      });

    
// 查詢詳細資料 AJAX方法
    $(".clickDetail").on('click', function() {
    	$(".detailBack").html("訂單申訴內容");
	     $(".newsNoDe").html('');
	     $(".newsFti").html('');
	     $(".newsIntro").html('');
	     $(".newstime").html('');
	     $(".reptime").html('');
	     $(".empNoFor").html('');
	     $(".newsStatt").html('');
	     $(".newsPiccc").attr({'src' : "",});
	     
	     $item = $( this );
		  var seach = $item.parent().find("input.complainNoDetail");
		  
		  $.ajax({
	    		 type:"POST",  //指定http參數傳輸格式為POST 
	    		 contentType:"application/x-www-form-urlencoded;charset=utf-8",
	    		 url:"/BA104G1/NewsdetailServlet?action=getOne_For_Display&newsno="+seach.val(),   	 //請求目標的url，可在url內加上GET參數，如 www.xxxx.com?xx=yy&xxx=yyy
//	    		 data:text,  //要傳給目標的data
	    		 dataType: "json",
	    		 
	    		//Ajax成功後執行的function，response為回傳的值
	    		 success : function(res){
		    	     $(".detailBack").html("最新消息 - "+ res.newsno +" : 【 "+ res.status+ " 】");
		    	     $(".newsFti").html(res.newstitle);
		    	     $(".newsIntro").html(res.newsintro);
		    	     $(".newstime").html(res.newsdate);
		    	     $(".empNoFor").html(res.empno);
		    	 
		    	     var cover ="/BA104G1/newsdetail/newsimgread.do?newsno="+ res.newsno;
		    	     $(".newsPiccc").attr({'src' : cover,});	
	    		 },
	    		 error : function(xhr, ajaxOptions, thrownError){
	                 alert(xhr.status+"\n"+thrownError);
	             }
	    	 }); 
	      });
// 查詢詳細資料 AJAX方法

// 刪除
    $(".deleee").on('click', function() {
	     $item = $( this );
		 var seach = $item.parent().find("input.newsNo");	  

		  $.ajax({
	    		 type:"POST",  //指定http參數傳輸格式為POST 
	    		 contentType:"application/x-www-form-urlencoded;charset=utf-8",
	    		 url:"/BA104G1/NewsdetailServlet?action=delete&newsno="+seach.val(),   	 //請求目標的url，可在url內加上GET參數，如 www.xxxx.com?xx=yy&xxx=yyy
//	    		 data:text,  //要傳給目標的data
	    		 dataType: "json",
	    		 
	    		//Ajax成功後執行的function，response為回傳的值
	    		 success : function(res){
	    			 swal({
	  		    		    title: res+': 已成功刪除',
	  		    		    type:	'success',
	  		    		    timer: 4500
	  		    		}).then(
	  		    		    function (dismiss) {
	  		    		        if (dismiss === 'timer') {
	  		    		            console.log('I was closed by the timer')
	  		    		        }
	  		    		    }
	  		    		)
	    		 },
	    		 error : function(xhr, ajaxOptions, thrownError){
	                 alert(xhr.status+"\n"+thrownError);
	             }
	    	 }); 
	      });
// 刪除
    
    


// 換圖預覽
    $("#uploadImage").change(function(){
    	$('#img').attr('src' , '');
	    readImage( this );   
	});
    
    
    function readImage(input) {
      if ( input.files && input.files[0] ) {
        var size = Math.round(input.files[0].size / 1024 / 1024);
        if (size > 3) {
            alert('图片大小不得超过3M,請重新上傳');
            input.files.remove();
        } else{
	        var FR= new FileReader();
	        FR.onload = function(e) {
		          //e.target.result = base64 format picture
		          $('#img').attr( "src", e.target.result );
		          convertImgDataToBlob(e.target.result);
	        };       
	      };
        FR.readAsDataURL( input.files[0] );
      };
    };
    
    
//    $('#img').click(function(){
//        $(this).toggleClass('min');
//        $(this).toggleClass('max');
//        });




      $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
        
      $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
            return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
      });
        
      $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
        $(this).attr('visible','false');
      });

      $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
        $(this).attr('visible','true');
      });

      var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

      if(jobCount == '0') {$('.no-result').show();}
        else {$('.no-result').hide();}
    
      });  

});
