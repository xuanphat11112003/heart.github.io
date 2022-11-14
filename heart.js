$(function () {
    $('h1').click(function(){
       
        $('.hearts').animate({
            opacity:0, 
        },5000)
        $('.hearts').animate({
            display: 'none'
        },5000)
        $('.thu1').animate({
            opacity:1
        },10000)
        $('.thu').animate({
            opacity:1
        },10000)
        $('h1').html('<p>CLICK DÔ LÁ THƯ</p>');
       
    })
    $('.thu1').click(function(){
        $('.thu1').css("transform","rotateX(45deg)")
        $('.thu1').addClass('thu2')
        $('.img>div').css("opacity","1")
        $('h1').html('<p>CLICK THÊM CÁI DÔ LÁ THƯ PHẦN MÀU TRẮNG Á</p>');
    })
    $('.thu').click(function(){
        $('.thu').css("display","none");
        $('.thu1').css("display","none");
        $('.none').css("display","none");
        for(var i=1,j=0,o=0;i <= 7 ;i++,j+=200,o+=5){
            $('.img'+i).animate({
                top: o+'px', 
                left : j+"px",
                width:"10%"
            },1000)
            if(i%2!=0){
                $('.img'+i).addClass('hi')
            }
            else{
                $('.img'+i).addClass('hello')
            }
        }
        $('body').css("background","black")
        $('h2').css("display","block")
        // $('.img1').animate({
        //     top: 0, 
        //     left : "15px"
        // },1000)
    })
        
})

///
