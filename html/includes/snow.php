
<style>


.snow {
  --size: 0.2vw;
  width: var(--size);
  height: var(--size);
  background: #f2f2f2;
  border-radius: 50%;
  position: fixed;
  top: -5vh;
  z-index: 99
}

@keyframes karyagisi {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 110vh, 0);
  }
}
.snow:nth-child(1) {
  --size: 0.4vw;
  --left-ini: 0vw;
  --left-end: -6vw;
  left: 80vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -1s;
}

.snow:nth-child(2) {
  --size: 0.2vw;
  --left-ini: 6vw;
  --left-end: -3vw;
  left: 12vw;
  animation: karyagisi 6s linear infinite;
  animation-delay: -7s;
}

.snow:nth-child(3) {
  --size: 0.2vw;
  --left-ini: 7vw;
  --left-end: -3vw;
  left: 36vw;
  animation: karyagisi 10s linear infinite;
  animation-delay: -3s;
}

.snow:nth-child(4) {
  --size: 0.4vw;
  --left-ini: -9vw;
  --left-end: 6vw;
  left: 100vw;
  animation: karyagisi 14s linear infinite;
  animation-delay: -5s;
}

.snow:nth-child(5) {
  --size: 0.6vw;
  --left-ini: -4vw;
  --left-end: -3vw;
  left: 87vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -9s;
}

.snow:nth-child(6) {
  --size: 0.4vw;
  --left-ini: -9vw;
  --left-end: 2vw;
  left: 90.2vw;
  animation: karyagisi 15s linear infinite;
  animation-delay: -7s;
}

.snow:nth-child(7) {
  --size: 0.2vw;
  --left-ini: 0.2vw;
  --left-end: 2vw;
  left: 55vw;
  animation: karyagisi 8s linear infinite;
  animation-delay: -5s;
}

.snow:nth-child(8) {
  --size: 0.6vw;
  --left-ini: 0.2vw;
  --left-end: -3vw;
  left: 49vw;
  animation: karyagisi 12s linear infinite;
  animation-delay: -10s;
}

.snow:nth-child(9) {
  --size: 0.2vw;
  --left-ini: 7vw;
  --left-end: 9vw;
  left: 83vw;
  animation: karyagisi 9s linear infinite;
  animation-delay: -4s;
}

.snow:nth-child(10) {
  --size: 0.4vw;
  --left-ini: 3vw;
  --left-end: 10vw;
  left: 23vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -8s;
}

.snow:nth-child(11) {
  --size: 0.2vw;
  --left-ini: -7vw;
  --left-end: 5vw;
  left: 2vw;
  animation: karyagisi 8s linear infinite;
  animation-delay: -9s;
}

.snow:nth-child(12) {
  --size: 0.2vw;
  --left-ini: -9vw;
  --left-end: -7vw;
  left: 17vw;
  animation: karyagisi 6s linear infinite;
  animation-delay: -8s;
}

.snow:nth-child(13) {
  --size: 0.2vw;
  --left-ini: -5vw;
  --left-end: -9vw;
  left: 39vw;
  animation: karyagisi 8s linear infinite;
  animation-delay: -9s;
}

.snow:nth-child(14) {
  --size: 0.2vw;
  --left-ini: -4vw;
  --left-end: 6vw;
  left: 87vw;
  animation: karyagisi 15s linear infinite;
  animation-delay: -9s;
}

.snow:nth-child(15) {
  --size: 0.2vw;
  --left-ini: -9vw;
  --left-end: -2vw;
  left: 75vw;
  animation: karyagisi 12s linear infinite;
  animation-delay: -3s;
}

.snow:nth-child(16) {
  --size: 0.6vw;
  --left-ini: 2vw;
  --left-end: -6vw;
  left: 40vw;
  animation: karyagisi 12s linear infinite;
  animation-delay: -5s;
}

.snow:nth-child(17) {
  --size: 0.2vw;
  --left-ini: -0.2vw;
  --left-end: -4vw;
  left: 29vw;
  animation: karyagisi 13s linear infinite;
  animation-delay: -9s;
}

.snow:nth-child(18) {
  --size: 0.6vw;
  --left-ini: -5vw;
  --left-end: 6vw;
  left: 65vw;
  animation: karyagisi 6s linear infinite;
  animation-delay: -3s;
}

.snow:nth-child(19) {
  --size: 0.4vw;
  --left-ini: 4vw;
  --left-end: -4vw;
  left: 30vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -6s;
}

.snow:nth-child(20) {
  --size: 0.2vw;
  --left-ini: 7vw;
  --left-end: 7vw;
  left: 4vw;
  animation: karyagisi 13s linear infinite;
  animation-delay: -3s;
}

.snow:nth-child(21) {
  --size: 0.6vw;
  --left-ini: 2vw;
  --left-end: 9vw;
  left: 15vw;
  animation: karyagisi 12s linear infinite;
  animation-delay: -10s;
}

.snow:nth-child(22) {
  --size: 0.2vw;
  --left-ini: 7vw;
  --left-end: 4vw;
  left: 55vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -4s;
}

.snow:nth-child(23) {
  --size: 0.2vw;
  --left-ini: 4vw;
  --left-end: 6vw;
  left: 45vw;
  animation: karyagisi 12s linear infinite;
  animation-delay: -3s;
}

.snow:nth-child(24) {
  --size: 0.2vw;
  --left-ini: -2vw;
  --left-end: -2vw;
  left: 77vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -8s;
}

.snow:nth-child(25) {
  --size: 0.4vw;
  --left-ini: -7vw;
  --left-end: 10vw;
  left: 59vw;
  animation: karyagisi 14s linear infinite;
  animation-delay: -4s;
}

