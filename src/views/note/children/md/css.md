###### 1、一行显示  white-space: nowrap

###### 2、首行缩进： text-indent：2em

###### 3、图片垂直对齐： vertical-align： center/top/bottom

###### 4、盒子大小包含边框： box-sizing： border-box；

###### 5、文本溢出显示小点： text-overflow：ellipsis

###### 6、设置图片大小可以设置 最大宽度 和最小宽度，图片会等比例缩放

###### 7、撑满父级元素： weight：-webkit-fill-available（必须是块级元素）

###### 8、宽度根据内容自适应：width：fit-coontent   --- min-content  max-content   ---  盒子居中

###### 9、背景裁切： 只显示在内容区域： background-clip：content-box  显示到padding  padding-box  覆盖到边框： border-box

###### 10、背景图片固定：  background-attachment： fixed

###### 11、背景图片完全显示： background-size：contain

###### 12、渐变色： background：linear-gradient（to left， 颜色1， 颜色2 .。。。。。。）  径向渐变  radial-gradient（颜色。。。）

###### 13、渐变色标志位  就是指定渐变开始的位置 在颜色后面指定

###### 14、使用style.cssText  给元素设置style：document.getElementById("d1").style.cssText = "color:red; font-size:13px;";

###### 15、元素前后添加元素 ::after ::before   必须有content  content是要拼接的内容   content: attr（属性名）可以获取属性的值，拼接  		自定义属性 自有属性都可以获取

###### 16、可以使用伪元素设置渐变的下边框  

###### 使用::after设置一个1px的元素 就可以把他设置问边框，

###### 使用before可以设置提示文字 当获取焦点显示    

###### .div:hover::before可以使用伪元素清除浮动  空的伪元素

######  添加display:block   clear：both 清除浮动   触发BFC   overflow ：hidden



###### 17、背景颜色填充范围： background-clip：content-box：只填充内容区域

###### 18、围绕的形状： shape-outside： margin-box  围绕外边距

###### 		shape-outside： polygon（环绕的 x y 坐标，多个坐标用逗号隔开）



###### 19、形状：

###### 		圆形：clip-path： circle（50%， at  x轴位置， y轴位置） 不写参数就是一个圆形

###### 		椭圆形： clip-path： ellipse（x ， y）单位是百分比



###### 20、绘制多边形： clip-path：polygon（写多个点的x坐标 y坐标， 多个点用逗号隔开，最后会根据点形成多边形）

###### 21、伪元素操作： ul li:hover img { color: red}  当li获取到焦点的时候，里面的img颜色变为红色

###### 22、弹性盒子

###### 		display： flex;

###### 23、水平排列：从左到右  flex-direction： row  从右到左： row-reverse

###### 24、垂直排列： flex-direction： colum， 从下到上  column-reverse

###### 25、换行处理：flex-wrap：wrap， 从下往上折行  wrap-reverse

###### 		简写属性：flex-flow：row， wrap；

###### 26、主轴，交叉轴： 主轴可以是水平的可以是垂直的，其余 的就是交叉轴

###### 27、主轴的排列方式

###### 		justify-content：flex-start；从主轴的开始进行排列   flex-end 主轴的结束位置开始排列   --- 注意主轴的方向，

###### 		主轴居中：  center ，平均分布 space-beteeen ---左右顶满，中间平分， space-around： 左右都有间距左右外边距平分，

###### 		完全的平均分布： space-evenly（常用）



###### 28、交叉轴的排列方式（辅轴） align-items： flex-start； 从起点开始，flex-end，从终点开始，拉伸，stretch，注意高度的优先级较		高，如果设置了高度，不会拉伸

###### 29、元素居中对齐： 主轴居中，交叉轴居中

###### 30、弹性元素

###### 		将剩余的空间平均分配给其他元素： flex-grow：1

###### 		实际案例： 设置头部 主体 尾部   

###### 		给父元素设置弹性盒子  主轴是y轴， 排列方式是上下顶到头， 设置父元素高度为视口的100vh， 设置头部尾部高度，最后让主体占		满剩下的位置，flex-grow：1



###### 31、控制元素的排列顺序： order：1   默认是0  越大越靠前（靠上）

###### 32、隐藏滚轮：::-webkit-scrollbar {display: none;}














