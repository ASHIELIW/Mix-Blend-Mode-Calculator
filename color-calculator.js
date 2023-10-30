window.addEventListener('DOMContentLoaded', () => {
    const input1 = document.getElementById("input-1");
    const color1 = document.getElementById("color-1");
    const input2 = document.getElementById("input-2");
    const color2 = document.getElementById("color-2");
    const input3 = document.getElementById("input-3");
    const color3 = document.getElementById("color-3");
    const input4 = document.getElementById("input-4");
    const color4 = document.getElementById("color-4");
    const result_1 = document.getElementById("result-color-1");
    const result_2 = document.getElementById("result-color-2");
    const result_3 = document.getElementById("result-color-3");
    const result_4 = document.getElementById("result-color-4");
    function Multiply(a,b) {
        var new_R =  Math.round(Number(("0x"+ a.substring(1,3)).toString(10)) * Number(("0x"+ b.substring(1,3)).toString(10)) /255).toString(16);
        var new_G =  Math.round(Number(("0x"+ a.substring(3,5)).toString(10)) * Number(("0x"+ b.substring(3,5)).toString(10)) /255).toString(16);
        var new_B =  Math.round(Number(("0x"+ a.substring(5)).toString(10)) * Number(("0x"+ b.substring(5)).toString(10)) /255).toString(16);
        var new_HEX = `#${(Array(2).join(0) + new_R).slice(-2)}${(Array(2).join(0) + new_G).slice(-2)}${(Array(2).join(0) + new_B).slice(-2)}`;
        return new_HEX;
    }
    function Difference(a,b) {
        var new_R =  Math.abs(Number(("0x"+ a.substring(1,3)).toString(10)) - Number(("0x"+ b.substring(1,3)).toString(10))).toString(16);
        var new_G =  Math.abs(Number(("0x"+ a.substring(3,5)).toString(10)) - Number(("0x"+ b.substring(3,5)).toString(10))).toString(16);
        var new_B =  Math.abs(Number(("0x"+ a.substring(5)).toString(10)) - Number(("0x"+ b.substring(5)).toString(10))).toString(16);
        var new_HEX = `#${(Array(2).join(0) + new_R).slice(-2)}${(Array(2).join(0) + new_G).slice(-2)}${(Array(2).join(0) + new_B).slice(-2)}`;
        return new_HEX;
    }
    function Screen(a,b) {
        var new_R =  Math.round(255 - ((255 - Number(("0x"+ a.substring(1,3)).toString(10))) * (255 - Number(("0x"+ b.substring(1,3)).toString(10)))) /255).toString(16);
        var new_G =  Math.round(255 - ((255 - Number(("0x"+ a.substring(3,5)).toString(10))) * (255 - Number(("0x"+ b.substring(3,5)).toString(10)))) /255).toString(16);
        var new_B =  Math.round(255 - ((255 - Number(("0x"+ a.substring(5)).toString(10))) * (255 - Number(("0x"+ b.substring(5)).toString(10)))) /255).toString(16);
        var new_HEX = `#${(Array(2).join(0) + new_R).slice(-2)}${(Array(2).join(0) + new_G).slice(-2)}${(Array(2).join(0) + new_B).slice(-2)}`;
        return new_HEX;
    }
    function Darken(a,b) {
        var new_R =  Math.min.apply(null,[ Number(("0x"+ a.substring(1,3)).toString(10)),Number(("0x"+ b.substring(1,3)).toString(10))]).toString(16);
        var new_G =  Math.min.apply(null,[ Number(("0x"+ a.substring(3,5)).toString(10)),Number(("0x"+ b.substring(3,5)).toString(10))]).toString(16);
        var new_B =  Math.min.apply(null,[ Number(("0x"+ a.substring(5)).toString(10)),Number(("0x"+ b.substring(5)).toString(10))]).toString(16);
        var new_HEX = `#${(Array(2).join(0) + new_R).slice(-2)}${(Array(2).join(0) + new_G).slice(-2)}${(Array(2).join(0) + new_B).slice(-2)}`;
        return new_HEX;
    }
    function Lighten(a,b) {
        var new_R =  Math.max.apply(null,[ Number(("0x"+ a.substring(1,3)).toString(10)),Number(("0x"+ b.substring(1,3)).toString(10))]).toString(16);
        var new_G =  Math.max.apply(null,[ Number(("0x"+ a.substring(3,5)).toString(10)),Number(("0x"+ b.substring(3,5)).toString(10))]).toString(16);
        var new_B =  Math.max.apply(null,[ Number(("0x"+ a.substring(5)).toString(10)),Number(("0x"+ b.substring(5)).toString(10))]).toString(16);
        var new_HEX = `#${(Array(2).join(0) + new_R).slice(-2)}${(Array(2).join(0) + new_G).slice(-2)}${(Array(2).join(0) + new_B).slice(-2)}`;
        return new_HEX;
    }
    function Color_Burn(a,b) {
        var new_R =  Math.max.apply(null, [0,Math.round(Number(("0x"+ a.substring(1,3))).toString(10) - (255 - Number(("0x"+ a.substring(1,3))).toString(10)) * (255 - Number(("0x"+ b.substring(1,3))).toString(10)) / Number(("0x"+ b.substring(1,3))).toString(10))]).toString(16);
        var new_G =  Math.max.apply(null, [0,Math.round(Number(("0x"+ a.substring(3,5))).toString(10) - (255 - Number(("0x"+ a.substring(3,5))).toString(10)) * (255 - Number(("0x"+ b.substring(3,5))).toString(10)) / Number(("0x"+ b.substring(3,5))).toString(10))]).toString(16);
        var new_B =  Math.max.apply(null, [0,Math.round(Number(("0x"+ a.substring(5))).toString(10) - (255 - Number(("0x"+ a.substring(5))).toString(10)) * (255 - Number(("0x"+ b.substring(5))).toString(10)) / Number(("0x"+ b.substring(5))).toString(10))]).toString(16);
        var new_HEX = `#${(Array(2).join(0) + new_R).slice(-2)}${(Array(2).join(0) + new_G).slice(-2)}${(Array(2).join(0) + new_B).slice(-2)}`;
        return new_HEX;
    }
    function Color_Dodge(a,b) {
        var new_R =  Math.min.apply(null, [255,Math.round(Number(("0x"+ a.substring(1,3)).toString(10)) + Number(("0x"+ a.substring(1,3)).toString(10)) * Number(("0x"+ b.substring(1,3)).toString(10)) / (255 - Number(("0x"+ b.substring(1,3)).toString(10))))]).toString(16);
        var new_G =  Math.min.apply(null, [255,Math.round(Number(("0x"+ a.substring(3,5)).toString(10)) + Number(("0x"+ a.substring(3,5)).toString(10)) * Number(("0x"+ b.substring(3,5)).toString(10)) / (255 - Number(("0x"+ b.substring(3,5)).toString(10))))]).toString(16);
        var new_B =  Math.min.apply(null, [255,Math.round(Number(("0x"+ a.substring(5)).toString(10)) + Number(("0x"+ a.substring(5)).toString(10)) * Number(("0x"+ b.substring(5)).toString(10)) / (255 - Number(("0x"+ b.substring(5)).toString(10))))]).toString(16);
        var new_HEX = `#${(Array(2).join(0) + new_R).slice(-2)}${(Array(2).join(0) + new_G).slice(-2)}${(Array(2).join(0) + new_B).slice(-2)}`;
        return new_HEX;
    }
    function Linear_Burn(a,b) {
        var new_R =  Math.max.apply(null, [0, Number((Number(("0x"+ a.substring(1,3)).toString(10)) + Number(("0x"+ b.substring(1,3)).toString(10) -255))) ]).toString(16);
        var new_G =  Math.max.apply(null, [0, Number((Number(("0x"+ a.substring(3,5)).toString(10)) + Number(("0x"+ b.substring(3,5)).toString(10) -255))) ]).toString(16);
        var new_B =  Math.max.apply(null, [0, Number((Number(("0x"+ a.substring(5)).toString(10)) + Number(("0x"+ b.substring(5)).toString(10) -255))) ]).toString(16);
        var new_HEX = `#${(Array(2).join(0) + new_R).slice(-2)}${(Array(2).join(0) + new_G).slice(-2)}${(Array(2).join(0) + new_B).slice(-2)}`;
        return new_HEX;
    }
    function Linear_Dodge(a,b) {
        var new_R =  Math.min.apply(null, [255, Number((Number(("0x"+ a.substring(1,3)).toString(10)) + Number(("0x"+ b.substring(1,3)).toString(10)))) ]).toString(16);
        var new_G =  Math.min.apply(null, [255, Number((Number(("0x"+ a.substring(3,5)).toString(10)) + Number(("0x"+ b.substring(3,5)).toString(10)))) ]).toString(16);
        var new_B =  Math.min.apply(null, [255, Number((Number(("0x"+ a.substring(5)).toString(10)) + Number(("0x"+ b.substring(5)).toString(10)))) ]).toString(16);
        var new_HEX = `#${(Array(2).join(0) + new_R).slice(-2)}${(Array(2).join(0) + new_G).slice(-2)}${(Array(2).join(0) + new_B).slice(-2)}`;
        return new_HEX;
    }
// 逆运算函数
    function Multiply_reverse(a,c) {
        var R_a = parseInt(a.substring(1,3),16);
        var R_c = parseInt(c.substring(1,3),16);
        var G_a = parseInt(a.substring(3,5),16);
        var G_c = parseInt(c.substring(3,5),16);
        var B_a = parseInt(a.substring(5),16);
        var B_c = parseInt(c.substring(5),16);
        var R_b = Math.round(R_c * 255 / R_a);
        var G_b = Math.round(G_c * 255 / G_a);
        var B_b = Math.round(B_c * 255 / B_a);
        if (R_b <= 255 && G_b<=255 && B_b<=255) {
            var new_HEX = `#${(Array(2).join(0) +  R_b.toString(16)).slice(-2)}${(Array(2).join(0) +  G_b.toString(16)).slice(-2)}${(Array(2).join(0) +  B_b.toString(16)).slice(-2)}`;
            document.getElementById("resultHEX-2").innerHTML=new_HEX;
            color4.style.setProperty("background",new_HEX);
            return new_HEX;
        } else {
            document.getElementById("resultHEX-2").innerHTML="Input is invalid!";
            return "Input is invalid!";
        }
    }
    function abs_reverse(a,c) { //这里 ac 是十进制
        if (a>=c) {
            if (a+c<=255) {
                b = [a-c , a+c];
            } else {
                b = [a-c];
            }
        } else {
            if (a+c<=255) {
                b = [a+c];
            } else {
                b = null;
            }
        }
        return b;
    }
    function Difference_reverse(a,c) {
        var R_a = parseInt(a.substring(1,3),16);
        var R_c = parseInt(c.substring(1,3),16);
        var G_a = parseInt(a.substring(3,5),16);
        var G_c = parseInt(c.substring(3,5),16);
        var B_a = parseInt(a.substring(5),16);
        var B_c = parseInt(c.substring(5),16);
        var R_b = abs_reverse(R_a,R_c);
        var G_b = abs_reverse(G_a,G_c);
        var B_b = abs_reverse(B_a,B_c);
        var all_HEX = [];
        if (R_b != null && G_b != null && B_b != null) {
            R_b.forEach(function(R){
                G_b.forEach(function(G){
                    B_b.forEach(function(B){
                        var candidate_HEX = `#${(Array(2).join(0) +  R.toString(16)).slice(-2)}${(Array(2).join(0) +  G.toString(16)).slice(-2)}${(Array(2).join(0) +  B.toString(16)).slice(-2)}`;
                        //就是这里呃，能不能把 RGB 连接起来组合情况输出成数组
                        all_HEX.push(candidate_HEX);
                    })
                })
            })
        document.getElementById("resultHEX-2").innerHTML=all_HEX.join("<br>");
        color4.style.setProperty("background",all_HEX[0]);
        return all_HEX;
        } else {
            document.getElementById("resultHEX-2").innerHTML="Input is invalid!";
            return "Input is invalid!";
        }
    }
    function Screen_reverse (a,c) {
        var R_a = parseInt(a.substring(1,3),16);
        var R_c = parseInt(c.substring(1,3),16);
        var G_a = parseInt(a.substring(3,5),16);
        var G_c = parseInt(c.substring(3,5),16);
        var B_a = parseInt(a.substring(5),16);
        var B_c = parseInt(c.substring(5),16);
        var R_b = Math.round(255 - 255*(R_c -255)/(R_a -255));
        var G_b = Math.round(255 - 255*(G_c -255)/(G_a -255));
        var B_b = Math.round(255 - 255*(B_c -255)/(B_a -255));
        if (R_b >=0 && G_b>=0 && B_b>=0) {
            var new_HEX = `#${(Array(2).join(0) +  R_b.toString(16)).slice(-2)}${(Array(2).join(0) +  G_b.toString(16)).slice(-2)}${(Array(2).join(0) +  B_b.toString(16)).slice(-2)}`;
            document.getElementById("resultHEX-2").innerHTML=new_HEX;
            color4.style.setProperty("background",new_HEX);
            return new_HEX;
        } else {
            document.getElementById("resultHEX-2").innerHTML="Input is invalid!";
        }

    }
    
    var functions = [Multiply, Difference, Screen, Darken, Lighten, Color_Burn,Color_Dodge, Linear_Burn, Linear_Dodge];
    var functions_reverse = [Multiply_reverse,Difference_reverse,Screen_reverse];

    let reg =  /^#?([0-9a-fA-F]{6})$/;
    window.addEventListener('input', () => {
        if (reg.test(input1.value)) {
            color1.style.setProperty("background",input1.value);
            result_1.style.setProperty("background",input1.value);
            result_3.style.setProperty("background",input1.value);
        }
        if (reg.test(input2.value)) {
            color2.style.setProperty("background",input2.value);
            result_2.style.setProperty("background",input2.value);
            result_3.style.setProperty("background",input2.value);
        }
        if (reg.test(input1.value) && reg.test(input2.value)) {
            var index = document.getElementById("mode").value;
            var newHEX = functions[index](input1.value,input2.value);
            result_3.style.setProperty("background",newHEX);
            document.getElementById("resultHEX-1").innerHTML=newHEX;
        }
        if (reg.test(input3.value)) {
            result_4.style.setProperty("background",input3.value);
        }
        if (reg.test(input4.value)) {
            color3.style.setProperty("background",input4.value);
        }
        if (reg.test(input3.value)&&reg.test(input4.value)) {
            var index_2 = document.getElementById("mode-2").value;
            functions_reverse[index_2](input4.value,input3.value);
        }
    })

})
