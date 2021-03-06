//定义一个函数，为一个元素中添加指定class属性值
            //cn要添加的class属性值
            function addclass(obj,cn){
                //检查是否有cn
                if(hasclass(obj,cn)){}//有就不添加
                else{                   //没有才添加

                    obj.className+=' '+cn
                }
            }

            //判断一个元素中是否含有指定class属性值
            function hasclass(obj,cn){
               // var reg=/\bb2\b/;   //\b表示单词边界，有独立的b2，但是这样写死了

                //所以用另一种方法创建,将变量cn传入，从而动态生成正则表达式
                var reg=new RegExp('\\b'+cn+'\\b')
                return reg.test(obj.className)

            }

            //删除一个元素的指定class属性
            function removeclass(obj,cn){
                var reg=new RegExp('\\b'+cn+'\\b')

                obj.className=obj.className.replace(reg,'')
            }

            //切换一个类
            //如果元素中有该类，就删了
            //如果元素中没有，就添加
            function toggleclass(obj,cn){
                
                //判断obj中是否有cn
               if( hasclass(obj,cn)){
                   removeclass(obj,cn)
               }
               else{
                   addclass(obj,cn)
               }

            }