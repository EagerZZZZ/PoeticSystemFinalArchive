    // reference: http://www.jq22.com/webqd97


    $.fn.autotype = function() {
        var $text = $(this);
        console.log('this', this);
        var str = $text.html(); //返回被选 元素的内容
        var index = 0;
        var x = $text.html('');
        //$text.html()和$(this).html('')有区别
        var timer = setInterval(function() {
            //substr(index, 1) 方法在字符串中抽取从index下标开始的一个的字符
            var current = str.substr(index, 1);
            if (current == '<') {
                //indexOf() 方法返回">"在字符串中首次出现的位置。
                index = str.indexOf('>', index) + 1;
            } else {
                index++;
            }
            //console.log(["0到index下标下的字符",str.substring(0, index)],["符号",index & 1 ? '': '']);
            //substring() 方法用于提取字符串中介于两个指定下标之间的字符
            $text.html(str.substring(0, index) + (index & 1 ? '': ''));
            if (index >= str.length) {
                clearInterval(timer);
            }
        },
        12); //这个是用来控制速度的，数值越小打字机越快
    };
    
    
    
    $(document).ready(function(){
    
  

    $('#keyword1').hover(function(){
        $("#hidden1").autotype();
        $("#keyword1").css("font-family", "font_en_italic");
        $("#keyword1").css("font-size", "94%");
        $("#hidden1").css("font-size", "94%");
        $('#hidden1').css("display", "inline");
        $('#cover_image1').css("display", "block");
        $('#superscript1').css("opacity", "0");
        }, function(){
        $("#keyword1").css("font-family", "'Work Sans', sans-serif");
        $('#keyword1').css("letter-spacing", "0em");
        $("#keyword1").css("font-size", "100%");
        $('#hidden1').css("display", "none");
        $('#superscript1').css("opacity", "1");
        $('#cover_image1').css("display", "none");
       
    });

    $('#superscript1').hover(function(){
        $("#hidden1").autotype();
        $("#keyword1").css("font-family", "font_en_italic");
        $('#hidden1').css("display", "inline");
        $('#superscript1').css("opacity", "0");
        $("#keyword1").css("font-size", "94%");
        $("#hidden1").css("font-size", "94%");
        $('#hidden1').css("display", "inline");
        $('#cover_image1').css("display", "block");
        
        }, function(){
        $("#keyword1").css("font-family", "'Work Sans', sans-serif");

        $('#hidden1').css("display", "none");
        $('#superscript1').css("opacity", "1");
        $("#keyword1").css("font-size", "100%");
        $('#hidden1').css("display", "none");
        $('#cover_image1').css("display", "none");
       
    });
    

    $('#keyword2').hover(function(){
        $("#hidden2").autotype();
        $("#keyword2").css("font-family", "font_en_italic");
        $("#keyword2").css("font-size", "94%");
        $("#hidden2").css("font-size", "94%");
        $('#hidden2').css("display", "inline");
        $('#superscript2').css("opacity", "0");
        $('#cover_image2').css("display", "block");
        }, function(){
        $("#keyword2").css("font-family", "'Work Sans', sans-serif");
        $("#keyword2").css("font-size", "100%");
        $('#hidden2').css("display", "none");
        $('#superscript2').css("opacity", "1");
        $('#cover_image2').css("display", "none");
    });

    $('#superscript2').hover(function(){
        $("#hidden2").autotype();
        $("#keyword2").css("font-family", "font_en_italic");
        $("#keyword2").css("font-size", "94%");
        $("#hidden2").css("font-size", "94%");
        $('#hidden2').css("display", "inline");
        $('#superscript2').css("opacity", "0");
        $('#cover_image2').css("display", "block");
        }, function(){
        $("#keyword2").css("font-family", "'Work Sans', sans-serif");
        $('#hidden2').css("display", "none");
        $('#superscript2').css("opacity", "1");
        $('#cover_image2').css("display", "none");
        $("#keyword2").css("font-size", "100%");
    });
    

    $('#keyword3').hover(function(){
        $("#hidden3").autotype();
        $("#keyword3").css("font-family", "font_en_italic");
        $('#hidden3').css("display", "inline");
        $("#keyword3").css("font-size", "94%");
        $("#hidden3").css("font-size", "94%");
        $('#superscript3').css("opacity", "0");
        $('#cover_image3').css("display", "block");
        }, function(){
        $("#keyword3").css("font-family", "'Work Sans', sans-serif");
        $("#keyword3").css("font-size", "100%");
        $('#hidden3').css("display", "none");
        $('#superscript3').css("opacity", "1");
        $('#cover_image3').css("display", "none");
    });

    $('#superscript3').hover(function(){
        $("#hidden3").autotype();
        $("#keyword3").css("font-family", "font_en_italic");
        $("#keyword3").css("font-size", "94%");
        $("#hidden3").css("font-size", "94%");
        $('#cover_image3').css("display", "block");
        $('#hidden3').css("display", "inline");
        $('#superscript3').css("opacity", "0");
        }, function(){
        $("#keyword3").css("font-family", "'Work Sans', sans-serif");
        $("#keyword3").css("font-size", "100%");
        $('#hidden3').css("display", "none");
        $('#superscript3').css("opacity", "1");
        $('#cover_image3').css("display", "none");
    });

    $('#keyword4').hover(function(){
        $("#hidden4").autotype();
        $("#keyword4").css("font-family", "font_en_italic");
        $('#hidden4').css("display", "inline");
        $("#keyword4").css("font-size", "94%");
        $("#hidden4").css("font-size", "94%");
        $('#superscript4').css("opacity", "0");
        $('#cover_image4').css("display", "block");
        }, function(){
        $("#keyword4").css("font-family", "'Work Sans', sans-serif");
        $("#keyword4").css("font-size", "100%");
        $('#hidden4').css("display", "none");
        $('#superscript4').css("opacity", "1");
        $('#cover_image4').css("display", "none");
    });

    $('#superscript4').hover(function(){
        $("#hidden4").autotype();
        $("#keyword4").css("font-family", "font_en_italic");
        $("#keyword4").css("font-size", "94%");
        $("#hidden4").css("font-size", "94%");
        $('#cover_image4').css("display", "block");
        $('#hidden4').css("display", "inline");
        $('#superscript4').css("opacity", "0");
        }, function(){
        $("#keyword4").css("font-family", "'Work Sans', sans-serif");
        $("#keyword4").css("font-size", "100%");
        $('#hidden4').css("display", "none");
        $('#superscript4').css("opacity", "1");
        $('#cover_image4').css("display", "none");
    });

    $('#keyword5').hover(function(){
        $("#hidden5").autotype();
        $("#keyword5").css("font-family", "font_en_italic");
        $('#hidden5').css("display", "inline");
        $("#keyword5").css("font-size", "94%");
        $("#hidden5").css("font-size", "94%");
        $('#superscript5').css("opacity", "0");
        $('#cover_image5').css("display", "block");
        }, function(){
        $("#keyword5").css("font-family", "'Work Sans', sans-serif");
        $("#keyword5").css("font-size", "100%");
        $('#hidden5').css("display", "none");
        $('#superscript5').css("opacity", "1");
        $('#cover_image5').css("display", "none");
    });

    $('#superscript5').hover(function(){
        $("#hidden5").autotype();
        $("#keyword5").css("font-family", "font_en_italic");
        $("#keyword5").css("font-size", "94%");
        $("#hidden5").css("font-size", "94%");
        $('#cover_image5').css("display", "block");
        $('#hidden5').css("display", "inline");
        $('#superscript5').css("opacity", "0");
        }, function(){
        $("#keyword5").css("font-family", "'Work Sans', sans-serif");
        $("#keyword5").css("font-size", "100%");
        $('#hidden5').css("display", "none");
        $('#superscript5').css("opacity", "1");
        $('#cover_image5').css("display", "none");
    });
    

    $('#keyword6').hover(function(){
        $("#hidden6").autotype();
        $("#keyword6").css("font-family", "font_en_italic");
        $('#hidden6').css("display", "inline");
        $("#keyword6").css("font-size", "94%");
        $("#hidden6").css("font-size", "94%");
        $('#superscript6').css("opacity", "0");
        $('#cover_image6').css("display", "block");
        }, function(){
        $("#keyword6").css("font-family", "'Work Sans', sans-serif");
        $("#keyword6").css("font-size", "100%");
        $('#hidden6').css("display", "none");
        $('#superscript6').css("opacity", "1");
        $('#cover_image6').css("display", "none");
    });

    $('#superscript6').hover(function(){
        $("#hidden6").autotype();
        $("#keyword6").css("font-family", "font_en_italic");
        $('#hidden6').css("display", "inline");
        $('#superscript6').css("opacity", "0");
        $("#keyword6").css("font-size", "94%");
        $("#hidden6").css("font-size", "94%");
        $('#cover_image6').css("display", "block");
        }, function(){
        $("#keyword6").css("font-family", "'Work Sans', sans-serif");
        $('#hidden6').css("display", "none");
        $('#superscript6').css("opacity", "1");
        $("#keyword6").css("font-size", "100%");
        $('#cover_image6').css("display", "none");
    });

    $('#keyword7').hover(function(){
        $("#hidden7").autotype();
        $("#keyword7").css("font-family", "font_en_italic");
        $('#hidden7').css("display", "inline");
        $("#keyword7").css("font-size", "94%");
        $("#hidden7").css("font-size", "94%");
        $('#superscript7').css("opacity", "0");
        $('#cover_image7').css("display", "block");
        }, function(){
        $("#keyword7").css("font-family", "'Work Sans', sans-serif");
        $("#keyword7").css("font-size", "100%");
        $('#hidden7').css("display", "none");
        $('#superscript7').css("opacity", "1");
        $('#cover_image7').css("display", "none");
    });

    $('#superscript7').hover(function(){
        $("#hidden7").autotype();
        $("#keyword7").css("font-family", "font_en_italic");
        $("#keyword7").css("font-size", "94%");
        $("#hidden7").css("font-size", "94%");
        $('#cover_image7').css("display", "block");
        $('#hidden7').css("display", "inline");
        $('#superscript7').css("opacity", "0");
        }, function(){
        $("#keyword7").css("font-family", "'Work Sans', sans-serif");
        $("#keyword7").css("font-size", "100%");
        $('#cover_image7').css("display", "none");
        $('#hidden7').css("display", "none");
        $('#superscript7').css("opacity", "1");
    });
    

    $('#keyword8').hover(function(){
        $("#hidden8").autotype();
        $("#keyword8").css("font-family", "font_en_italic");
        $('#hidden8').css("display", "inline");
        $("#keyword8").css("font-size", "94%");
        $("#hidden8").css("font-size", "94%");
        $('#superscript8').css("opacity", "0");
        $('#cover_image8').css("display", "block");
        }, function(){
        $("#keyword8").css("font-family", "'Work Sans', sans-serif");
        $("#keyword8").css("font-size", "100%");
        $('#hidden8').css("display", "none");
        $('#superscript8').css("opacity", "1");
        $('#cover_image8').css("display", "none");
    });

    $('#superscript8').hover(function(){
        $("#hidden8").autotype();
        $("#keyword8").css("font-family", "font_en_italic");
        $('#hidden8').css("display", "inline");
        $('#superscript8').css("opacity", "0");
        $("#keyword8").css("font-size", "94%");
        $("#hidden8").css("font-size", "94%");
        $('#cover_image8').css("display", "block");
        }, function(){
        $("#keyword8").css("font-family", "'Work Sans', sans-serif");
        $('#hidden8').css("display", "none");
        $('#superscript8').css("opacity", "1");
        $("#keyword8").css("font-size", "100%");
        $('#cover_image8').css("display", "none");
    });
    

    

    
    
    
    
    });
    
    

