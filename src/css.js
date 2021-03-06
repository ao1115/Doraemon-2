const string = `
.doraemon * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .doraemon *::after,
  .doraemon *::before {
    box-sizing: border-box;
  }
  body {
    background: #d4ecf9;
  }
  .doraemon {
    position: relative;
    margin-top: -50px;
    animation: play linear 600ms infinite alternate;;
  }
 
  .mushroom {
    border: 2px solid #555;
    width: 6px;
    height: 20px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -6px;
    background: #bd8d22;
  }
  .mushroom::before {
    content: "";
    display: block;
    border: 2px solid #555;
    background: #bd8d22;
    width: 20px;
    height: 20px;
    margin-left: -9px;
    border-radius: 20px 20px 0 0;
    height: 10px;
    margin-top: -3px;
  }
  .bamboo {
    background: rgba(162, 171, 176, 0.8);
    width: 100px;
    height: 5px;
    position: absolute;
    left: 50%;
    top: 105px;
    margin-left: -50px;
    border-radius: 30px;
    animation: rotar linear 300ms infinite alternate;
  }
  
  .header {
    position: relative;
  }
  .header .face {
    border: 2px solid black;
    position: absolute;
    top: 120px;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    height: 200px;
    background: #fff;
    border-radius: 50%;
    box-shadow: inset 0px 0px 0 20px #35a1c9, inset 0px 0px 0 22px black; /*给白色的圆加两个阴影，一个是蓝色的脸，一个是蓝色的脸的边框*/
  }
  .eye {
    border: 1px solid black;
    width: 48px;
    height: 48px;
    background: white;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    margin-left: -48px;
    top: 144px;
  }
  .eye.right {
        transform: translateX(48px);
  }
  .eye.left .yuan1 ,.eye.right .yuan1{
    background: black;
    width: 16px;
    height: 24px;
    border-radius: 100%;
    position: absolute;
    top: 14px;
    left: 24px;
  }
  .eye.left .yuan1::before, .eye.right .yuan1::before{
    content: "";
    display: block;
    background: white;
    width: 3px;
    height: 8px;
    border-radius: 100%;
    z-index: 2;
    position: absolute;
    top: 9px;
    left: 7px;
  }
  .eye.right .yuan1{
      position: absolute;
      left: 6px;
  }
  .eye.right:hover{
      height: 52px;
  }
  .eye.right:hover::after {
    content: "";
    display: block;
    border: 2px solid black;
    width: 15px;
    height: 14px;
    border-radius: 14px 15px 0 0;
    height: 7px;
    border-bottom: transparent;
    position: absolute;
    top: 43px;
    left: 16px;
  }
  .eye.right:hover .yuan1{
      display:none
  }
  .nose {
    border: 1px solid black;
    background: #b11735;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    top: 186px;
    margin-left: -20px;
  }
  .nose::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: white;
    position: absolute;
    left: 8px;
    top: 7px;
  }
  .mustache > div {
    width: 60px;
    height: 2px;
    position: absolute;
    top: 86px;
    left: 12px;
    background: black;
  }
  .mustache .b1 {
    margin-top: -6px;
    transform: skewY(20deg);
    transform-origin: bottom right;
  }
  .mustache .b3 {
    margin-top: 8px;
    transform: skewY(-8deg);
    transform-origin: bottom right;
  }
  .mustache.right {
    transform: rotateY(180deg);
  }
  .line {
    background: black;
    height: 20px;
    width: 2px;
    position: absolute;
    left: 50%;
    top: 33px;
  }
  .mouth {
    width: 120px;
    height: 120px;
    border-radius: 0 0 120px 120px;
    height: 60px;
    background: #b11635;
    position: absolute;
    left: 50%;
    margin-left: -60px;
    top: 108px;
    z-index: 3;
    overflow: hidden;
  }
  .mouth::before,
  .mouth::after {
    content: "";
    display: block;
    width: 50px;
    height: 80px;
    background: #ca2533;
    border-radius: 50px 50px 0 0;
  }
  .mouth::before {
    position: absolute;
    left: 56px;
    top: 24px;
    transform-origin: bottom left;
    transform: rotate(-45deg);
  }
  .mouth::after {
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: 24px;
    transform-origin: bottom right;
    transform: rotate(45deg);
  }
  /* 身体部分 */
  .main {
    position: relative;
    top: 320px;
  }
  .abdomen {
    width: 156px;
    height: 172px;
    border: 2px solid black;
    background: #35a1c9;
    position: absolute;
    left: 50%;
    margin-left: -78px;
    border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
    z-index: -3;
    top: -80px;
  }
  .arm {
    width: 50px;
    height: 100px;
    border: 2px solid black;
    background: #35a1c9;
    position: absolute;
    left: 50%;
    top: -78px;
    border-radius: 55px / 85px;
    z-index: -2;
  }
  .arm.left {
    margin-left: -50px;
    transform-origin: bottom left;
    transform: rotate(-50deg);
  }
  .arm.right {
    transform-origin: bottom right;
    transform: rotate(50deg);
  }
  .arm::before {
    content: "";
    display: block;
    width: 60px;
    height: 60px;
    border: 2px solid black;
    background: white;
    border-radius: 84px;
    margin-left: -10px;
    margin-top: -34px;
  }
  .bufanda {
    width: 100px;
    height: 50px;
    background: #a1172e;
    border-radius: 100px / 50px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: -42px;
    z-index: -1;
  }
  .baidu {
    width: 110px;
    height: 70px;
    margin: 0 auto;
    background: white;
    border-radius: 110px / 70px;
    position: relative;
    top: 3px;
    z-index: -3;
  }
  .leg {
    width: 55px;
    height: 85px;
    border: 2px solid black;
    background: white;
    position: absolute;
    left: 50%;
    top: 36px;
    border-radius: 55px / 85px;
    z-index: -4;
  }
  .leg.left {
    margin-left: -50px;
  }
  .cesta {
    width: 60px;
    height: 30px;
    border: 2px solid black;
    position: relative;
    left: 50%;
    margin-left: -30px;
    top: -34px;
    border-radius: 0 0 60px 60px;
    z-index: 10;
  }
  .bell {
    width: 34px;
    height: 34px;
    border: 2px solid black;
    border-radius: 100%;
    background: #f19629;
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -17px;
  }
  .bell::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: black;
    position: absolute;
    right: 0;
    top: 8px;
    left: 0;
    margin: auto;
  }
  .bell::after {
    content: "";
    display: block;
    width: 15px;
    height: 2px;
    background-color: black;
    margin: 0 auto;
    position: relative;
    top: 20px;
  }
  @keyframes rotar {
    0% {
      transform: rotate3D(0, 1, 0, 0deg);
    }
    100% {
      transform: rotate3D(0, 1, 0, 360deg);
    }
  }
  @keyframes play{
    0%{
        top:0px;
    }
    50%{
        top:50px;
    }
    100%{
        top:50px;
    }
}
`
export default string;