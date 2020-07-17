$('.show-more').on('click', function() {
    for(var i=0; i<4; i++){
    $('#row-more').append(`
        <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="single_place">
                                <div class="thumb">
                                    <img src="img/place/cali.jpg" alt="">
                                    <a href="#" class="prise">10.000.000 VNĐ</a>
                                </div>
                                <div class="place_info">
                                    <a href="destination_details.html"><h3>California</h3></a>
                                    <p>Hoa Kỳ</p>
                                    <div class="rating_days d-flex justify-content-between">
                                        <span class="d-flex justify-content-center align-items-center">
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i> 
                                             <i class="fa fa-star"></i>
                                             <a href="#">(20 Đánh giá)</a>
                                        </span>
                                        <div class="days">
                                            <i class="fa fa-clock-o"></i>
                                            <a href="#">5 Ngày</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single_place">
                                <div class="thumb">
                                    <img src="img/place/hoian.jpg" alt="">
                            <a href="#" class="prise">5.000.000 VNĐ</a>
                        </div>
                        <div class="place_info">
                            <a href="destination_details.html"><h3>Hội An</h3></a>
                            <div>Việt Nam</div>
                            <div class="rating_days d-flex justify-content-between">
                                <span class="d-flex justify-content-center align-items-center">
                                     <i class="fa fa-star"></i> 
                                     <i class="fa fa-star"></i> 
                                     <i class="fa fa-star"></i> 
                                     <i class="fa fa-star"></i> 
                                     <i class="fa fa-star"></i>
                                     <a href="#">(20 Đánh giá)</a>
                                </span>
                                <div class="days">
                                    <i class="fa fa-clock-o"></i>
                                    <a href="#">3 Ngày</a>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                        
		`
        );
    }
  });

  $('.btn-send').on('click', function() {
      alert("Cảm ơn bạn đã gửi liên hệ cho chúng tôi");
   });
   
   $('.newsletter_btn').on('click', function() {
    alert("Đăng ký thành công !!!");
 });
