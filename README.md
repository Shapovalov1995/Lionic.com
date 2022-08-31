# lionic.com 
Прибыльные решения для вашего бизнеса 





.btn {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;

  color: var(--color-white-light);
  padding: 15px 35px;
  background-color: var(--color-blue-regular);
  border-radius: 4px;

  transition-duration: 0.3s;
  transition-property: transform;
}

.btn:hover {
  transform: scale(0.9);
}


----------------


.btn::before {
  content: "";
  position: absolute;
  transform: scaleX(0);
  outline: 2px solid var(--color-blue-light);
  
 
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: inherit;
  transform: scale(1);
  opacity: 0;
  

}

.btn:hover::before {
  transition: var(--transition-normal);
  transform: scale(1);
  opacity: 1;
  top: -4px;
  right: -4px;
  bottom:-4px;
  left: -4px;
  
}

-------------

.btn {

 


  transition: var(--transition-normal);
 
 
  background-position: 100% 0;
  background-size: 200% 200%;
  
  

  background-color: var(--color-blue-regular);
  background-image: linear-gradient(
   
  );
  background-image: -o-linear-gradient(
  
  );
  background-image: -moz-linear-gradient(
 
  );
  background-image: -webkit-linear-gradient(
    45deg,
    #002878 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-image: -ms-linear-gradient(
  
  );
}

.header__btn:hover {
  -webkit-box-shadow: 0 0 4px #333;
  -moz-box-shadow: 0 0 4px #333;
  -o-box-shadow: 0 0 4px #333;
  box-shadow: 0 0 4px #333;
  background-position: 0 0;
}
.header__btn:hover,
.header__btn:active,
.header__btn:focus {
  color: #fff;
  text-shadow: 0 1px 2px #333;
}


-------




a.button1 {
  position: relative;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-shadow: -1px -1px #000;
  user-select: none;
  padding: .8em 2em;
  outline: none;
  background-color: #000;
  background-image: linear-gradient(45deg, rgba(255,255,255,.0) 30%, rgba(255,255,255,.8), rgba(255,255,255,.0) 70%), radial-gradient(190% 100% at 50% 0%, rgba(255,255,255,.7) 0%, rgba(255,255,255,.5) 50%, rgba(0,0,0,0) 50%);
  background-repeat: no-repeat;
  background-size: 200% 100%, auto;
  background-position: 200% 0, 0 0;
  box-shadow: rgba(0,0,0,.3) 0 2px 5px;
} 
a.button1:active {
  top: 1px;
  box-shadow: none;
}
a.button1:hover {
  transition: .5s linear;
  background-position: -200% 0, 0 0;
}