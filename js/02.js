// JavaScript Document
/*

var box=1;

do{                //先运行，在判断的循环体
	alert(box);    //打印1 ，然后打印2，3,4,5
	box++;         //box=2
}while(box<=5)     //判断2<=5,在运行box++；
                   //当while判断为false的时候，退出循环。
                   //当while判断为true的时候，执行循环，
                   //如果条件不满足，至少执行一次
                   //切记:循环体的判断要想好，不然可能会出现死循环。

var box=1;
while(box<=5){   //先判断在运行的循环体
	alert(box);
	box++;
}

for (var box=1; box<=5; box++) {   //第一步 声明变量box=1
	alert(box);                     //第二步，判断box<=5，如果返回true执行第三部，否则退出
	}                               //第三步，alert(box),输出box
                                    //第四步，box++类增2
                                     //第五步，去执行第二步，直到判断为false。

//for in语句是一种精准迭代语句，枚举对象属性
var box={
	'name':'王成凯',
	'age':28,
	'height':175
};
for(var x in box){
alert(x);
}

break和continue语句
for(var box=1;box<=10;box++){
	if(box==5) break;
	document.write(box+'<br/>');
}
*/

for(var box=1;box<=10;box++){
	if(box==5) continue;
	document.write(box+'<br/>');
}