.snow:nth-child(26) {
  --size: 0.2vw;
  --left-ini: -7vw;
  --left-end: 2vw;
  left: 53vw;
  animation: karyagisi 11s linear infinite;
  animation-delay: -9s;
}

.snow:nth-child(27) {
  --size: 0.2vw;
  --left-ini: 3vw;
  --left-end: -0.2vw;
  left: 36vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -7s;
}

.snow:nth-child(28) {
  --size: 0.4vw;
  --left-ini: -4vw;
  --left-end: 5vw;
  left: 2vw;
  animation: karyagisi 11s linear infinite;
  animation-delay: -10s;
}

.snow:nth-child(29) {
  --size: 0.6vw;
  --left-ini: 4vw;
  --left-end: -7vw;
  left: 83vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -10s;
}

.snow:nth-child(30) {
  --size: 0.2vw;
  --left-ini: 9vw;
  --left-end: 3vw;
  left: 59vw;
  animation: karyagisi 8s linear infinite;
  animation-delay: -6s;
}

.snow:nth-child(31) {
  --size: 0.2vw;
  --left-ini: 2vw;
  --left-end: 0.2vw;
  left: 78vw;
  animation: karyagisi 10s linear infinite;
  animation-delay: -9s;
}

.snow:nth-child(32) {
  --size: 0.2vw;
  --left-ini: 10vw;
  --left-end: -5vw;
  left: 64vw;
  animation: karyagisi 8s linear infinite;
  animation-delay: -1s;
}

.snow:nth-child(33) {
  --size: 0.6vw;
  --left-ini: -0.2vw;
  --left-end: 2vw;
  left: 46vw;
  animation: karyagisi 9s linear infinite;
  animation-delay: -9s;
}

.snow:nth-child(34) {
  --size: 0.2vw;
  --left-ini: -2vw;
  --left-end: 3vw;
  left: 90vw;
  animation: karyagisi 12s linear infinite;
  animation-delay: -10s;
}

.snow:nth-child(35) {
  --size: 0.2vw;
  --left-ini: -9vw;
  --left-end: 5vw;
  left: 94vw;
  animation: karyagisi 8s linear infinite;
  animation-delay: -8s;
}

.snow:nth-child(36) {
  --size: 0.2vw;
  --left-ini: 4vw;
  --left-end: 10vw;
  left: 64vw;
  animation: karyagisi 10s linear infinite;
  animation-delay: -3s;
}

.snow:nth-child(37) {
  --size: 0.4vw;
  --left-ini: -7vw;
  --left-end: -5vw;
  left: 20.2vw;
  animation: karyagisi 12s linear infinite;
  animation-delay: -6s;
}

.snow:nth-child(38) {
  --size: 0.4vw;
  --left-ini: -4vw;
  --left-end: -7vw;
  left: 55vw;
  animation: karyagisi 6s linear infinite;
  animation-delay: -10s;
}

.snow:nth-child(39) {
  --size: 0.6vw;
  --left-ini: -0.2vw;
  --left-end: 10vw;
  left: 95vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -9s;
}

.snow:nth-child(40) {
  --size: 0.4vw;
  --left-ini: -6vw;
  --left-end: 3vw;
  left: 98vw;
  animation: karyagisi 13s linear infinite;
  animation-delay: -3s;
}

.snow:nth-child(41) {
  --size: 0.2vw;
  --left-ini: 7vw;
  --left-end: 7vw;
  left: 56vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -6s;
}

.snow:nth-child(42) {
  --size: 0.2vw;
  --left-ini: -4vw;
  --left-end: -4vw;
  left: 60.2vw;
  animation: karyagisi 12s linear infinite;
  animation-delay: -2s;
}

.snow:nth-child(43) {
  --size: 0.2vw;
  --left-ini: 7vw;
  --left-end: -5vw;
  left: 57vw;
  animation: karyagisi 15s linear infinite;
  animation-delay: -5s;
}

.snow:nth-child(44) {
  --size: 0.2vw;
  --left-ini: 8vw;
  --left-end: -5vw;
  left: 7vw;
  animation: karyagisi 10s linear infinite;
  animation-delay: -1s;
}

.snow:nth-child(45) {
  --size: 0.2vw;
  --left-ini: -5vw;
  --left-end: -2vw;
  left: 60.2vw;
  animation: karyagisi 9s linear infinite;
  animation-delay: -7s;
}

.snow:nth-child(46) {
  --size: 0.2vw;
  --left-ini: 7vw;
  --left-end: -9vw;
  left: 14vw;
  animation: karyagisi 15s linear infinite;
  animation-delay: -3s;
}

.snow:nth-child(47) {
  --size: 0.2vw;
  --left-ini: 0.2vw;
  --left-end: -4vw;
  left: 70.2vw;
  animation: karyagisi 15s linear infinite;
  animation-delay: -1s;
}

.snow:nth-child(48) {
  --size: 0.4vw;
  --left-ini: 10vw;
  --left-end: 4vw;
  left: 55vw;
  animation: karyagisi 11s linear infinite;
  animation-delay: -6s;
}

.snow:nth-child(49) {
  --size: 0.4vw;
  --left-ini: 5vw;
  --left-end: -0.2vw;
  left: 47vw;
  animation: karyagisi 7s linear infinite;
  animation-delay: -1s;
}

.snow:nth-child(50) {
  --size: 0.2vw;
  --left-ini: 4vw;
  --left-end: -4vw;
  left: 76vw;
  animation: karyagisi 9s linear infinite;
  animation-delay: -2s;
}

.snow:nth-child(6n) {
  filter: blur(1px);
}
	
	
	
.santa-cap {
    position: absolute;
    left: -8px;
    top: -4px;
    width: 16px !important;
    transform: rotate(-30deg);
}
	
</style>




<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
	
	