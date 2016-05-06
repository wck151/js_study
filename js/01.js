// JavaScript Document
/*
var box=100;//单行语句
var age=20;

{                      //用花括号的语句集合，叫做复合语句，都作为一条语句处理。
	var height=200;     //复合语句一般称为代码块
	var width=300;
}
var box=100;   //常用
if(box>50)alert(box); //if里面的括号，返回的结果转换成布尔值是ture的时候，则执行后面一条语句，否则不执行。


var box=100; //if语句的表达式如果返回的false，只会不执行后面的一条语句
if(box>50);  //第二条语句，和if语句无关，所以会执行。
alert(box)
alert('不管if是true还是false，都会执行')


var box=100
if(box>50);{//这是一条符合语句，被当做一条语句来对待了，代码块的功能体现出来了。
alert(box);
alert('不管呢的if是true还是false，我都会执行到！')
}

var box=100;   //常用
if("lee"){  //123会自动转换为true，0转化为false。"lee"转成了true。
	alert(box);
}


var box=100;
if(box>50){
	alert('box大于50')
}else{
	alert('box小于50')
}

var box=49;
if(box>=50){
	alert('甲')
}else if(box>=90){
	alert('乙')
}else if(box>=80){
	alert('丙')
}else if(box>=70){
	alert('丁')
}else if(box>=60){
	alert('及格')
}else{
	alert('不及格')
}

*/


var box=1;
switch(box){   //switch(box)  box就是要比较的变量
    case 1:    //case 1:相当于if语句里的（box==1），也就是：如果box是1的话，就...
      alert('one');
      break;   //break中途退出，防止穿透
    case 2:    //if(box==2)
      alert('two')
      break;
    case 3:
      alert('three')
      break;
    default:     //相当于if语句的else
      alert('出错！')
}
