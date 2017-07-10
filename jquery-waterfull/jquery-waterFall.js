/*扩展jQuery 的方法。
* 扩展jQuery 的方法分为两种类型的方法
*
* 一种是扩展jQuery 的全局方法，一种是局部方法。
* 什么时候扩展全局方法
* 一般假设我要扩展的是工具方法，我就扩展全局方法.
* $.trim()
* 什么时候扩展局部方法
* 我的这个方法要做页面上面的dom 元素，我们可以扩展局部方法
* attr addClass removeClass
* 怎么去扩展局部方法
* */
$.fn.waterFall=function(){
     //"use strict"; //扩展局部方法.
     //alert("这个是我扩展的局部方法");
     //编写逻辑，来完成瀑布流的布局.
     //我要这个里面对items 里面的item 进行布局.
     //我要得到一些前提条件.

     var $items=$(this);

     //获取到元素的width
     var parentWidth=$items.width();

     //alert(parentWidth);
     //先要获取到item
     var $item=$items.children();

     //获取到item 的宽度.
     var width=$item.width();

     //alert(width);

     //定义这个瀑布流有多少列.

     /*
     *
     * 1：我要获取到window 窗口的宽度，获取到这个宽度如果大于1200px
     * 2：设置containers 的宽度等于1200px
     * 3：然后如果window 的窗口的宽度小于1200px
      *4：我就设置 containers 的宽度等于 窗口的width 百分比
     * 5:计算出这个列数   containerwidth/imageWidth+space
     * */

     var column=5;

     //计算出来这个间距.
     var space=(parentWidth-column*width)/(column-1);
     //alert(space);  //开始做定位，我要定位items 下面所有的item
     //我要得到所有的item，得到肯定是一个数组，遍历这个数组，得到的是每一个item/
     //计算每一个item 的位置。然后设置这个item 的位置.

    var arr=[];

    $item.each(function(index,dom){
           //先计算出来第一行的,第一行所有的top 都等于0
           //一行五列
           var $dom=$(dom);
           if(index<column){
               //前面的五个元素.
               $dom.css({
                   left:index*(width+space),
                   top:"0"
               });
               arr[index]=$dom.height();
               //这个里面会走几次，5次，每一个item 代表每一列的元素。我可以获取到item 的高度
           }else{

               //我要从数组里面找到最小的那个值，以及这个值对应的索引。
               //console.log(arr);
               //第六个元素，走else ，没有设置位置，默认值left 0 top：0

               //最小那一列的索引等于0
               var minIndex=0;
               var minHeight=arr[minIndex];

               //从数组里面遍历，进行比较，找到最矮的一列的元素.以及索引
               for(var i=0;i<arr.length;i++){
                   if(minHeight>arr[i]){
                        minIndex=i;
                        minHeight=arr[i];
                   }
               }
               $dom.css({
                    top:minHeight+space,
                    left:minIndex*(width+space)
               });
               //刷新
               arr[minIndex]=minHeight+space+$dom.height();


               //我要找到最矮的这一列，找到最矮的索引 left 值就可以计算出来
               //找到最矮的这一列的告诉，我就可以计算出来top 值.
           }
    })

    //计算最高的那一列
    var maxIndex=0;
    var maxHeihgt=arr[maxIndex];
    for(var j=0;j<arr.length;j++){
        if(maxHeihgt<arr[j]){
            maxIndex=j;
            maxHeihgt=arr[j];
        }
    }
    //设置$items 的高度.
    $items.height(maxHeihgt+30+"px");
}