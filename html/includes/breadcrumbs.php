<div class="pagination-page mb-3">
	<div class="row">
		<div class="col-lg-6">
			<div class="breadcrumb-style">
				<ul class="ps-0">
					<?php
						if($location = substr(dirname($_SERVER['PHP_SELF']), 1))
							$dirlist = explode('/', $location);
						else
							$dirlist = array();

						$count = array_push($dirlist, basename($_SERVER['PHP_SELF']));

						$address = 'https://'.$_SERVER['HTTP_HOST'];

						echo '<li><a href="'.$address.'">Home</a></li>';

						for($i = 0; $i < $count; $i++)
							echo '<li><a class="bread_crumb" href="'.($address .= '/'.$dirlist[$i]).'">'.$dirlist[$i].'</a></li>';
					?>
				</ul>
			</div>						
		</div>
		<!--<div class="col-12 col-sm-6">
			<div class="share-event float-sm-end">
				<ul class="ps-0 mb-0">
                    <li><a href="https://www.facebook.com/chandigarhuniversitygharuan" target="_blank"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="https://www.twitter.com/chandigarh_uni" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/school/chandigarh-university/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/chandigarhuniversity" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/user/chandigarhuniversity" target="_blank"><i class="fab fa-youtube"></i></a></li>
				</ul>
			</div>
		</div>-->
	</div>
</div>





			