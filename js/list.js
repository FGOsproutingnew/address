$(function () {
    let arr = [
        {
            name:'王瑞仁',tel:13663584777,py:'wangruiren'
        },
        {
            name:'杨淑祺',tel:13663584232,py:'yangshuqi'
        },
        {
            name:'安彤',tel:13663583467,py:'antong'
        },
        {
            name:'夏锡淼',tel:13663589605,py:'xiaximiao'
        },
        {
            name:'张艺',tel:13663583478,py:'zhangyi'
        },
        {
            name:'李志强',tel:13663587398,py:'lizhiqiang'
        },
        {
            name:'高鑫',tel:13663582468,py:'gaoxin'
        },
        {
            name:'刘新宇',tel:13654324232,py:'liuxinyu'
        },
        {
            name:'温智汝',tel:13658984232,py:'wenzhiru'
        },
        {
            name:'张志鹏',tel:13612214232,py:'zhangzhipeng'
        },
        {
            name:'常晨',tel:13645324232,py:'changcheng'
        },
        {
            name:'王波',tel:13663556232,py:'wangbo'
        },
        {
            name:'丰华',tel:13333584232,py:'fenghua'
        },
    ]
    let main = $('.box')
    let initial = $('.initial > ul')

    render(arr);
    function render(arr) {
        main.empty();
        initial.empty();
        let person = {
        };
        arr.forEach(ele => {
            let firstChar = ele.py.charAt(0).toUpperCase()

            if (!person[firstChar]) {
                person[firstChar] = [];
            }
            person[firstChar].push(ele);
        })

        let keysarr = Object.keys(person).sort();

        let html = '';
        let html1 = '';
        for (let i = 0; i < keysarr.length; i++) {
            let ele = keysarr[i]

            html += `
       
        <div class="a"><p>${ele}</p></div>
        `;
            html1 +=`
             <li>${ele}</li>`;
            for (let j = 0; j < person[ele].length; j++) {
                let info = person[ele][j];
                html += `
            <div class="b"><span>${info.name}</span></div>
        `
            }

        }
        main.html(html)
        initial.html(html1)

    }
    let input = $('input');
    input.on('input',function () {
        let val =$(this).val();
        let newarr =arr.filter(ele=>ele.name.includes(val));
        render(newarr);
    })
})